import fs from "fs/promises";
import path from "path";

import esbuild, { OnLoadResult } from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import { globby } from "globby";
import postcss from "postcss";
import postcssModulesPlugin from "postcss-modules";
import { defineConfig } from "tsup";

import { generateScopedName } from "@camome/utils";

async function copyScssFiles(src: string, dist: string) {
  const files = await globby(`${src}/**/*.scss`);
  for (const filepath of files) {
    const distPath = filepath.replace(src, dist);
    await fs.mkdir(path.dirname(distPath), { recursive: true });
    await fs.copyFile(filepath, distPath);
  }
}

async function fixScssImports(dir: string) {
  const files = await globby(`${dir}/**/*.scss`);
  for (const filepath of files) {
    const content = await fs.readFile(filepath, "utf-8");
    const replaced = content.replace(
      /@use "(..\/..\/)(.*)styles/g,
      `@use "../$2styles`
    );
    await fs.writeFile(filepath, replaced);
  }
}

async function createBulletFile(dist: string) {
  const componentDirs = await globby([`${dist}/*`, "!*/styles"], {
    onlyDirectories: true,
  });
  let esmContent = "";
  let dtsContent = "";
  let cjsRequires = "";
  let cjsModules = "";
  for (const dirPath of componentDirs) {
    const componentName = path.basename(dirPath);
    esmContent += `export * from "./${componentName}/index.mjs";\n`;
    dtsContent += `export * from "./${componentName}";\n`;
    cjsRequires += `const ${componentName} = require("./${componentName}/index.cjs");\n`;
    cjsModules += `  ...${componentName},\n`;
  }
  const cjsExports = `module.exports = {\n${cjsModules}\n}`;
  const cjsContent = `${cjsRequires}\n\n${cjsExports}`;
  await Promise.all([
    fs.writeFile(path.join(dist, "index.mjs"), esmContent),
    fs.writeFile(path.join(dist, "index.d.ts"), dtsContent),
    fs.writeFile(path.join(dist, "index.cjs"), cjsContent),
  ]);
}

async function generateBundledCss(dist: string) {
  await esbuild.build({
    entryPoints: [path.join(dist, "index.mjs")],
    outdir: dist,
    bundle: true,
    plugins: [
      sassPlugin({
        transform: postcssModules(),
      }),
    ],
  });
  await Promise.all([
    fs.rm(path.join(dist, "index.js")),
    fs.rename(path.join(dist, "index.css"), path.join(dist, "components.css")),
  ]);
}

export function postcssModules() {
  return async function (source: string, path: string): Promise<OnLoadResult> {
    const { css } = await postcss([
      postcssModulesPlugin({
        generateScopedName(name, filename) {
          return generateScopedName(name, filename);
        },
        getJSON() {
          return;
        },
      }),
    ]).process(source, { from: path, map: false });

    return {
      contents: css,
      loader: "css",
    };
  };
}

export default defineConfig(async () => {
  return {
    entry: await globby("./src/components/*/index.tsx"),
    minify: true,
    sourcemap: true,
    treeshake: true,
    dts: true,
    format: ["esm", "cjs"],
    noExternal: ["@heroicons/react", "clsx"],
    outExtension(ctx) {
      return { js: ctx.format === "esm" ? ".mjs" : ".cjs" };
    },
    esbuildOptions: (options) => {
      options.assetNames = "[dir]/[name]";
      return options;
    },
    loader: {
      ".scss": "copy",
    },
    onSuccess: async () => {
      await Promise.all([
        copyScssFiles("./src/components", "./dist"),
        copyScssFiles("./src/styles", "./dist/styles"),
      ]);
      await fixScssImports("./dist");
      await createBulletFile("./dist");
      await generateBundledCss("./dist");
    },
  };
});

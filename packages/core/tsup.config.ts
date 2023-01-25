import fs from "fs/promises";
import path from "path";

import { globby } from "globby";
import { defineConfig } from "tsup";

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

export default defineConfig(async () => {
  const entries = await globby("./src/components/*/index.tsx");
  return {
    entry: entries,
    clean: true,
    format: ["esm", "cjs"],
    dts: true,
    minify: false,
    sourcemap: true,
    loader: {
      ".module.scss": "copy",
    },
    esbuildOptions: (options) => {
      options.assetNames = "[dir]/[name]";
      options.splitting = false;
      return options;
    },
    outExtension(ctx) {
      return { js: ctx.format === "esm" ? ".mjs" : ".cjs" };
    },
    onSuccess: async () => {
      await Promise.all([
        copyScssFiles("./src/components", "./dist"),
        copyScssFiles("./src/styles", "./dist/styles"),
      ]);
      await fixScssImports("./dist");
    },
  };
});

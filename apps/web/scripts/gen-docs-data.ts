import fs from "fs/promises";
import path from "path";
import zlib from "zlib";

import autoprefixer from "autoprefixer";
import { build, OnLoadResult, type BuildResult } from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import { globby } from "globby";
import postcss, { AcceptedPlugin } from "postcss";
import PostcssModulesPlugin from "postcss-modules";
import { format } from "prettier";
import React from "react";
import { renderToString } from "react-dom/server";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import { buildScopedClassName, hash } from "@camome/utils";

const argv = yargs(hideBin(process.argv))
  .options({
    watch: {
      type: "boolean",
      alias: "w",
      default: false,
    },
  })
  .parseSync();

const STORIES_DIR = path.join(
  "node_modules",
  "@camome",
  "storybook",
  "src",
  "stories"
);
const DOCS_DATA_DIR = ".docs-data";
const STORIES_OUT_DIR = path.join(DOCS_DATA_DIR, "demo");
const processes: BuildResult[] = [];

function extractStoryPath(filePath: string) {
  return filePath.replace(STORIES_DIR, "");
}

async function bundleStory(storyFullPath: string) {
  const storyPath = extractStoryPath(storyFullPath);
  const outdir = path.join(STORIES_OUT_DIR, storyPath.replace(".tsx", ""));

  const onBuild = async () => {
    const modulePath = path.join("..", outdir, "bundle.jsx");
    delete require.cache[require.resolve(modulePath)];
    const { default: Story } = await require(modulePath);
    const css = await fs.readFile(path.join(outdir, "bundle.css"));
    const storyCode = await fs.readFile(storyFullPath);
    const layout = Story.parameters?.layout;

    const ssr = renderToString(React.createElement(Story));

    const componentOutDir = path.resolve(__dirname, "..", outdir);

    const index = `import Component from "./bundle";

const react = \`${storyCode}\`;
const css = \`${css}\`;
const html = \`${format(ssr, {
      parser: "html",
      htmlWhitespaceSensitivity: "ignore",
    })}\`;
const layout = ${layout ? `"${layout}"` : "undefined"};

export default {
  Component,
  react,
  css,
  html,
  layout,
}`;

    await fs.mkdir(componentOutDir, {
      recursive: true,
    });

    await fs.writeFile(path.resolve(componentOutDir, "index.jsx"), index);
  };

  const result = await build({
    entryPoints: [path.resolve(storyFullPath)],
    bundle: true,
    outdir,
    entryNames: "[dir]/bundle",
    platform: "node",
    treeShaking: true,
    format: "esm",
    external: ["react", "react-dom"],
    outExtension: { ".js": ".jsx" },
    tsconfig: "node_modules/@camome/core/tsconfig.json",
    jsx: "automatic",
    legalComments: "none",
    watch: argv.watch
      ? {
          onRebuild: onBuild,
        }
      : undefined,
    plugins: [
      sassPlugin({
        transform: postcssModules([autoprefixer()]),
      }),
    ],
  });

  processes.push(result);

  await onBuild();
}

async function calculateBundleSize() {
  const OUT_DIR = path.join(DOCS_DATA_DIR, "bundle-size");
  const components = await globby(
    "./node_modules/@camome/core/dist/*/index.mjs"
  );

  await build({
    entryPoints: components,
    external: ["react"],
    format: "esm",
    bundle: true,
    outdir: OUT_DIR,
    minify: true,
    plugins: [
      sassPlugin({
        transform: postcssModules(),
      }),
    ],
  });
  const dataRecord: Record<string, { js: number; css: number }> = {};
  const outDirs = await globby(`${OUT_DIR}/*`, { onlyDirectories: true });
  for (const dir of outDirs) {
    const [js, css] = await Promise.all([
      fs.readFile(path.join(dir, "index.js")),
      fs.readFile(path.join(dir, "index.css")).catch(() => {
        // Some components don't have styles.
      }),
    ]);
    dataRecord[path.basename(dir).trim()] = {
      js: zlib.gzipSync(js).length,
      css: css ? zlib.gzipSync(css).length : 0,
    };
  }
  await fs.rm(OUT_DIR, {
    recursive: true,
    force: true,
  });
  await fs.writeFile(
    path.join(DOCS_DATA_DIR, "bundle-size.json"),
    JSON.stringify(dataRecord, null, 2)
  );
}

(async () => {
  const storyFullPaths = await globby([
    STORIES_DIR + "/**/*.tsx",
    "!**/index.stories.tsx",
  ]);

  await fs.rm(DOCS_DATA_DIR, {
    recursive: true,
    force: true,
  });
  await fs.mkdir(DOCS_DATA_DIR);

  await Promise.all(storyFullPaths.map(bundleStory));
  await calculateBundleSize();
})().catch((e) => {
  console.error(e);
  processes.forEach((p) => void p.stop?.());
  process.exit(1);
});

function postcssModules(plugins: AcceptedPlugin[] = []) {
  return async function (source: string, path: string): Promise<OnLoadResult> {
    const { css } = await postcss([
      PostcssModulesPlugin({
        generateScopedName(name, filename) {
          if (filename.includes("apps/storybook")) {
            return "story-" + hash(filename + name);
          }
          return buildScopedClassName(name, filename);
        },
        getJSON() {
          return;
        },
      }),
      ...plugins,
    ]).process(source, { from: path, map: false });

    return {
      contents: css,
      loader: "css",
    };
  };
}

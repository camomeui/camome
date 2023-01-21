import fs from "fs/promises";
import path from "path";

import { build, type BuildResult } from "esbuild";
import { globby } from "globby";
import { format } from "prettier";
import React from "react";
import { renderToString } from "react-dom/server";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import { buildScopedClassName, hash } from "@camome/utils";

import { CssModulesPlugin } from "../src/lib/CssModulesPlugin/index.mjs";

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

  const generatedCss: string[] = [];

  const onBuild = async () => {
    const modulePath = path.join("..", outdir, "bundle.jsx");
    delete require.cache[require.resolve(modulePath)];
    const { default: Story } = await require(modulePath);
    const storyCode = await fs.readFile(storyFullPath);
    const layout = Story.parameters?.layout;

    const ssr = renderToString(React.createElement(Story));

    const componentOutDir = path.resolve(__dirname, "..", outdir);

    const index = `import Component from "./bundle";

const react = \`${storyCode}\`;
const css = \`${generatedCss.join("\n")}\`;
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
    watch: argv.watch
      ? {
          onRebuild: onBuild,
        }
      : undefined,
    plugins: [
      CssModulesPlugin({
        generateScopedName,
        onGenerateCss(css) {
          generatedCss.push(css);
        },
      }),
    ],
  });

  processes.push(result);

  await onBuild();
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
})().catch((e) => {
  console.error(e);
  processes.forEach((p) => void p.stop?.());
  process.exit(1);
});

function generateScopedName(local: string, filename: string) {
  if (filename.includes("apps/storybook")) {
    return "story-" + hash(filename + local);
  }
  return buildScopedClassName(local, filename);
}
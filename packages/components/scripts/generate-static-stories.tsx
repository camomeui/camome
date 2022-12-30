import fs from "fs/promises";
import path from "path";

import { build } from "esbuild";
import { globby } from "globby";
import React from "react";
import { renderToString } from "react-dom/server";

import { buildScopedClassName, hash } from "@camome/utils";

import CssModulesPlugin from "./CssModulesPlugin";

const COMPONENTS_DIR = path.join("src", "components");

function extractStoryPath(filePath: string) {
  return filePath.split(COMPONENTS_DIR + path.sep)[1].replace("/stories", "");
}

async function bundleStory(storyFullPath: string) {
  const storyPath = extractStoryPath(storyFullPath);
  const outdir = path.join(".stories", storyPath.replace(".tsx", ""));

  const generatedCss: string[] = [];
  await build({
    entryPoints: [path.resolve(storyFullPath)],
    bundle: true,
    outdir,
    platform: "node",
    treeShaking: true,
    format: "esm",
    external: ["react", "react-dom"],
    outExtension: { ".js": ".jsx" },
    logLevel: "debug",
    plugins: [
      CssModulesPlugin({
        v2: true,
        onGenerateCss(css) {
          generatedCss.push(css);
        },
        // generateScopedName(local, filename) {
        //   const dir = filename.split("/").at(-2);
        //   if (
        //     dir === "stories" ||
        //     filename.endsWith("index.stories.module.scss")
        //   ) {
        //     const className = hash(filename + local);
        //     return className.match(/^[0-9]/) ? `_${className}` : className;
        //   }
        //   return buildScopedClassName(local, filename);
        // },
      }),
    ],
  });

  const { default: Story } = await require(path.join(
    "..",
    outdir,
    storyPath.split("/").at(-1)!.replace("tsx", "jsx")
  ));
  const storyCode = await fs.readFile(path.join(storyFullPath));

  const ssr = renderToString(<Story />);
  const componentOutDir = path.resolve(__dirname, "..", outdir);

  await fs.mkdir(componentOutDir, {
    recursive: true,
  });

  await Promise.all([
    fs.writeFile(path.resolve(componentOutDir, `index.html`), ssr),
    fs.writeFile(
      path.resolve(componentOutDir, `styles.css`),
      generatedCss.join("\n")
    ),
    fs.writeFile(path.resolve(componentOutDir, `code.tsx`), storyCode),
  ]);
}

(async () => {
  const storyFullPaths = await globby([
    COMPONENTS_DIR + "/**/stories/*.tsx",
    "!**/index.stories.tsx",
  ]);
  await Promise.all(storyFullPaths.map(bundleStory));
})().catch((e) => {
  console.error(e);
  process.exit(1);
});

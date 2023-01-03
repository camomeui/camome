import fs from "fs/promises";
import path from "path";

import { build } from "esbuild";
import { globby } from "globby";
import React from "react";
import { renderToString } from "react-dom/server";

import { buildScopedClassName, hash } from "@camome/utils";

import CssModulesPlugin from "./CssModulesPlugin";

const COMPONENTS_DIR = path.join("src", "components");
const STORIES_SRC_DIR = "_stories" as const;
const STORIES_OUT_DIR = ".stories" as const;

function extractStoryPath(filePath: string) {
  const ret = filePath
    .split(COMPONENTS_DIR + path.sep)[1]
    .replace(path.join(path.sep, STORIES_SRC_DIR), "");
  return ret.startsWith(STORIES_SRC_DIR)
    ? ret.replace(STORIES_SRC_DIR, "")
    : ret;
}

async function bundleStory(storyFullPath: string) {
  const storyPath = extractStoryPath(storyFullPath);
  const outdir = path.join(STORIES_OUT_DIR, storyPath.replace(".tsx", ""));

  const generatedCss: string[] = [];

  const onBuild = async () => {
    const modulePath = path.join("..", outdir, "bundle.jsx");
    delete require.cache[require.resolve(modulePath)];
    const { default: Story } = await require(modulePath);
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
  };

  await build({
    entryPoints: [path.resolve(storyFullPath)],
    bundle: true,
    outdir,
    entryNames: "[dir]/bundle",
    platform: "node",
    treeShaking: true,
    format: "esm",
    external: ["react", "react-dom"],
    outExtension: { ".js": ".jsx" },
    watch: {
      onRebuild: onBuild,
    },
    plugins: [
      CssModulesPlugin({
        v2: true,
        onGenerateCss(css) {
          generatedCss.push(css);
        },
      }),
    ],
  });

  await onBuild();
}

(async () => {
  const storyFullPaths = await globby([
    COMPONENTS_DIR + `/**/${STORIES_SRC_DIR}/*.tsx`,
    "!**/index.stories.tsx",
  ]);

  await fs.rm(STORIES_OUT_DIR, {
    recursive: true,
    force: true,
  });

  await Promise.all(storyFullPaths.map(bundleStory));
})().catch((e) => {
  console.error(e);
  process.exit(1);
});

import fs from "fs";

import chokidar from "chokidar";
import { globbySync } from "globby";

import { toKebabCase } from "@camome/utils";

const STORIES_DIR = "node_modules/@camome/core/.stories/" as const;
const DOCS_DIR = "content/docs/components/" as const;
const INTERVAL_MS = 1000 as const;
const cache = new Map<string, number>();

function triggerContentlayerBuild(filepath: string) {
  const storyPath = filepath.replace(STORIES_DIR, "");
  const componentName = storyPath.split("/")[0];

  // Prevent frequent touches.
  const now = Date.now();
  const last = cache.get(componentName);
  cache.set(componentName, now);
  if (last && now - last < INTERVAL_MS) {
    return;
  }

  const mdxPaths = globbySync(
    `${DOCS_DIR}/**/${toKebabCase(componentName)}.mdx`
  );
  if (mdxPaths.length > 0) {
    touch(mdxPaths[0]);
  }
}

function touch(fileName: string) {
  try {
    const time = new Date();
    fs.utimesSync(fileName, time, time);
  } catch {
    fs.closeSync(fs.openSync(fileName, "w"));
  }
}

const watcher = chokidar.watch(STORIES_DIR);
watcher.on("add", triggerContentlayerBuild);
watcher.on("change", triggerContentlayerBuild);
watcher.on("unlink", triggerContentlayerBuild);

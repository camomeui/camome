import fs from "fs/promises";

import cssnano from "cssnano";
import postcss from "postcss";

import { generateCss } from "../dist/index.mjs";

const DIST_PATH = "./dist/theme.css";
const TO_PATH = "./dist/theme.min.css";

(async () => {
  const css = await generateCss();
  await fs.writeFile(DIST_PATH, css);
  const result = await postcss([
    cssnano({
      preset: "default",
    }),
  ]).process(css, { from: DIST_PATH, to: TO_PATH });
  await fs.writeFile(TO_PATH, result.css);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});

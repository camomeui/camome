import fs from "fs/promises";

import cssnano from "cssnano";
import postcss from "postcss";

import { generateCss, defineTheme } from "../dist/index.esm.js";

const DIST_PATH = "./dist/style.css";
const TO_PATH = "./dist/style.min.css";

(async () => {
  const css = await generateCss({
    dark: defineTheme("dark"),
    light: defineTheme("light"),
  });
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

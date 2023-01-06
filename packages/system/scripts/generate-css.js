import fs from "fs/promises";
import postcss from "postcss";
import cssnano from "cssnano";

import { generateCss, lightTheme } from "../dist/index.esm.js";

const DIST_PATH = "./dist/style.css";
const TO_PATH = "./dist/style.min.css";

(async () => {
  const css = await generateCss(lightTheme);
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

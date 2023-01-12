#!/usr/bin/env node

import fs from "fs/promises";
import path from "path";

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import { generateCss } from "@camome/system";

yargs(hideBin(process.argv))
  .command(
    "generate-css",
    "Generate CSS",
    (yargs) =>
      yargs.options({
        config: {
          type: "string",
          default: "camome.config.js",
        },
        output: {
          type: "string",
          default: "camome.css",
        },
      }),
    async (options) => {
      // TODO: validate config with zod or something.
      const config = (await import(path.join(process.cwd(), options.config)))
        .default;
      const css = await generateCss(config.themes);
      const outputPath = path.join(process.cwd(), options.output);
      await fs.writeFile(outputPath, css);
      console.log(`CSS file exported to:\n${outputPath}`);
    }
  )
  .strict()
  .alias({ h: "help" }).argv;

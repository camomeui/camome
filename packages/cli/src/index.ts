#!/usr/bin/env node

import fs from "fs/promises";
import path from "path";
import { pathToFileURL } from "url";

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import { Config, generateCss } from "@camome/system";

yargs(hideBin(process.argv))
  .scriptName("camome")
  .command(
    "theme",
    "Generate theme.css",
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
      let config: Config;
      try {
        // `pathToFileURL` is required only on Windows.
        // https://github.com/nodejs/node/issues/31710#issuecomment-584539214
        config = (
          await import(
            pathToFileURL(path.join(process.cwd(), options.config)).href
          )
        ).default;
      } catch (e: any) {
        if ("code" in e && e.code === "ERR_MODULE_NOT_FOUND") {
          console.error(`Config file not found at:\n${options.config}`);
        }
        console.error(e);
        process.exit(1);
      }
      const css = await generateCss(config);
      const outputPath = path.join(process.cwd(), options.output);
      await fs.writeFile(outputPath, css);
      console.log(`CSS file exported to:\n${outputPath}`);
    }
  )
  .strict()
  .alias({ h: "help" }).argv;

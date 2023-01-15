import { deepmerge } from "deepmerge-ts";
import { format } from "prettier";

import type { DeepPartial } from "@camome/utils";

import { DEFAULT_PREFIX, layers } from "../constants";
import { darkTheme } from "../themes";
import { BASE_STYLES } from "../themes/common";

import {
  layer,
  modifyCss,
  layerOrder,
  generateThemeCss,
  splitThemes,
} from "./utils";

import lightTheme from "../themes/light";
import { Theme, Themes } from "../types";

type DefineThemeFn = (theme: Theme) => DeepPartial<Theme>;

export function defineTheme(
  scheme: "light" | "dark",
  config: DefineThemeFn | DeepPartial<Theme> = {}
): Theme {
  const defaultTheme = scheme === "light" ? lightTheme : darkTheme;
  return deepmerge(
    defaultTheme,
    typeof config === "function" ? config(defaultTheme) : config
  ) as Theme;
}

type GenerateCssOptions = {
  prefix?: string;
  selector?: string;
};

export async function generateCss(
  themes: Themes,
  options: GenerateCssOptions = {}
): Promise<string> {
  const { prefix = DEFAULT_PREFIX, selector = ":root" } = options;
  const _layer = (name: string) => layer(prefix, name);

  const normalizeCss = modifyCss(
    (await import("../assets/normalize.css")).default,
    { comment: "Normalize", enclosure: _layer("reset") }
  );

  const { common, dark, light } = splitThemes(themes);

  const commonTheme = modifyCss(
    generateThemeCss(common, {
      prefix,
      selector: selector,
    }),
    {
      comment: "Theme - common",
      enclosure: _layer("theme"),
    }
  );

  const lightTheme = modifyCss(
    generateThemeCss(light, {
      prefix,
      selector: selector + '[data-theme="light"]',
    }),
    {
      comment: "Theme - light",
      enclosure: _layer("theme"),
    }
  );

  const darkTheme = modifyCss(
    generateThemeCss(dark, {
      prefix,
      selector: selector + '[data-theme="dark"]',
    }),
    {
      comment: "Theme - dark",
      enclosure: _layer("theme"),
    }
  );

  const baseCss = modifyCss(BASE_STYLES, {
    comment: "Base",
    enclosure: _layer("base"),
  });
  const css =
    layerOrder(prefix, layers) +
    "\n" +
    [normalizeCss, commonTheme, lightTheme, darkTheme, baseCss].join("\n");

  return format(css, {
    parser: "css",
  });
}

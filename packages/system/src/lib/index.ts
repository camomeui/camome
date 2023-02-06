import { deepmerge } from "deepmerge-ts";
import { format } from "prettier";

import { DeepPartial, generatePaths, getValue, Path } from "@camome/utils";

import { DEFAULT_PREFIX, layers } from "../constants";
import { darkTheme, lightTheme } from "../themes";
import { BASE_STYLES } from "../themes/common";
import { Config, Theme, ThemeConfig } from "../types";

import {
  layer,
  modifyCss,
  layerOrder,
  splitThemes,
  cssVar,
  enclose,
  resolveThemeCallback,
} from "./utils";

export function defineConfig(config: Config) {
  return config;
}

export function makeThemeFromConfig(
  scheme: "light" | "dark",
  config: ThemeConfig = {}
): Theme {
  const defaultTheme = scheme === "light" ? lightTheme : darkTheme;
  return resolveThemeCallback(deepmerge(defaultTheme, config) as Theme);
}

type GenerateCssOptions = {
  prefix?: string;
  selector?: string;
};

export async function generateCss(
  config: Config = {},
  options: GenerateCssOptions = {}
): Promise<string> {
  const { prefix = DEFAULT_PREFIX, selector = ":root" } = options;
  const _layer = (name: string) => layer(prefix, name);

  const normalizeCss = modifyCss(
    (await import("../assets/normalize.css")).default,
    { comment: "Normalize", enclosure: _layer("reset") }
  );

  const { common, dark, light } = splitThemes({
    dark: makeThemeFromConfig("dark", config.themes?.dark),
    light: makeThemeFromConfig("light", config.themes?.light),
  });

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

export function generateThemeCss(
  theme: DeepPartial<Theme>,
  options: Required<GenerateCssOptions>
): string {
  const { prefix, selector } = options;
  let css = "";
  const paths = generatePaths(theme);
  for (const path of paths) {
    const key = cssVar(path as Path<Theme>, {
      prefix,
      withVar: false,
    });
    const val = getValue(theme, path);
    css += `${key}: ${val};\n`;
  }

  css = enclose(css, selector);
  return css;
}

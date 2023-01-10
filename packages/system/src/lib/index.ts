import { deepmerge } from "deepmerge-ts";
import { format } from "prettier";

import type { Path, Replace, DeepPartial } from "@camome/utils";

import { toKebabCase } from "@camome/utils";

import { DEFAULT_PREFIX, layers } from "../constants";
import { darkTheme } from "../themes";
import { BASE_STYLES } from "../themes/common";
import lightTheme from "../themes/light";
import { Theme, Themes } from "../types";

import {
  layer,
  modifyCss,
  layerOrder,
  enclose,
  generatePaths,
  getValue,
} from "./utils";

export function cssVar<
  DotPath extends Path<Theme>,
  Name extends `--${Prefix}-${Replace<DotPath, ".", "-">}`,
  Ret extends WithVar extends true ? `var(${Name})` : Name,
  Prefix extends string,
  WithVar extends boolean = true
>(path: DotPath, options: { prefix?: Prefix; withVar?: WithVar } = {}): Ret {
  const { prefix = DEFAULT_PREFIX, withVar = true } = options;
  const name = `--${prefix}-${toKebabCase(path.replaceAll(".", "-"))}` as Name;
  return (withVar ? `var(${name})` : name) as Ret;
}

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

  const lightTheme = modifyCss(
    generateThemeCss(themes.light, {
      prefix,
      selector: selector + '[data-color-scheme="light"]',
    }),
    {
      comment: "Theme",
      enclosure: _layer("theme"),
    }
  );

  const darkTheme = modifyCss(
    generateThemeCss(themes.dark, {
      prefix,
      selector: selector + '[data-color-scheme="dark"]',
    }),
    {
      comment: "Theme",
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
    [normalizeCss, lightTheme, darkTheme, baseCss].join("\n");

  return format(css, {
    parser: "css",
  });
}

function generateThemeCss(
  theme: Theme,
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

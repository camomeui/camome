import {
  getValue,
  toKebabCase,
  type Path,
  type DeepPartial,
} from "@camome/utils";

import { DEFAULT_PREFIX, themedComponents } from "../constants";
import { Theme, ThemeConfigCallback, WithCallback } from "../types";
import { ThemedComponent } from "../types/component";

export type AppendCssOptions = {
  comment?: string;
  enclosure?: string;
};

export function modifyCss(css: string, options: AppendCssOptions = {}) {
  const { comment, enclosure } = options;
  let ret = css;
  if (enclosure) {
    ret = enclose(ret, enclosure);
  }
  if (comment) {
    ret = prependComment(ret, comment);
  }
  return ret;
}

export function enclose(target: string, value: string) {
  const indented = indent(target);
  return `${value} {\n${indented}\n}`;
}

export function prependComment(target: string, value: string) {
  return `/* ${value} */\n${target}`;
}

export function indent(target: string, indent = "  ") {
  const lines = target.split("\n");
  let indentedCssString = "";
  for (const line of lines) {
    const indentedLine = `${indent}${line}`;
    indentedCssString += `${indentedLine}\n`;
  }
  return indentedCssString;
}

export function layerOrder(
  prefix: string,
  names: string[] | readonly string[]
) {
  const prefixedNames = names.map((name) => `${prefix}.${name}`);
  const namesStr = prefixedNames.join(", ");
  return `@layer ${namesStr};`;
}

export function layer(prefix: string, name: string) {
  return `@layer ${prefix}.${name}`;
}

// TODO: While I don't want this to be dependent on stuff from
// outside (like Theme and themedComponents), making this generic
// function ends up with the following ts error:
// error TS7056: The inferred type of this node exceeds the maximum length the compiler will serialize. An explicit type annotation is needed.
export function cssVar<
  DotPath extends Path<Theme>,
  Prefix extends string,
  WithVar extends boolean = true
>(
  path: DotPath,
  options: {
    prefix?: Prefix;
    withVar?: WithVar;
  } = {}
): string {
  const { prefix = DEFAULT_PREFIX, withVar = true } = options;
  const [firstToken, ...rest] = path.split(".");
  let name: string;
  if (themedComponents.includes(firstToken as ThemedComponent)) {
    name = `${firstToken}-${toKebabCase(rest.join("-"))}`;
  } else {
    name = toKebabCase(path.replaceAll(".", "-"));
  }
  name = `--${prefix}-${name}`;
  return withVar ? `var(${name})` : name;
}

type Obj = Record<string, unknown>;
type SplitThemesParams<T extends Obj> = {
  light: T;
  dark: T;
};

export function splitThemes<T extends Obj>({
  light,
  dark,
}: SplitThemesParams<T>): SplitThemesParams<DeepPartial<T>> & {
  common: DeepPartial<T>;
} {
  const retLight: any = {};
  const retDark: any = {};
  const retCommon: any = {};

  for (const [key, lightVal] of Object.entries(light)) {
    const darkVal = dark[key];

    if (typeof lightVal === "object") {
      const { common, dark, light } = splitThemes({
        light: lightVal as T,
        dark: darkVal as T,
      });
      retCommon[key] = common;
      retLight[key] = light;
      retDark[key] = dark;
      continue;
    }
    if (lightVal === darkVal) {
      retCommon[key] = lightVal;
    } else {
      retLight[key] = lightVal;
      retDark[key] = darkVal;
    }
  }
  return { light: retLight, dark: retDark, common: retCommon };
}

export function resolveThemeCallback(config: WithCallback<Theme>): Theme {
  const get = (key: Path<WithCallback<Theme>>): string => {
    const value = getValue(config, key) as unknown as
      | ThemeConfigCallback
      | string;
    if (typeof value === "function") {
      return value(get);
    } else if (value.startsWith("var")) {
      const path = value
        .match(/^var\(--cmm-([^)]*)\)/)?.[1]
        ?.replaceAll("-", ".");
      if (!path) throw new Error(`Invalid theme path: ${path}`);
      return get(path as any);
    } else {
      return value;
    }
  };

  const _resolveThemeConfig = (_config: any) => {
    const ret: any = {};
    for (const [key, val] of Object.entries(_config)) {
      let resolvedVal;
      if (typeof val === "object") {
        resolvedVal = _resolveThemeConfig(val);
      } else if (typeof val === "function") {
        resolvedVal = val(get);
      } else {
        resolvedVal = val;
      }
      ret[key] = resolvedVal;
    }
    return ret;
  };

  return _resolveThemeConfig(config);
}

export function getFn(path: Path<Theme>): ThemeConfigCallback {
  return (_get) => _get(path);
}

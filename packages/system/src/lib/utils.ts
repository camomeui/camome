import { toKebabCase, type Path } from "@camome/utils";

import { DEFAULT_PREFIX, themedComponents } from "../constants";
import { Theme } from "../types";
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

export function generatePaths<T>(obj: T, prefix = ""): string[] {
  const paths: string[] = [];
  for (const key in obj) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === "object") {
      paths.push(...generatePaths(obj[key] as object, path));
    } else {
      paths.push(path);
    }
  }
  return paths;
}

export function getValue<T, K extends keyof T>(obj: T, key: K | string): T[K] {
  if (typeof key !== "string") {
    return obj[key];
  }
  const keys = key.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let result: any = obj;
  for (const k of keys) {
    result = result[k];
  }
  return result;
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

type GenerateCssOptions = {
  prefix?: string;
  selector?: string;
};

export function generateThemeCss(
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

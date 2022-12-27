import { format } from "prettier";

import type { Theme } from "./types";
import type { Path, Replace } from "@camome/utils";

const DEFAULT_PREFIX = "cmm" as const;
const BASE_STYLES = `body {
  font-family: ${cssVar("font.family.base")};
  -webkit-font-smoothing: antialiased;
}

*:focus-visible {
  outline: ${cssVar("outline.width")} solid ${cssVar("outline.color")};
}

.visually-hidden {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
}` as const;

export const layers = ["reset", "theme", "base"] as const;
export type Layer = typeof layers[number];

function cssVar<
  DotPath extends Path<Theme>,
  Name extends `--${Prefix}-${Replace<DotPath, ".", "-">}`,
  Ret extends WithVar extends true ? `var(${Name})` : Name,
  Prefix extends string = typeof DEFAULT_PREFIX,
  WithVar extends boolean = true
>(path: DotPath, options: { prefix?: Prefix; withVar?: WithVar } = {}): Ret {
  const { prefix = DEFAULT_PREFIX, withVar = true } = options;
  const name = `--${prefix}-${path.replaceAll(".", "-")}` as Name;
  return (withVar ? `var(${name})` : name) as Ret;
}

export const defaultTheme = {
  color: {
    black: "#000",
    white: "#fff",
    gray: {
      50: "#f7fafc",
      100: "#edf2f7",
      200: "#e2e8f0",
      300: "#cbd5e0",
      400: "#a0aec0",
      500: "#718096",
      600: "#4a5568",
      700: "#2d3748",
      800: "#1a202c",
      900: "#171923",
    },
    primary: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
    },
    secondary: {
      50: cssVar("color.gray.50"),
      100: cssVar("color.gray.100"),
      200: cssVar("color.gray.200"),
      300: cssVar("color.gray.300"),
      400: cssVar("color.gray.400"),
      500: cssVar("color.gray.500"),
      600: cssVar("color.gray.600"),
      700: cssVar("color.gray.700"),
      800: cssVar("color.gray.800"),
      900: cssVar("color.gray.900"),
    },
    info: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      300: "#7dd3fc",
      400: "#38bdf8",
      500: "#0ea5e9",
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e",
    },
    success: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
    },
    warn: {
      50: "#fff7ed",
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#f97316",
      600: "#ea580c",
      700: "#c2410c",
      800: "#9a3412",
      900: "#7c2d12",
    },
    danger: {
      50: "#fff5f5",
      100: "#fed7d7",
      200: "#feb2b2",
      300: "#fc8181",
      400: "#f56565",
      500: "#e53e3e",
      600: "#c53030",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
    },
  },
  font: {
    family: {
      base: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"`,
      code: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace`,
    },
    size: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
    },
    weight: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
  },
  outline: {
    color: cssVar("color.primary.400"),
    offset: "2px",
    width: "2px",
  },
  rounded: {
    none: "none",
    xs: "0.125rem",
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    full: "9999px",
  },
  shadow: {
    color: "rgba(12, 12, 13, 0.1)",
    xs: `2px 2px 2px ${cssVar("shadow.color")}`,
    sm: `2px 2px 6px ${cssVar("shadow.color")}`,
    md: `2px 2px 10px ${cssVar("shadow.color")}`,
    lg: `2px 2px 14px ${cssVar("shadow.color")}`,
    xl: `2px 2px 18px ${cssVar("shadow.color")}`,
  },
  transition: {
    bg: "background-color 0.3s",
  },
} as const satisfies Theme;

type DefineThemeFn = (theme: Theme) => Theme;

export function defineTheme(fn: DefineThemeFn): Theme {
  return fn(defaultTheme);
}

type GenerateCssOptions = {
  prefix?: string;
  selector?: string;
};

export async function generateCss(
  theme: Theme,
  options: GenerateCssOptions = {}
): Promise<string> {
  const { prefix = DEFAULT_PREFIX, selector = ":root" } = options;
  const _layer = (name: string) => layer(prefix, name);

  const normalizeCss = modifyCss(
    (await import("./assets/normalize.css")).default,
    { comment: "Normalize", enclosure: _layer("reset") }
  );
  const themeCss = modifyCss(generateThemeCss(theme, { prefix, selector }), {
    comment: "Theme",
    enclosure: _layer("theme"),
  });
  const baseCss = modifyCss(BASE_STYLES, {
    comment: "Base",
    enclosure: _layer("base"),
  });
  const css =
    layerOrder(prefix, layers) +
    "\n" +
    [normalizeCss, themeCss, baseCss].join("\n");

  return format(css, {
    parser: "css",
  });
}

function layerOrder(prefix: string, names: string[] | readonly string[]) {
  const prefixedNames = names.map((name) => `${prefix}.${name}`);
  const namesStr = prefixedNames.join(",");
  return `@layer ${namesStr};`;
}

function layer(prefix: string, name: string) {
  return `@layer ${prefix}.${name}`;
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

type AppendCssOptions = {
  comment?: string;
  enclosure?: string;
};

function modifyCss(css: string, options: AppendCssOptions = {}) {
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

function enclose(target: string, value: string) {
  const indented = indent(target);
  return `${value} {\n${indented}\n}`;
}

function prependComment(target: string, value: string) {
  return `/* ${value} */\n${target}`;
}

function indent(target: string, indent = "  ") {
  const lines = target.split("\n");
  let indentedCssString = "";
  for (const line of lines) {
    const indentedLine = `${indent}${line}`;
    indentedCssString += `${indentedLine}\n`;
  }
  return indentedCssString;
}

function generatePaths<T>(obj: T, prefix = ""): string[] {
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

function getValue<T, K extends keyof T>(obj: T, key: K | string): T[K] {
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

export type { Theme };

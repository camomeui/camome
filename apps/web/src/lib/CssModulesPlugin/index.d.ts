import type { Plugin, PluginBuild } from "esbuild";

import BuildCache from "./lib/cache.mjs";

declare type GenerateScopedNameFunction = (
  name: string,
  filename: string,
  css: string
) => string;

declare type LocalsConventionFunction = (
  originalClassName: string,
  generatedClassName: string,
  inputFile: string
) => string;

declare class Loader {
  constructor(root: string, plugins: Plugin[]);

  fetch(
    file: string,
    relativeTo: string,
    depTrace: string
  ): Promise<{ [key: string]: string }>;

  finalSource?: string | undefined;
}

declare interface CssModulesOptions {
  getJSON?(
    cssFilename: string,
    json: { [name: string]: string },
    outputFilename?: string
  ): void;

  localsConvention?:
    | "camelCase"
    | "camelCaseOnly"
    | "dashes"
    | "dashesOnly"
    | LocalsConventionFunction;

  scopeBehaviour?: "global" | "local";
  globalModulePaths?: RegExp[];

  generateScopedName?: string | GenerateScopedNameFunction;

  hashPrefix?: string;
  exportGlobals?: boolean;
  root?: string;

  Loader?: typeof Loader;

  resolve?: (file: string) => string | Promise<string>;
}

declare interface PluginOptions {
  inject?: boolean | string | ((css: string, digest: string) => string);
  localsConvention?: CssModulesOptions["localsConvention"];
  generateScopedName?: CssModulesOptions["generateScopedName"];
  cssModulesOption?: CssModulesOptions;
  filter?: RegExp;
  generateTsFile?: boolean;
  onGenerateCss?: (css: string) => void;
  root?: string;
  package?: {
    name: string;
    main?: string;
    module?: string;
    version?: string;
  };
  usePascalCase?: boolean;
}

declare interface BuildContext {
  buildId: string;
  buildRoot: string;
  packageRoot?: string;
  packageVersion: string;
  log: (...args: any[]) => void;
  relative: (to: string) => `.${string}`;
  cache: BuildCache;
  entryPath: string;
}

declare function CssModulesPlugin(options?: PluginOptions): Plugin;

declare namespace CssModulesPlugin {
  export type Options = PluginOptions;
  export interface Build extends PluginBuild {
    context: BuildContext;
  }
}

export = CssModulesPlugin;

const path = require("path");
const { createHash } = require("crypto");
const { readFile } = require("fs/promises");
const fs = require("fs");
const pluginName = "esbuild-css-modules-plugin";
const pluginNamespace = `${pluginName}-namespace`;
const buildingCssSuffix = `?${pluginName}-building`;
const builtCssSuffix = `?${pluginName}-built`;
const builtCssSuffixRegExp = builtCssSuffix
  .replace("?", "\\?")
  .replace(/\-/g, "\\-");

/**
 * getModulesCssRegExp
 * @param {import('..').Options} options
 * @returns {RegExp}
 */
const getModulesCssRegExp = (options) => {
  return options.filter ?? /\.modules?\.scss$/i;
};

/**
 * getBuiltModulesCssRegExp
 * @param {import('..').Options} options
 * @returns {RegExp}
 */
const getBuiltModulesCssRegExp = (options) => {
  const baseRegExp = getModulesCssRegExp(options);
  const baseRegExpSource = baseRegExp.source.endsWith("$")
    ? baseRegExp.source.slice(0, -1)
    : baseRegExp.source;
  return new RegExp(`${baseRegExpSource}${builtCssSuffixRegExp}$`, "i");
};

/**
 * getLogger
 * @param {import('..').Build} build
 * @returns {(...args: any[]) => void}
 */
const getLogger = (build) => {
  const { logLevel } = build.initialOptions;
  if (logLevel === "debug" || logLevel === "verbose") {
    return (...args) => {
      console.log(`[${pluginName}]`, ...args);
    };
  }
  return () => void 0;
};

/**
 * buidInjectCode
 * @param {string} injectToSelector
 * @param {string} css
 * @param {string} digest
 * @param {import('..').Options} options
 * @returns {string}
 */
const buildInjectCode = (injectToSelector = "head", css, digest, options) => {
  if (typeof options.inject === "function") {
    return `
(function(){
  const doInject = () => {
    ${options.inject(css, digest)}
    delete window.__inject_${digest}__;
  };
  window.__inject_${digest}__ = doInject;
})();
    `;
  }
  return `
(function(){
  const css = \`${css}\`;
  const doInject = () => {
    if (typeof document === 'undefined') {
      return;
    }
    let root = document.querySelector('${injectToSelector}');
    if (root && root.shadowRoot) {
      root = root.shadowRoot;
    }
    if (!root) {
      root = document.head;
    }
    let container = root.querySelector('#_${digest}');
    if (!container) {
      container = document.createElement('style');
      container.id = '_${digest}';
      root.appendChild(container);
    }
    const text = document.createTextNode(css);
    container.appendChild(text);
    delete window.__inject_${digest}__;
  }
  window.__inject_${digest}__ = doInject;
})();
  `;
};

/**
 * getRootDir
 * @param {import('..').Build} build
 * @returns {string}
 */
const getRootDir = (build) => {
  const { absWorkingDir } = build.initialOptions;
  const abs = absWorkingDir ? absWorkingDir : process.cwd();
  const rootDir = path.isAbsolute(abs) ? abs : path.resolve(process.cwd(), abs);
  return rootDir;
};

/**
 * getPackageInfo
 * @param {import('..').Build} build
 * @returns {{name: string; version: string;}}
 */
const getPackageInfo = (build) => {
  const rootDir = getRootDir(build);
  const packageJsonFile = path.resolve(rootDir, "./package.json");
  try {
    fs.accessSync(packageJsonFile, fs.constants.R_OK);
    return require(packageJsonFile);
  } catch (error) {
    return { name: "", version: "" };
  }
};

/**
 * getPackageVersion
 * @param {import('..').Build} build
 * @returns {string}
 */
const getPackageVersion = (build) => {
  return getPackageInfo(build).version;
};

/**
 * getRelativePath
 * @description get relative path from build root
 * @param {import('..').Build} build
 * @param {string} to
 * @returns {string}
 */
const getRelativePath = (build, to) => {
  if (!path.isAbsolute(to)) {
    return to.startsWith(".") ? to : `.${path.sep}${to}`;
  }
  const root = build.context?.buildRoot ?? getRootDir(build);
  return `.${path.sep}${path.relative(root, to)}`;
};

/**
 * getBuildId
 * @description buildId should be stable so that the hash of output files are stable
 * @param {import('..').Build} build
 * @returns {Promise<string>}
 */
const getBuildId = async (build) => {
  const { entryPoints } = build.initialOptions;
  const buildRoot = getRootDir(build);
  const { version: packageVersion, name: packageName } = getPackageInfo(build);
  let entries = [];
  if (Array.isArray(entryPoints)) {
    entries = [...entryPoints];
  } else {
    Object.keys(entryPoints ?? {})
      .sort()
      .forEach((k) => {
        entries.push(entryPoints[k]);
      });
  }
  const entryContents =
    `// ${packageName}@${packageVersion}\n` +
    (
      await Promise.all(
        entries.map((p) => {
          if (!p) {
            return Promise.resolve("");
          }
          const absPath = path.isAbsolute(p) ? p : path.resolve(buildRoot, p);
          return readFile(absPath, { encoding: "utf8" }).catch(() => "");
        })
      )
    ).join("\n");
  return createHash("sha256").update(entryContents).digest("hex");
};

const jsKeywords = [
  "await",
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "export",
  "extends",
  "false",
  "finally",
  "for",
  "function",
  "if",
  "implements",
  "import",
  "in",
  "instanceof",
  "interface",
  "let",
  "new",
  "null",
  "package",
  "private",
  "protected",
  "public",
  "return",
  "super",
  "switch",
  "static",
  "this",
  "throw",
  "try",
  "true",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield",
];

/**
 * @param {string} name
 * @returns {boolean}
 */
const validateNamedExport = (name) => {
  return !jsKeywords.includes(name);
};

module.exports = {
  pluginName,
  pluginNamespace,
  getLogger,
  getRootDir,
  buildInjectCode,
  builtCssSuffix,
  getModulesCssRegExp,
  getBuiltModulesCssRegExp,
  buildingCssSuffix,
  getRelativePath,
  getBuildId,
  validateNamedExport,
  getPackageInfo,
  getPackageVersion,
};

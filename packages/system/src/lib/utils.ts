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

export function toCssVar(str: string): string {
  return str.replace(/([a-z])([A-Z]|[0-9])/g, "$1-$2").toLowerCase();
}

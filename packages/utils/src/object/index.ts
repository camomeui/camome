type DeepUndefinedToNull<T> = {
  [P in keyof T]: T[P] extends object
    ? DeepUndefinedToNull<T[P]>
    : T[P] extends undefined
    ? null
    : T[P];
};

export function deepUndefinedToNull<T extends object>(
  obj: T
): DeepUndefinedToNull<T> {
  return Object.entries(obj).reduce((acc, [k, v]) => {
    return {
      ...acc,
      [k]:
        typeof v === "object" && v !== null
          ? deepUndefinedToNull(v)
          : v ?? null,
    };
  }, {}) as DeepUndefinedToNull<T>;
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

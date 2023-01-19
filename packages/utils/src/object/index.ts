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
    let value = v;
    if (typeof v === "object") {
      if (v === null) {
        value = null;
      } else if (Array.isArray(v)) {
        value = v.map(deepUndefinedToNull);
      } else {
        value = deepUndefinedToNull(v);
      }
    }
    return {
      ...acc,
      [k]: value ?? null,
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

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

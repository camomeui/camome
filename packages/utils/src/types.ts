export type SvgComponent = React.ComponentType<React.ComponentProps<"svg">>;
export type OptionalField<T, K extends keyof T> = Pick<Partial<T>, K> &
  Omit<T, K>;
export type RequiredField<T, K extends keyof T> = T & Required<Pick<T, K>>;

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

// https://twitter.com/diegohaz/status/1309644466219819008
type PathImpl<T, K extends keyof T> = K extends string
  ? T[K] extends Record<string, unknown>
    ? T[K] extends ArrayLike<unknown>
      ? K | `${K}.${PathImpl<T[K], Exclude<keyof T[K], keyof unknown[]>>}`
      : K | `${K}.${PathImpl<T[K], keyof T[K]>}`
    : K
  : never;

export type Path<T> = PathImpl<T, keyof T>;

export type PathValue<
  T,
  P extends Path<T>
> = P extends `${infer K}.${infer Rest}`
  ? K extends keyof T
    ? Rest extends Path<T[K]>
      ? PathValue<T[K], Rest>
      : never
    : never
  : P extends keyof T
  ? T[P]
  : never;

// https://stackoverflow.com/questions/71352751/string-replace-when-creating-string-literal-union-type-in-typescript
export type Replace<
  T extends string,
  S extends string,
  D extends string,
  A extends string = ""
> = T extends `${infer L}${S}${infer R}`
  ? Replace<R, S, D, `${A}${L}${D}`>
  : `${A}${T}`;

export type SvgComponent = React.ComponentType<React.ComponentProps<"svg">>;
export type OptionalField<T, K extends keyof T> = Pick<Partial<T>, K> &
  Omit<T, K>;
export type RequiredField<T, K extends keyof T> = T & Required<Pick<T, K>>;

type Content = { _id: string; _raw: unknown; type: unknown; body: unknown };

export type ExtractContentMeta<T extends Content> = Omit<
  T,
  "_raw" | "type" | "body"
>;

export function extractContentMeta<T extends Content>(
  content: T
): ExtractContentMeta<T> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { _raw, type, body, ...rest } = content;
  return rest;
}

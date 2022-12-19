type Content = { _id: string; _raw: unknown; type: unknown; body: unknown };

export type ExtractContentMeta<T extends Content> = Omit<
  T,
  "_id" | "_raw" | "type" | "body"
>;

export function extractContentMeta(content: Content) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { _id, _raw, type, body, ...rest } = content;
  return rest;
}

export function buildPreviewUrl(path?: string) {
  return `${process.env.NEXT_PUBLIC_PREVIEW_URL}/${path ?? ""}`;
}

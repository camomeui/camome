export function joinLabelIds(...ids: (string | undefined)[]) {
  return ids.filter((id) => !!id).join(" ") || undefined;
}

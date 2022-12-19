export function buildScriptUrl(scriptName: string) {
  return `${process.env.NEXT_PUBLIC_PREVIEW_URL}/scripts/${scriptName}`;
}

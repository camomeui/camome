import chroma from "chroma-js";

export function mix(bg: string, fg: string, alpha: number): string {
  const ret = chroma.mix(bg, fg, alpha).hex();
  if (!ret) throw new Error(`Invalid color: ${JSON.stringify({ fg, bg })}`);
  return ret;
}

import path from "path";

export function buildScopedClassName(local: string, fileName: string) {
  const isBlock = local.startsWith("Block");
  const isModifier = local.startsWith("--");
  const separator = isModifier ? "" : "__";
  const blockName = fileName.split(path.sep).at(-2)?.split(".")[0];
  if (!blockName) {
    throw new Error("Invalid css module file path: " + fileName);
  }
  if (isBlock) return blockName + local.replace("Block", "");
  return blockName + separator + local;
}

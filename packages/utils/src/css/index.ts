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

// Original: https://github.com/emotion-js/emotion/blob/acb72a45592881d9d1f72003b6db2e488b981599/packages/hash/src/index.js
// Add here because `import hash from "@emotion/hash"` in vite.config doesn't work somehow.
export function hash(str: string) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.

  // const m = 0x5bd1e995;
  // const r = 24;

  // Initialize the hash

  let h = 0;

  // Mix 4 bytes at a time into the hash

  let k,
    i = 0,
    len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k =
      (str.charCodeAt(i) & 0xff) |
      ((str.charCodeAt(++i) & 0xff) << 8) |
      ((str.charCodeAt(++i) & 0xff) << 16) |
      ((str.charCodeAt(++i) & 0xff) << 24);

    k =
      /* Math.imul(k, m): */
      (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0xe995) << 16);
    k ^= /* k >>> r: */ k >>> 24;

    h =
      /* Math.imul(k, m): */
      ((k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0xe995) << 16)) ^
      /* Math.imul(h, m): */
      ((h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0xe995) << 16));
  }

  // Handle the last few bytes of the input array

  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
      break;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
      break;
    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
        /* Math.imul(h, m): */
        (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0xe995) << 16);
      break;
  }

  // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.

  h ^= h >>> 13;
  h =
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0xe995) << 16);

  return ((h ^ (h >>> 15)) >>> 0).toString(36);
}

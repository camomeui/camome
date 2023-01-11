export function toKebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z]|[0-9])/g, (_, p1, p2) => {
    return `${p1}-${p2.toLowerCase()}`;
  });
}

// WARN: Node.js only
export function encodeBase64(str: string): string {
  return Buffer.from(str).toString("base64");
}

// WARN: Node.js only
export function toBase64(str: string): string {
  return Buffer.from(str, "base64").toString();
}

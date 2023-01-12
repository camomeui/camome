export function toKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z]|[0-9])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

// WARN: Node.js only
export function encodeBase64(str: string): string {
  return Buffer.from(str).toString("base64");
}

// WARN: Node.js only
export function toBase64(str: string): string {
  return Buffer.from(str, "base64").toString();
}

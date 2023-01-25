export const DEFAULT_PREFIX = "cmm" as const;
export const layers = ["reset", "theme", "base", "components"] as const;
export const sizes = ["sm", "md", "lg"] as const;
export const colorSchemes = [
  "primary",
  "neutral",
  "info",
  "success",
  "warn",
  "danger",
] as const;
export const variants = ["solid", "soft", "outline", "ghost"] as const;
export const orientations = ["horizontal", "vertical"] as const;

export const themedComponents = [
  "Input",
  "Kbd",
  "Menu",
  "Tab",
  "Switch",
  "Tooltip",
  "Message",
] as const;

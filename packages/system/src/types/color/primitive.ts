export type Color = string;

export type ColorShade = {
  "0": Color;
  "1": Color;
  "2": Color;
  "3": Color;
  "4": Color;
  "5": Color;
  "6": Color;
  "7": Color;
  "8": Color;
  "9": Color;
};

export const colorSchemes = [
  "primary",
  "neutral",
  "info",
  "success",
  "warn",
  "danger",
] as const;
export const variants = ["solid", "soft", "outline", "ghost"] as const;

export type ColorScheme = (typeof colorSchemes)[number];
export type Variant = (typeof variants)[number];

export type ColorSchemeTokens = {
  font: Color;
  emphasis: Color;
  muted: Color;
  subtle: Color;
};

type VariantSolid = {
  bg: Color;
  bgHover: Color;
  font: Color;
};

type VariantSubtle = {
  bg: Color;
  bgHover: Color;
  font: Color;
};

type VariantOutline = {
  bg: Color;
  bgHover: Color;
  font: Color;
  border: Color;
};

type VariantGhost = {
  bg: Color;
  bgHover: Color;
  font: Color;
};

export type VariantColors = {
  solid: VariantSolid;
  soft: VariantSubtle;
  outline: VariantOutline;
  ghost: VariantGhost;
};

export type FontColors = {
  base: Color;
  muted: Color;
  subtle: Color;
  onEmphasis: Color;
};

export type SurfaceColors = {
  "0": Color;
  "1": Color;
  "2": Color;
  "3": Color;
  "4": Color;
};

export type BorderColors = {
  base: Color;
  subtle: Color;
};

export type PrimitiveColors = {
  black: Color;
  white: Color;
  code: {
    bg: Color;
  };
  link: Color;
  gray: ColorShade;
  surface: SurfaceColors;
  border: BorderColors;
  font: FontColors;
} & {
  [Scheme in ColorScheme]: ColorShade & ColorSchemeTokens & VariantColors;
};

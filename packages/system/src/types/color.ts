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
export const variants = ["solid", "subtle", "outline", "ghost"] as const;

export type ColorScheme = typeof colorSchemes[number];
export type Variant = typeof variants[number];

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
  subtle: VariantSubtle;
  outline: VariantOutline;
  ghost: VariantGhost;
};

export type Surface = {
  base: Color;
  raised: Color;
  sunken: Color;
};

export type ColorPalette = {
  black: Color;
  white: Color;
  code: {
    bg: Color;
  };
  gray: ColorShade;
  primary: ColorShade & VariantColors;
  neutral: ColorShade & VariantColors;
  success: ColorShade & VariantColors;
  info: ColorShade & VariantColors;
  warn: ColorShade & VariantColors;
  danger: ColorShade & VariantColors;
  surface: Surface;
};

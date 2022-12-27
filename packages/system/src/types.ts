export const layers = ["reset", "theme", "base"] as const;
export const variants = ["solid", "subtle", "outline", "ghost"] as const;
export const colorSchemes = [
  "primary",
  "secondary",
  "info",
  "success",
  "warn",
  "danger",
] as const;

export type Layer = typeof layers[number];
export type Variant = typeof variants[number];
export type ColorScheme = typeof colorSchemes[number];

type Color = string;

type ColorShade = {
  "50": Color;
  "100": Color;
  "200": Color;
  "300": Color;
  "400": Color;
  "500": Color;
  "600": Color;
  "700": Color;
  "800": Color;
  "900": Color;
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
  subtle: VariantSubtle;
  outline: VariantOutline;
  ghost: VariantGhost;
};

type ColorPalette = {
  black: Color;
  white: Color;
  gray: ColorShade;
  primary: ColorShade & VariantColors;
  secondary: ColorShade & VariantColors;
  success: ColorShade & VariantColors;
  info: ColorShade & VariantColors;
  warn: ColorShade & VariantColors;
  danger: ColorShade & VariantColors;
};

type FontFamily = {
  base: string;
  code: string;
};

type FontSize = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
  "4xl": string;
  "5xl": string;
  "6xl": string;
};

type FontWeight = {
  thin: number;
  extralight: number;
  light: number;
  normal: number;
  medium: number;
  semibold: number;
  bold: number;
  extrabold: number;
  black: number;
};

type Rounded = {
  none: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  full: string;
};

type Shadow = {
  color: Color;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

type Outline = {
  color: Color;
  width: string;
  offset: string;
};

type Transition = {
  bg: string;
};

export type Theme = {
  color: ColorPalette;
  font: {
    family: FontFamily;
    size: FontSize;
    weight: FontWeight;
  };
  rounded: Rounded;
  shadow: Shadow;
  outline: Outline;
  transition: Transition;
};

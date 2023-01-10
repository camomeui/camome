import { deepmerge } from "deepmerge-ts";

import { cssVar } from "../lib";
import { Theme } from "../types";
import { ColorScheme, ColorSchemeTokens, VariantColors } from "../types/color";

import { commonTheme } from "./common";

const lightTheme = {
  color: {
    code: {
      bg: cssVar("color.gray.1"),
    },
    primary: {
      ...colorSchemeTokens("primary"),
      ...variantColors("primary"),
    },
    neutral: {
      ...colorSchemeTokens("neutral"),
      ...variantColors("neutral"),
    },
    info: {
      ...colorSchemeTokens("info"),
      ...variantColors("info"),
    },
    success: {
      ...colorSchemeTokens("success"),
      ...variantColors("success"),
    },
    warn: {
      ...colorSchemeTokens("warn"),
      ...variantColors("warn"),
    },
    danger: {
      ...colorSchemeTokens("danger"),
      ...variantColors("danger"),
    },
    surface: {
      base: cssVar("color.white"),
      raised: cssVar("color.white"),
      sunken: cssVar("color.gray.0"),
    },
    font: {
      base: cssVar("color.black"),
      muted: cssVar("color.gray.6"),
      subtle: cssVar("color.gray.4"),
      baseInvert: cssVar("color.white"),
    },
    border: {
      base: cssVar("color.gray.2"),
      subtle: cssVar("color.gray.1"),
    },
    menu: {
      bg: cssVar("color.white"),
      bgHover: cssVar("color.neutral.1"),
      fontLabel: cssVar("color.font.base"),
      fontIcon: cssVar("color.font.subtle"),
      fontGroup: cssVar("color.font.subtle"),
    },
    tab: {
      bg: cssVar("color.surface.base"),
      listBg: cssVar("color.surface.base"),
      bgActive: cssVar("color.surface.base"),
      bgHover: cssVar("color.neutral.subtle"),
      border: cssVar("color.border.base"),
      borderActive: cssVar("color.primary.emphasis"),
      borderHover: cssVar("color.primary.3"),
      font: cssVar("color.font.muted"),
      fontActive: cssVar("color.primary.font"),
      fontHover: cssVar("color.font.muted"),
    },
    tooltip: {
      bg: cssVar("color.gray.6"),
      font: cssVar("color.white"),
    },
    switch: {
      bgOff: cssVar("color.neutral.subtle"),
      bgOn: cssVar("color.primary.emphasis"),
      bgThumb: cssVar("color.surface.base"),
      fontOff: cssVar("color.font.muted"),
      fontOn: cssVar("color.font.baseInvert"),
      border: cssVar("color.neutral.3"),
      borderThumb: cssVar("color.neutral.3"),
    },
  },
  outline: {
    color: cssVar("color.primary.4"),
  },
  shadow: {
    color: "rgba(12, 12, 13, 0.1)",
  },
} as const;

function colorSchemeTokens(colorScheme: ColorScheme): ColorSchemeTokens {
  return {
    font: cssVar(`color.${colorScheme}.6`),
    emphasis: cssVar(`color.${colorScheme}.6`),
    muted: cssVar(`color.${colorScheme}.4`),
    subtle: cssVar(`color.${colorScheme}.1`),
  };
}

function variantColors(colorScheme: ColorScheme): VariantColors {
  return {
    solid: {
      bg: cssVar(`color.${colorScheme}.6`),
      bgHover: cssVar(`color.${colorScheme}.7`),
      font: cssVar(`color.white`),
    },
    soft: {
      bg: cssVar(`color.${colorScheme}.0`),
      bgHover: cssVar(`color.${colorScheme}.1`),
      font: cssVar(`color.${colorScheme}.6`),
    },
    outline: {
      bg: "transparent",
      bgHover: cssVar(`color.${colorScheme}.1`),
      font: cssVar(`color.${colorScheme}.6`),
      border: cssVar(`color.${colorScheme}.2`),
    },
    ghost: {
      bg: "transparent",
      bgHover: cssVar(`color.${colorScheme}.1`),
      font: cssVar(`color.${colorScheme}.6`),
    },
  };
}

export default deepmerge(commonTheme, lightTheme) satisfies Theme;
import { deepmerge } from "deepmerge-ts";

import { cssVar } from "../lib";
import { Theme } from "../types";
import { ColorScheme, ColorSchemeTokens, VariantColors } from "../types/color";

import { commonTheme } from "./common";

const darkTheme = {
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
      base: cssVar("color.black"),
      raised: cssVar("color.gray.9"),
      sunken: cssVar("color.black"),
    },
    font: {
      base: cssVar("color.white"),
      muted: cssVar("color.gray.4"),
      subtle: cssVar("color.gray.6"),
      baseInvert: cssVar("color.white"),
    },
    border: {
      base: cssVar("color.gray.7"),
      subtle: cssVar("color.gray.8"),
    },
    menu: {
      bg: cssVar("color.neutral.9"),
      bgHover: cssVar("color.neutral.8"),
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
      borderHover: cssVar("color.primary.7"),
      font: cssVar("color.font.muted"),
      fontActive: cssVar("color.primary.emphasis"),
      fontHover: cssVar("color.font.muted"),
    },
    tooltip: {
      bg: cssVar("color.neutral.6"),
      font: cssVar("color.font.base"),
    },
    switch: {
      bgOff: cssVar("color.neutral.subtle"),
      bgOn: cssVar("color.primary.6"),
      bgThumb: cssVar("color.neutral.2"),
      fontOff: cssVar("color.font.muted"),
      fontOn: cssVar("color.font.baseInvert"),
      border: cssVar("color.neutral.6"),
      borderThumb: cssVar("color.neutral.2"),
    },
  },
  outline: {
    color: cssVar("color.primary.6"),
  },
  shadow: {
    color: "rgba(12, 12, 13, 0.1)",
  },
} as const;

function colorSchemeTokens(colorScheme: ColorScheme): ColorSchemeTokens {
  return {
    font: cssVar(`color.${colorScheme}.6`),
    emphasis: cssVar(`color.${colorScheme}.5`),
    muted: cssVar(`color.${colorScheme}.5`),
    subtle: cssVar(`color.${colorScheme}.9`),
  };
}

function variantColors(colorScheme: ColorScheme): VariantColors {
  return {
    solid: {
      bg: cssVar(`color.${colorScheme}.6`),
      bgHover: cssVar(`color.${colorScheme}.7`),
      font: cssVar(`color.font.baseInvert`),
    },
    soft: {
      bg: cssVar(`color.${colorScheme}.9`),
      bgHover: cssVar(`color.${colorScheme}.8`),
      font: cssVar(`color.${colorScheme}.1`),
    },
    outline: {
      bg: "transparent",
      bgHover: cssVar(`color.${colorScheme}.8`),
      font: cssVar(`color.${colorScheme}.2`),
      border: cssVar(`color.${colorScheme}.8`),
    },
    ghost: {
      bg: "transparent",
      bgHover: cssVar(`color.${colorScheme}.8`),
      font: cssVar(`color.${colorScheme}.2`),
    },
  };
}

export default deepmerge(commonTheme, darkTheme) satisfies Theme;

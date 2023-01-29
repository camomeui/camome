import { deepmerge } from "deepmerge-ts";

import { cssVar } from "../lib/utils";
import { Theme } from "../types";
import { ColorScheme, ColorSchemeTokens, VariantColors } from "../types/color";

import { commonTheme } from "./common";

const lightTheme = {
  color: {
    code: {
      bg: cssVar("color.gray.1"),
    },
    link: cssVar("color.primary.6"),
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
      0: cssVar("color.white"),
      1: cssVar("color.neutral.0"),
      2: cssVar("color.neutral.1"),
      3: cssVar("color.neutral.2"),
      4: cssVar("color.neutral.3"),
    },
    font: {
      base: cssVar("color.black"),
      muted: cssVar("color.gray.7"),
      subtle: cssVar("color.gray.5"),
      onEmphasis: cssVar("color.white"),
    },
    border: {
      base: cssVar("color.gray.2"),
      subtle: cssVar("color.gray.1"),
    },
  },
  outline: {
    color: {
      primary: cssVar("color.primary.4"),
      danger: cssVar("color.danger.4"),
    },
  },
  /* Components */
  Input: {
    bg: cssVar("color.surface.0"),
    bgHover: cssVar("color.surface.0"),
    border: cssVar("color.border.base"),
  },
  Kbd: {
    bg: cssVar("color.surface.0"),
    border: cssVar("color.surface.3"),
    font: cssVar("color.font.muted"),
  },
  Menu: {
    bg: cssVar("color.surface.0"),
    bgHover: cssVar("color.surface.2"),
    fontLabel: cssVar("color.font.base"),
    fontIcon: cssVar("color.font.muted"),
    fontGroup: cssVar("color.font.muted"),
  },
  Message: {
    info: {
      bg: cssVar("color.primary.0"),
      font: cssVar("color.primary.font"),
      border: cssVar("color.primary.border"),
    },
    success: {
      bg: cssVar("color.success.0"),
      font: cssVar("color.success.font"),
      border: cssVar("color.success.border"),
    },
    warn: {
      bg: cssVar("color.warn.0"),
      font: cssVar("color.warn.font"),
      border: cssVar("color.warn.border"),
    },
    danger: {
      bg: cssVar("color.danger.0"),
      font: cssVar("color.danger.font"),
      border: cssVar("color.danger.border"),
    },
  },
  Tab: {
    bg: cssVar("color.surface.0"),
    listBg: cssVar("color.surface.0"),
    bgActive: cssVar("color.surface.0"),
    bgHover: cssVar("color.neutral.subtle"),
    border: cssVar("color.border.base"),
    borderActive: cssVar("color.primary.emphasis"),
    borderHover: cssVar("color.primary.3"),
    font: cssVar("color.font.muted"),
    fontActive: cssVar("color.primary.font"),
    fontHover: cssVar("color.font.muted"),
  },
  Tooltip: {
    bg: cssVar("color.gray.6"),
    font: cssVar("color.white"),
  },
  Switch: {
    bgOff: cssVar("color.neutral.subtle"),
    bgOn: cssVar("color.primary.emphasis"),
    bgThumb: cssVar("color.surface.0"),
    fontOff: cssVar("color.font.muted"),
    fontOn: cssVar("color.font.onEmphasis"),
    border: cssVar("color.neutral.3"),
    borderThumb: cssVar("color.neutral.3"),
  },
} as const;

export function colorSchemeTokens(colorScheme: ColorScheme): ColorSchemeTokens {
  return {
    font: cssVar(`color.${colorScheme}.7`),
    emphasis: cssVar(`color.${colorScheme}.6`),
    muted: cssVar(`color.${colorScheme}.4`),
    subtle: cssVar(`color.${colorScheme}.1`),
    border: cssVar(`color.${colorScheme}.1`),
  };
}

export function variantColors(colorScheme: ColorScheme): VariantColors {
  return {
    solid: {
      bg: cssVar(`color.${colorScheme}.6`),
      bgHover: cssVar(`color.${colorScheme}.7`),
      font: cssVar(`color.white`),
    },
    soft: {
      bg: cssVar(`color.${colorScheme}.1`),
      bgHover: cssVar(`color.${colorScheme}.2`),
      font: cssVar(`color.${colorScheme}.font`),
    },
    outline: {
      bg: "transparent",
      bgHover: cssVar(`color.${colorScheme}.1`),
      font: cssVar(`color.${colorScheme}.font`),
      border: cssVar(`color.${colorScheme}.2`),
    },
    ghost: {
      bg: "transparent",
      bgHover: cssVar(`color.${colorScheme}.1`),
      font: cssVar(`color.${colorScheme}.font`),
    },
  };
}

export default deepmerge(commonTheme, lightTheme) satisfies Theme;

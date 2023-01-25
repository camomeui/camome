import chroma from "chroma-js";
import { deepmerge } from "deepmerge-ts";

import { cssVar } from "../lib/utils";
import { Theme } from "../types";
import {
  ColorScheme,
  ColorSchemeTokens,
  ColorShade,
  VariantColors,
} from "../types/color";

import { commonTheme } from "./common";

const darkTheme = {
  color: {
    code: {
      bg: cssVar("color.surface.3"),
    },
    link: cssVar("color.primary.5"),
    primary: {
      ...colorSchemeColors("primary", commonTheme.color.primary),
      ...variantColors("primary", commonTheme.color.primary),
    },
    neutral: {
      ...colorSchemeColors("neutral", commonTheme.color.neutral),
      ...variantColors("neutral", commonTheme.color.neutral),
    },
    info: {
      ...colorSchemeColors("info", commonTheme.color.info),
      ...variantColors("info", commonTheme.color.info),
    },
    success: {
      ...colorSchemeColors("success", commonTheme.color.success),
      ...variantColors("success", commonTheme.color.success),
    },
    warn: {
      ...colorSchemeColors("warn", commonTheme.color.warn),
      ...variantColors("warn", commonTheme.color.warn),
    },
    danger: {
      ...colorSchemeColors("danger", commonTheme.color.danger),
      ...variantColors("danger", commonTheme.color.danger),
    },
    surface: {
      0: cssVar("color.black"),
      1: cssVar("color.gray.9"),
      2: cssVar("color.gray.8"),
      3: cssVar("color.gray.7"),
      4: cssVar("color.gray.6"),
    },
    font: {
      base: cssVar("color.white"),
      muted: cssVar("color.gray.3"),
      subtle: cssVar("color.gray.4"),
      onEmphasis: cssVar("color.white"),
    },
    border: {
      base: cssVar("color.gray.7"),
      subtle: cssVar("color.gray.8"),
    },
  },
  outline: {
    color: {
      primary: cssVar("color.primary.6"),
      danger: cssVar("color.danger.6"),
    },
  },
  shadow: {
    color: "rgba(12, 12, 13, 0.1)",
  },
  /* Components */
  Input: {
    bg: cssVar("color.surface.2"),
    border: cssVar("color.border.base"),
  },
  Kbd: {
    bg: cssVar("color.surface.2"),
    border: cssVar("color.surface.3"),
    font: cssVar("color.font.muted"),
  },
  Menu: {
    bg: cssVar("color.surface.1"),
    bgHover: cssVar("color.surface.2"),
    fontLabel: cssVar("color.font.base"),
    fontIcon: cssVar("color.font.muted"),
    fontGroup: cssVar("color.font.muted"),
  },
  Message: {
    info: {
      bg: cssVar("color.primary.subtle"),
      font: cssVar("color.primary.font"),
      border: cssVar("color.primary.border"),
    },
    success: {
      bg: cssVar("color.success.subtle"),
      font: cssVar("color.success.font"),
      border: cssVar("color.success.border"),
    },
    warn: {
      bg: cssVar("color.warn.subtle"),
      font: cssVar("color.warn.font"),
      border: cssVar("color.warn.border"),
    },
    danger: {
      bg: cssVar("color.danger.subtle"),
      font: cssVar("color.danger.font"),
      border: cssVar("color.danger.border"),
    },
  },
  Tab: {
    bg: cssVar("color.surface.0"),
    listBg: cssVar("color.surface.0"),
    bgActive: cssVar("color.surface.0"),
    bgHover: cssVar("color.neutral.soft.bgHover"),
    border: cssVar("color.border.base"),
    borderActive: cssVar("color.primary.emphasis"),
    borderHover: cssVar("color.primary.7"),
    font: cssVar("color.font.muted"),
    fontActive: cssVar("color.primary.emphasis"),
    fontHover: cssVar("color.font.base"),
  },
  Tooltip: {
    bg: cssVar("color.neutral.6"),
    font: cssVar("color.font.base"),
  },
  Switch: {
    bgOff: cssVar("color.surface.2"),
    bgOn: cssVar("color.primary.6"),
    bgThumb: cssVar("color.neutral.0"),
    fontOff: cssVar("color.font.muted"),
    fontOn: cssVar("color.font.onEmphasis"),
    border: cssVar("color.neutral.6"),
    borderThumb: cssVar("color.neutral.2"),
  },
} as const;

function alpha(color: string, value: number): string {
  const ret = chroma(color).alpha(value).hex();
  if (!ret) throw new Error(`Invalid color: ${color}`);
  return ret;
}

export function colorSchemeColors(
  colorScheme: ColorScheme,
  shade: ColorShade
): ColorSchemeTokens {
  return {
    font: cssVar(`color.${colorScheme}.2`),
    emphasis: cssVar(`color.${colorScheme}.5`),
    muted: alpha(shade[6], 0.5),
    subtle: alpha(shade[6], 0.15),
    border: alpha(shade[6], 0.5),
  };
}

export function variantColors(
  colorScheme: ColorScheme,
  shade: ColorShade
): VariantColors {
  return {
    solid: {
      bg: cssVar(`color.${colorScheme}.6`),
      bgHover: cssVar(`color.${colorScheme}.7`),
      font: cssVar(`color.font.onEmphasis`),
    },
    soft: {
      bg: alpha(shade[6], 0.4),
      bgHover: alpha(shade[6], 0.5),
      font: cssVar(`color.${colorScheme}.font`),
    },
    outline: {
      bg: "transparent",
      bgHover: alpha(shade[6], 0.3),
      font: cssVar(`color.${colorScheme}.font`),
      border: alpha(shade[6], 0.5),
    },
    ghost: {
      bg: "transparent",
      bgHover: alpha(shade[6], 0.3),
      font: cssVar(`color.${colorScheme}.font`),
    },
  };
}

export default deepmerge(commonTheme, darkTheme) satisfies Theme;

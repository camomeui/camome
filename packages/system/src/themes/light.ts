import { deepmerge } from "deepmerge-ts";

import { mix } from "@camome/utils";

import { getFn } from "../lib/utils";
import { MessageThemeItem, Theme, ThemeConfig, WithCallback } from "../types";
import { ColorScheme, ColorSchemeTokens, VariantColors } from "../types/color";

import { commonTheme } from "./common";

const lightTheme = {
  color: {
    code: {
      block: (get) => mix(get("color.surface.0"), get("color.surface.2"), 0.6),
      inline: getFn("color.code.block"),
    },
    link: getFn("color.primary.6"),
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
      0: getFn("color.white"),
      1: getFn("color.neutral.0"),
      2: getFn("color.neutral.1"),
      3: getFn("color.neutral.2"),
      4: getFn("color.neutral.3"),
    },
    font: {
      base: getFn("color.black"),
      muted: getFn("color.gray.7"),
      subtle: getFn("color.gray.5"),
      onEmphasis: getFn("color.white"),
    },
    border: {
      base: getFn("color.gray.2"),
      subtle: getFn("color.gray.1"),
    },
  },
  outline: {
    color: {
      primary: getFn("color.primary.4"),
      danger: getFn("color.danger.4"),
    },
  },
  /* Components */
  Input: {
    bg: getFn("color.surface.0"),
    border: getFn("color.border.base"),
  },
  Kbd: {
    bg: getFn("color.surface.0"),
    border: getFn("color.surface.3"),
    font: getFn("color.font.muted"),
  },
  Menu: {
    bg: getFn("color.surface.0"),
    bgHover: getFn("color.surface.2"),
    fontLabel: getFn("color.font.base"),
    fontIcon: getFn("color.font.muted"),
    fontGroup: getFn("color.font.muted"),
  },
  Message: {
    info: {
      ...messageColors("info"),
    },
    success: {
      ...messageColors("success"),
    },
    warn: {
      ...messageColors("warn"),
    },
    danger: {
      ...messageColors("danger"),
    },
  },
  Tab: {
    bg: getFn("color.surface.0"),
    listBg: "transparent",
    bgActive: "transparent",
    bgHover: "transparent",
    border: getFn("color.border.base"),
    borderActive: getFn("color.primary.emphasis"),
    borderHover: getFn("color.neutral.muted"),
    font: getFn("color.font.muted"),
    fontActive: getFn("color.primary.font"),
    fontHover: getFn("color.font.muted"),
  },
  Tooltip: {
    bg: getFn("color.gray.6"),
    font: getFn("color.white"),
  },
  Switch: {
    bgOff: getFn("color.surface.2"),
    bgOn: getFn("color.primary.emphasis"),
    bgThumb: getFn("color.white"),
    fontOff: getFn("color.font.muted"),
    fontOn: getFn("color.font.onEmphasis"),
    border: getFn("color.neutral.3"),
    borderThumb: getFn("color.neutral.3"),
  },
} as const satisfies ThemeConfig;

export function colorSchemeTokens(
  colorScheme: ColorScheme
): WithCallback<ColorSchemeTokens> {
  return {
    font: getFn(`color.${colorScheme}.7`),
    emphasis: getFn(`color.${colorScheme}.6`),
    muted: getFn(`color.${colorScheme}.4`),
    subtle: getFn(`color.${colorScheme}.0`),
    border: getFn(`color.${colorScheme}.2`),
  };
}

export function variantColors(
  colorScheme: ColorScheme
): WithCallback<VariantColors> {
  return {
    solid: {
      bg: getFn(`color.${colorScheme}.6`),
      bgHover: getFn(`color.${colorScheme}.7`),
      font: getFn(`color.white`),
    },
    soft: {
      bg: getFn(`color.${colorScheme}.1`),
      bgHover: getFn(`color.${colorScheme}.2`),
      font: getFn(`color.${colorScheme}.font`),
    },
    outline: {
      bg: "transparent",
      bgHover: getFn(`color.${colorScheme}.1`),
      font: getFn(`color.${colorScheme}.font`),
      border: getFn(`color.${colorScheme}.2`),
    },
    ghost: {
      bg: "transparent",
      bgHover: getFn(`color.${colorScheme}.1`),
      font: getFn(`color.${colorScheme}.font`),
    },
  };
}

export function messageColors(
  colorScheme: ColorScheme
): WithCallback<MessageThemeItem> {
  return {
    bg: (get) =>
      mix(get("color.surface.0"), get(`color.${colorScheme}.4`), 0.15),
    font: getFn(`color.${colorScheme}.font`),
    border: "transparent",
  };
}

export default deepmerge(commonTheme, lightTheme) satisfies WithCallback<Theme>;

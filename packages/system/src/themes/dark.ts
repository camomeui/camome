import { deepmerge } from "deepmerge-ts";

import type {
  WithCallback,
  ThemeConfig,
  Theme,
  GetTheme,
  MessageThemeItem,
} from "../types";

import { mix } from "@camome/utils";

import { getFn } from "../lib/utils";
import { ColorScheme, ColorSchemeTokens, VariantColors } from "../types/color";

import { commonTheme } from "./common";

const darkTheme = {
  color: {
    code: {
      bg: getFn("color.surface.3"),
    },
    link: getFn("color.primary.5"),
    primary: {
      ...colorSchemeColors("primary"),
      ...variantColors("primary"),
    },
    neutral: {
      ...colorSchemeColors("neutral"),
      ...variantColors("neutral"),
    },
    info: {
      ...colorSchemeColors("info"),
      ...variantColors("info"),
    },
    success: {
      ...colorSchemeColors("success"),
      ...variantColors("success"),
    },
    warn: {
      ...colorSchemeColors("warn"),
      ...variantColors("warn"),
    },
    danger: {
      ...colorSchemeColors("danger"),
      ...variantColors("danger"),
    },
    surface: {
      0: getFn("color.black"),
      1: getFn("color.gray.9"),
      2: getFn("color.gray.8"),
      3: getFn("color.gray.7"),
      4: getFn("color.gray.6"),
    },
    font: {
      base: getFn("color.white"),
      muted: getFn("color.gray.3"),
      subtle: getFn("color.gray.4"),
      onEmphasis: getFn("color.white"),
    },
    border: {
      base: getFn("color.gray.7"),
      subtle: getFn("color.gray.8"),
    },
  },
  outline: {
    color: {
      primary: getFn("color.primary.6"),
      danger: getFn("color.danger.6"),
    },
  },
  /* Components */
  Input: {
    bg: getFn("color.surface.2"),
    border: getFn("color.border.base"),
  },
  Kbd: {
    bg: getFn("color.surface.2"),
    border: getFn("color.surface.3"),
    font: getFn("color.font.muted"),
  },
  Menu: {
    bg: getFn("color.surface.1"),
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
    listBg: getFn("color.surface.0"),
    bgActive: getFn("color.surface.0"),
    bgHover: getFn("color.neutral.soft.bgHover"),
    border: getFn("color.border.base"),
    borderActive: getFn("color.primary.emphasis"),
    borderHover: getFn("color.primary.7"),
    font: getFn("color.font.muted"),
    fontActive: getFn("color.primary.emphasis"),
    fontHover: getFn("color.font.base"),
  },
  Tooltip: {
    bg: getFn("color.neutral.6"),
    font: getFn("color.font.base"),
  },
  Switch: {
    bgOff: getFn("color.surface.2"),
    bgOn: getFn("color.primary.6"),
    bgThumb: getFn("color.neutral.0"),
    fontOff: getFn("color.font.muted"),
    fontOn: getFn("color.font.onEmphasis"),
    border: getFn("color.neutral.6"),
    borderThumb: getFn("color.neutral.2"),
  },
} as const satisfies ThemeConfig;

export function colorSchemeColors(
  colorScheme: ColorScheme
): WithCallback<ColorSchemeTokens> {
  const getColor = (get: GetTheme) => get(`color.${colorScheme}.6`);
  const getBg = (get: GetTheme) => get("color.surface.0");
  return {
    font: getFn(`color.${colorScheme}.2`),
    emphasis: getFn(`color.${colorScheme}.5`),
    muted: (get) => mix(getBg(get), getColor(get), 0.5),
    subtle: (get) => mix(getBg(get), getColor(get), 0.2),
    border: (get) => mix(getBg(get), getColor(get), 0.2),
  };
}

export function variantColors(
  colorScheme: ColorScheme
): WithCallback<VariantColors> {
  const getColor = (get: GetTheme) => get(`color.${colorScheme}.6`);
  const getBg = (get: GetTheme) => get("color.surface.0");
  return {
    solid: {
      bg: getFn(`color.${colorScheme}.6`),
      bgHover: getFn(`color.${colorScheme}.7`),
      font: getFn(`color.font.onEmphasis`),
    },
    soft: {
      bg: (get) => mix(getBg(get), getColor(get), 0.1),
      bgHover: (get) => mix(getBg(get), getColor(get), 0.2),
      font: getFn(`color.${colorScheme}.font`),
    },
    outline: {
      bg: "transparent",
      bgHover: (get) => mix(getBg(get), getColor(get), 0.2),
      font: getFn(`color.${colorScheme}.font`),
      border: (get) => mix(getBg(get), getColor(get), 0.2),
    },
    ghost: {
      bg: "transparent",
      bgHover: (get) => mix(getBg(get), getColor(get), 0.2),
      font: getFn(`color.${colorScheme}.font`),
    },
  };
}

export function messageColors(
  colorScheme: ColorScheme
): WithCallback<MessageThemeItem> {
  return {
    bg: (get) =>
      mix(get("color.surface.0"), get(`color.${colorScheme}.6`), 0.05),
    font: getFn(`color.${colorScheme}.3`),
    border: "transparent",
  };
}

export default deepmerge(commonTheme, darkTheme) satisfies WithCallback<Theme>;

import { deepmerge } from "deepmerge-ts";

import { cssVar } from "../lib";
import { Theme } from "../types";
import { ColorScheme, VariantColors } from "../types/color";

import { commonTheme } from "./common";

const lightTheme = {
  color: {
    code: {
      bg: cssVar("color.gray.1"),
    },
    primary: {
      ...variantColors("primary"),
    },
    neutral: {
      ...variantColors("neutral"),
    },
    info: {
      ...variantColors("info"),
    },
    success: {
      ...variantColors("success"),
    },
    warn: {
      ...variantColors("warn"),
    },
    danger: {
      ...variantColors("danger"),
    },
    surface: {
      base: cssVar("color.white"),
      raised: cssVar("color.white"),
      sunken: cssVar("color.gray.0"),
    },
  },
  outline: {
    color: cssVar("color.primary.4"),
  },
  shadow: {
    color: "rgba(12, 12, 13, 0.1)",
  },
} as const;

function variantColors(colorScheme: ColorScheme): VariantColors {
  return {
    solid: {
      bg: cssVar(`color.${colorScheme}.5`),
      bgHover: cssVar(`color.${colorScheme}.6`),
      font: cssVar(`color.white`),
    },
    subtle: {
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

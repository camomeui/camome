import chroma from "chroma-js";
import { deepmerge } from "deepmerge-ts";

import { encodeBase64 } from "@camome/utils";

import { cssVar } from "../lib";
import { Theme } from "../types";
import { ColorScheme, ColorSchemeTokens, VariantColors } from "../types/color";

import { commonTheme } from "./common";

const darkTheme = {
  color: {
    code: {
      bg: cssVar("color.surface.3"),
    },
    link: cssVar("color.primary.5"),
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
      0: cssVar("color.black"),
      1: cssVar("color.neutral.9"),
      2: cssVar("color.neutral.8"),
      3: cssVar("color.neutral.7"),
      4: cssVar("color.neutral.6"),
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
  input: {
    bg: cssVar("color.surface.2"),
    border: cssVar("color.border.base"),
  },
  kbd: {
    bg: cssVar("color.surface.2"),
    border: cssVar("color.surface.3"),
    font: cssVar("color.font.muted"),
  },
  menu: {
    bg: cssVar("color.surface.1"),
    bgHover: cssVar("color.surface.2"),
    fontLabel: cssVar("color.font.base"),
    fontIcon: cssVar("color.font.subtle"),
    fontGroup: cssVar("color.font.subtle"),
  },
  tab: {
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
  tooltip: {
    bg: cssVar("color.neutral.6"),
    font: cssVar("color.font.base"),
  },
  select: {
    marker: `url('data:image/svg+xml;base64,${encodeBase64(
      `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="${commonTheme.color.neutral[5]}"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" /></svg>`
    )}')`,
  },
  switch: {
    bgOff: cssVar("color.surface.2"),
    bgOn: cssVar("color.primary.6"),
    bgThumb: cssVar("color.neutral.0"),
    fontOff: cssVar("color.font.muted"),
    fontOn: cssVar("color.font.baseInvert"),
    border: cssVar("color.neutral.6"),
    borderThumb: cssVar("color.neutral.2"),
  },
} as const;

function alpha(color: string, value: number): string {
  const ret = chroma(color).alpha(value).hex();
  if (!ret) throw new Error(`Invalid color: ${color}`);
  return ret;
}

function colorSchemeTokens(colorScheme: ColorScheme): ColorSchemeTokens {
  const palette = commonTheme.color[colorScheme];
  return {
    font: palette[6],
    emphasis: palette[5],
    muted: alpha(palette[4], 0.75),
    subtle: alpha(palette[4], 0.5),
  };
}

function variantColors(colorScheme: ColorScheme): VariantColors {
  const palette = commonTheme.color[colorScheme];
  return {
    solid: {
      bg: palette[6],
      bgHover: palette[7],
      font: cssVar(`color.font.baseInvert`),
    },
    soft: {
      bg: alpha(palette[6], 0.15),
      bgHover: alpha(palette[6], 0.3),
      font: palette[3],
    },
    outline: {
      bg: "transparent",
      bgHover: alpha(palette[6], 0.3),
      font: palette[2],
      border: alpha(palette[6], 0.5),
    },
    ghost: {
      bg: "transparent",
      bgHover: alpha(palette[6], 0.3),
      font: palette[2],
    },
  };
}

export default deepmerge(commonTheme, darkTheme) satisfies Theme;

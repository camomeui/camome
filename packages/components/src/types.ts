import React from "react";

import { colorSchemes, sizes, variants } from "./constants";

export type BaseProps = {
  className?: string;
  style?: React.CSSProperties;
};

export type PolymorphicProps = {
  component?: any;
};

export type Direction = "horizontal" | "vertical";
export type Size = typeof sizes[number];
export type ColorScheme = typeof colorSchemes[number];
export type Variant = typeof variants[number];

export type ComponentCssVariables = Record<string, string | null>;

import React from "react";

export type BaseProps = {
  className?: string;
  style?: React.CSSProperties;
};

export type PolymorphicProps = {
  component?: any;
};

export type ComponentCssVariables = Record<string, string | null>;

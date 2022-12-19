import React from "react";

export function mergeStyleAndCssVars(
  style?: React.CSSProperties,
  cssVariables?: Record<string, any>
) {
  const _style = style ? style : {};
  const _vars = cssVariables ? cssVariables : {};
  return { ..._style, ..._vars } as React.CSSProperties;
}

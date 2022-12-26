import React from "react";

import { BaseProps } from "../../types";
import { mergeStyleAndCssVars } from "../../utils/mergeStyleAndCssVars";

import styles from "./styles.module.scss";

export type TextInputGroupProps = {
  input: React.ReactNode;
  leftDecorator: React.ReactNode;
  rightDecorator: React.ReactNode;
  cssVariables?: TextInputGroupCssVars;
};

export type TextInputGroupCssVars = {
  "--TextInput-left-decor-width"?: number | string;
  "--TextInput-right-decor-width"?: number | string;
  "--TextInput-radius"?: number | string;
};

export function TextInputGroup({
  input,
  leftDecorator,
  rightDecorator,
  cssVariables,
  style,
}: TextInputGroupProps & BaseProps) {
  return (
    <div style={mergeStyleAndCssVars(style, cssVariables)}>
      <div className={styles.Block}>
        {leftDecorator && (
          <span className={styles[`decorator--left`]}>{leftDecorator}</span>
        )}
        {input}
        {rightDecorator && (
          <span className={styles[`decorator--right`]}>{rightDecorator}</span>
        )}
      </div>
    </div>
  );
}

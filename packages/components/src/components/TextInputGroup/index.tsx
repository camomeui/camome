import React from "react";

import { BaseProps } from "../../types";

import styles from "./styles.module.scss";

export type TextInputGroupProps = {
  input: React.ReactNode;
  leftDecorator?: React.ReactNode;
  rightDecorator?: React.ReactNode;
} & BaseProps;

export function TextInputGroup({
  input,
  leftDecorator,
  rightDecorator,
  style,
  className,
}: TextInputGroupProps) {
  return (
    <div style={style} className={className}>
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

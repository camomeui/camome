import React from "react";

import { BaseProps } from "../../types";

import styles from "./styles.module.scss";

export type TextInputGroupProps = {
  input: React.ReactNode;
  leftDecorator: React.ReactNode;
  rightDecorator: React.ReactNode;
};

export function TextInputGroup({
  input,
  leftDecorator,
  rightDecorator,
  style,
}: TextInputGroupProps & BaseProps) {
  return (
    <div style={style}>
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

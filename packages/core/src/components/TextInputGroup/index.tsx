import React from "react";

import { BaseProps } from "../../types";

import styles from "./styles.module.scss";

export type TextInputGroupProps = {
  input: React.ReactNode;
  startDecorator?: React.ReactNode;
  endDecorator?: React.ReactNode;
} & BaseProps;

export function TextInputGroup({
  input,
  startDecorator,
  endDecorator,
  style,
  className,
}: TextInputGroupProps) {
  return (
    <div style={style} className={className}>
      <div className={styles.Block}>
        {startDecorator && (
          <span className={styles[`decorator--start`]}>{startDecorator}</span>
        )}
        {input}
        {endDecorator && (
          <span className={styles[`decorator--end`]}>{endDecorator}</span>
        )}
      </div>
    </div>
  );
}

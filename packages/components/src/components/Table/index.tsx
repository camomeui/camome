import clsx from "clsx";
import React from "react";

import { BaseProps } from "src/types";

import styles from "./styles.module.scss";

type NativeProps = JSX.IntrinsicElements["table"];

export type TableProps = NativeProps & BaseProps;

export function Table({
  children,
  className,
  style,
  ...nativeProps
}: TableProps) {
  return (
    <table
      {...nativeProps}
      className={clsx(styles.Block, className)}
      style={style}
    >
      {children}
    </table>
  );
}

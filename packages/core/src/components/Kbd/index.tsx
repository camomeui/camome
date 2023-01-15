import clsx from "clsx";
import React from "react";

import styles from "./styles.module.scss";

export type KbdProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export function Kbd({ className, ...props }: KbdProps) {
  return <kbd className={clsx(styles.Block, className)} {...props} />;
}

import clsx from "clsx";
import React from "react";

import { BaseProps } from "src/types";

import styles from "./styles.module.scss";

export type TooltipProps = {
  children: React.ReactNode;
  label: React.ReactNode;
  placement?: "top" | "right" | "bottom" | "left";
} & BaseProps;

// TODO: Should append `aria-labelledby` and `aria-describedby` to the children?
// Maybe accept a render function and pass it a ID?
export function Tooltip({
  children,
  label,
  placement = "top",
  className,
  style,
}: TooltipProps) {
  return (
    <div className={clsx(styles.target, className)} style={style}>
      {children}
      <div role="tooltip" className={styles.content} data-placement={placement}>
        {label}
      </div>
    </div>
  );
}

import clsx from "clsx";
import React from "react";

import styles from "./styles.module.scss";

export type MarkupProps = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
};

export function Markup({ children, className, id }: MarkupProps) {
  return (
    <div className={clsx(styles.Block, className)} id={id}>
      {children}
    </div>
  );
}

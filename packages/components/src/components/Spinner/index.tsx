import clsx from "clsx";
import React from "react";

import styles from "./styles.module.scss";

type SpinnerSize = "sm" | "md" | "lg" | "xl";

export type SpinnerProps = {
  size?: SpinnerSize;
};

export function Spinner({ size = "md" }: SpinnerProps) {
  return (
    <div role="status">
      <svg
        className={clsx(styles.icon, size !== "md" && styles[`--${size}`])}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className={styles.accent}
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

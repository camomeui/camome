import clsx from "clsx";
import React from "react";

import { Input } from "../Input";

import styles from "./styles.module.scss";

export type ToggleSize = "sm" | "md" | "lg";

export type ToggleProps = {
  onLabel?: React.ReactNode;
  offLabel?: React.ReactNode;
  size?: ToggleSize;
  direction?: "horizontal" | "horizontal-reverse";
} & Omit<JSX.IntrinsicElements["input"], "size">;

// Reference: https://www.w3.org/WAI/ARIA/apg/patterns/switch/
export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  ({ onLabel, offLabel, size = "md", style, className, ...props }, ref) => {
    return (
      <span
        className={clsx(styles.Block, styles[`--${size}`], className)}
        style={style}
      >
        <Input
          type="checkbox"
          {...props}
          ref={ref}
          className={styles.input}
          role="switch"
        />
        <div className={styles.label} />
        <div className={styles.background} />
        {/* aria-hidden: https://www.w3.org/WAI/ARIA/apg/example-index/switch/switch-checkbox.html#:~:text=NOTE%3A%20To%20prevent%20redundant%20announcement%20of%20the%20state%20by%20screen%20readers%2C%20the%20text%20indicators%20of%20state%20are%20hidden%20from%20assistive%20technologies%20with%20aria%2Dhidden. */}
        <div className={styles.on} aria-hidden>
          {onLabel}
        </div>
        <div className={styles.off} aria-hidden>
          {offLabel}
        </div>
      </span>
    );
  }
);

Toggle.displayName = "Toggle";

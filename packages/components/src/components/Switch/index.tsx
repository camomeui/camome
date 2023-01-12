import clsx from "clsx";
import { forwardRef } from "react";

import { UnstyledInput } from "../UnstyledInput";

import styles from "./styles.module.scss";

export type ToggleSize = "sm" | "md" | "lg";

export type ToggleProps = {
  on?: React.ReactNode;
  off?: React.ReactNode;
  size?: ToggleSize;
  direction?: "horizontal" | "horizontal-reverse";
} & Omit<JSX.IntrinsicElements["input"], "size">;

// Reference: https://www.w3.org/WAI/ARIA/apg/patterns/switch/
export const Switch = forwardRef<HTMLInputElement, ToggleProps>(
  ({ on, off, size = "md", style, className, ...props }, ref) => {
    return (
      <span
        className={clsx(styles.Block, styles[`--${size}`], className)}
        style={style}
      >
        <UnstyledInput
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
          {on}
        </div>
        <div className={styles.off} aria-hidden>
          {off}
        </div>
      </span>
    );
  }
);

Switch.displayName = "Switch";

import clsx from "clsx";
import React from "react";

import { FormControl } from "../FormControl";
import { Input } from "../Input";

import styles from "./styles.module.scss";

export type CheckboxSize = "sm" | "md" | "lg";

export type CheckboxProps = {
  labelText: string;
  helperText?: string;
  error?: string | boolean;
  size?: CheckboxSize;
} & Omit<JSX.IntrinsicElements["input"], "size">;

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ labelText, helperText, error, size = "md", ...inputProps }, ref) => {
    return (
      <FormControl
        direction="horizontal-reverse"
        labelText={labelText}
        helperText={helperText}
        error={error}
        className={clsx(styles.Block, size !== "md" && styles[`--${size}`])}
      >
        <Input type="checkbox" {...inputProps} ref={ref} />
      </FormControl>
    );
  }
);

Checkbox.displayName = "Checkbox";

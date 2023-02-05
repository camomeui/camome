import clsx from "clsx";
import { forwardRef } from "react";

import { FormField, FormFieldProps } from "../FormField";
import { UnstyledInput } from "../UnstyledInput";

import styles from "./styles.module.scss";

export type CheckboxSize = "sm" | "md" | "lg";

type NativeProps = Omit<JSX.IntrinsicElements["input"], "size">;

export type CheckboxProps = {
  size?: CheckboxSize;
  label: string;
} & NativeProps &
  Pick<Partial<FormFieldProps>, "description" | "error">;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, description, error, size = "md", id, ...inputProps }, ref) => {
    return (
      <FormField
        label={label}
        description={description}
        error={error}
        id={id}
        custom
      >
        <div
          className={clsx(styles.Block, size !== "md" && styles[`--${size}`])}
        >
          <UnstyledInput type="checkbox" {...inputProps} ref={ref} />
          <div className={styles.marker} />
          <FormField.Label />
          <FormField.Error />
        </div>
      </FormField>
    );
  }
);

Checkbox.displayName = "Checkbox";

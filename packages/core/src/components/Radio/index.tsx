import clsx from "clsx";
import { forwardRef } from "react";

import { FormField, FormFieldProps } from "../FormField";
import { UnstyledInput } from "../UnstyledInput";

import styles from "./styles.module.scss";

type RadioSize = "sm" | "md" | "lg";

type OmittedNativeProps = "size";
type NativeProps = Omit<JSX.IntrinsicElements["input"], OmittedNativeProps>;

export type RadioProps = {
  size?: RadioSize;
} & NativeProps &
  Pick<FormFieldProps, "description" | "error" | "id" | "label">;

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, size = "md", id, ...inputProps }, forwardedRef) => {
    return (
      <FormField label={label} id={id} custom>
        <div
          className={clsx(styles.Block, size !== "md" && styles[`--${size}`])}
        >
          <UnstyledInput type="radio" {...inputProps} ref={forwardedRef} />
          <span className={styles.mark} />
          <FormField.Label />
        </div>
      </FormField>
    );
  }
);

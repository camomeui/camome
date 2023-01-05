import clsx from "clsx";
import React from "react";

import { FormField } from "../FormField";
import { UnstyledInput } from "../UnstyledInput";

import styles from "./styles.module.scss";

type RadioSize = "sm" | "md" | "lg";

type OmittedNativeProps = "size";
type NativeProps = Omit<JSX.IntrinsicElements["input"], OmittedNativeProps>;

export type RadioProps = {
  labelText: string;
  size?: RadioSize;
} & NativeProps;

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ labelText, size = "md", id, ...inputProps }, forwardedRef) => {
    return (
      <FormField label={labelText} id={id} custom>
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

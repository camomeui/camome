import clsx from "clsx";
import React from "react";

import { FormControl } from "../FormControl";
import { Input } from "../Input";

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
      <FormControl
        labelText={labelText}
        id={id}
        className={clsx(styles.Block, size !== "md" && styles[`--${size}`])}
      >
        <Input type="radio" {...inputProps} ref={forwardedRef} />
      </FormControl>
    );
  }
);

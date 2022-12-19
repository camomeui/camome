import clsx from "clsx";
import React from "react";

import { Input } from "../Input";

import styles from "./styles.module.scss";

export type TextInputSize = "sm" | "md" | "lg";

type OmittedNativeProps = "type" | "size";
type NativeProps = Omit<JSX.IntrinsicElements["input"], OmittedNativeProps>;

export type TextInputProps = {
  type?: "text" | "email" | "url" | "password" | "search";
  size?: TextInputSize;
  fill?: boolean;
} & NativeProps;

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ type, size = "md", fill, ...inputProps }, ref) => {
    return (
      <Input
        type={type}
        {...inputProps}
        ref={ref}
        className={clsx(
          styles.Block,
          styles[`Block--${size}`],
          fill && styles[`Block--fill`]
        )}
      />
    );
  }
);

TextInput.displayName = "TextInput";

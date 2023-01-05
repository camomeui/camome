import clsx from "clsx";
import React from "react";

import { FormField, type FormFieldProps } from "../FormField";
import { UnstyledInput } from "../UnstyledInput";

import styles from "./styles.module.scss";

export type TextInputSize = "sm" | "md" | "lg";
type OmittedNativeProps = "type" | "size";
type NativeProps = Omit<JSX.IntrinsicElements["input"], OmittedNativeProps>;

export type TextInputProps = {
  type?: "text" | "email" | "url" | "password" | "search";
  size?: TextInputSize;
  fill?: boolean;
} & NativeProps &
  Pick<Partial<FormFieldProps>, "description" | "error" | "label">;

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    { type, size = "md", fill, description, error, label, id, ...inputProps },
    forwardedRef
  ) => {
    const input = (
      <UnstyledInput
        type={type}
        {...inputProps}
        ref={forwardedRef}
        className={clsx(
          styles.Block,
          styles[`Block--${size}`],
          fill && styles[`Block--fill`]
        )}
      />
    );

    if (!label) return input;

    return (
      <FormField description={description} error={error} label={label} id={id}>
        {input}
      </FormField>
    );
  }
);

TextInput.displayName = "TextInput";

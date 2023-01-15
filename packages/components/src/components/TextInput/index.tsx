import clsx from "clsx";
import { forwardRef } from "react";

import type { Size } from "@camome/system";

import { BaseProps } from "../../types";
import { FormField, FormFieldProps } from "../FormField";
import { UnstyledInput } from "../UnstyledInput";

import styles from "./styles.module.scss";

type OmittedNativeProps = "type" | "size";
type NativeProps = Omit<JSX.IntrinsicElements["input"], OmittedNativeProps>;

export type TextInputProps = {
  type?: "text" | "email" | "url" | "password" | "search";
  size?: Size;
  fill?: boolean;
} & BaseProps &
  NativeProps &
  Pick<Partial<FormFieldProps>, "description" | "error" | "label">;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      type = "text",
      size = "md",
      fill,
      description,
      error,
      label,
      id,
      ...inputProps
    },
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

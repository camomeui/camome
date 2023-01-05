import clsx from "clsx";
import React from "react";

import { FormField, type FormFieldProps } from "../FormField";
import { UnstyledInput } from "../UnstyledInput";

import styles from "./styles.module.scss";

type TextareaNativeProps = JSX.IntrinsicElements["textarea"];

export type TextareaProps = {
  fill?: boolean;
} & TextareaNativeProps &
  Pick<FormFieldProps, "description" | "error" | "label">;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ description, error, label, id, fill, ...props }, forwardedRef) => {
    const textarea = (
      <UnstyledInput
        component="textarea"
        {...props}
        ref={forwardedRef}
        className={clsx(styles.Block, fill && styles[`Block--fill`])}
      />
    );

    if (!label) return textarea;

    return (
      <FormField description={description} error={error} label={label} id={id}>
        {textarea}
      </FormField>
    );
  }
);

Textarea.displayName = "Textarea";

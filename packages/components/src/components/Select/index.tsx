import clsx from "clsx";
import React from "react";

import { FormField, FormFieldProps } from "@camome/components/FormField";
import { UnstyledInput } from "@camome/components/UnstyledInput";

import styles from "./styles.module.scss";

export type SelectSize = "sm" | "md" | "lg";

export type SelectProps = { size?: SelectSize; fill?: boolean } & Omit<
  JSX.IntrinsicElements["select"],
  "size" | "ref"
> &
  Pick<Partial<FormFieldProps>, "description" | "error" | "label">;

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    { label, description, error, size = "md", fill, id, className, ...props },
    forwardedRef
  ) => {
    const select = (
      <UnstyledInput
        component="select"
        ref={forwardedRef}
        {...props}
        className={clsx(
          styles.Block,
          styles[`Block--${size}`],
          fill && styles["Block--fill"],
          className
        )}
      />
    );

    if (!label) return select;
    return (
      <FormField description={description} error={error} label={label} id={id}>
        {select}
      </FormField>
    );
  }
);

Select.displayName = "Select";

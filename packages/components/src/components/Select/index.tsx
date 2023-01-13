import clsx from "clsx";
import { forwardRef } from "react";

import { Size } from "../../types";
import { FormField, FormFieldProps } from "../FormField";
import { UnstyledInput } from "../UnstyledInput";

import styles from "./styles.module.scss";

type NativeProps = Omit<JSX.IntrinsicElements["select"], "size" | "ref">;

export type SelectProps = { size?: Size; fill?: boolean } & NativeProps &
  Pick<Partial<FormFieldProps>, "description" | "error" | "label">;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
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

import clsx from "clsx";
import React from "react";

import { useFormControlContext } from "../FormControl/useFormControlContext";

import styles from "./styles.module.scss";

export type SelectSize = "sm" | "md" | "lg";

export type SelectProps = { size?: SelectSize; fill?: boolean } & Omit<
  JSX.IntrinsicElements["select"],
  "size"
>;

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ size = "md", fill, className, ...props }, forwardedRef) => {
    const { htmlFor, helperTextId, errorTextId, isError } =
      useFormControlContext();
    return (
      <select
        id={htmlFor}
        aria-describedby={[helperTextId || "", errorTextId || ""].join(" ")}
        aria-disabled={isError ? true : undefined}
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
  }
);

Select.displayName = "Select";

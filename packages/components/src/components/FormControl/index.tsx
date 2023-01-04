import clsx from "clsx";
import React from "react";

import {
  FormControlContext,
  FormControlContextValue,
} from "./FormControlContext";
import styles from "./styles.module.scss";

export type FormControlProps = {
  labelText: string;
  helperText?: string;
  error?: boolean | string;
  direction?: "vertical" | "horizontal" | "horizontal-reverse";
  id?: string;
  children:
    | React.ReactNode
    | ((props: FormControlContextValue) => React.ReactNode);
  className?: string;
};

export function FormControl({
  labelText,
  helperText,
  error = false,
  direction = "vertical",
  id: _id,
  children,
  className,
}: FormControlProps) {
  const useIdValue = React.useId();
  const id = _id || useIdValue;
  const labelId = `${id}--label`;
  const helperTextId = helperText ? `${id}--helper-text` : undefined;
  const errorTextId =
    typeof error === "string" ? `${id}--error-text` : undefined;
  const ctxValue = {
    id,
    labelId,
    helperTextId,
    errorTextId,
    isError: !!error,
  };

  return (
    <FormControlContext.Provider value={ctxValue}>
      <div
        className={clsx(
          direction === "vertical" ? styles.Block : styles[`--${direction}`],
          className
        )}
      >
        <label htmlFor={id} id={labelId} className={styles["label-text"]}>
          {labelText}
        </label>
        {helperText && (
          <span id={helperTextId} className={styles["helper-text"]}>
            {helperText}
          </span>
        )}
        <span className={styles["form-field"]}>
          {typeof children === "function" ? children(ctxValue) : children}
        </span>
        {typeof error === "string" && (
          <span id={errorTextId} className={styles["error-text"]}>
            {error}
          </span>
        )}
      </div>
    </FormControlContext.Provider>
  );
}

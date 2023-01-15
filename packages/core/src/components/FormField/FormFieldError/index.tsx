import clsx from "clsx";

import { BaseProps } from "../../../types";
import { useFormFieldContext } from "../useFormFieldContext";

import styles from "./styles.module.scss";

export type FormHelperTextProps = BaseProps;

export function FormFieldError({ className, style }: FormHelperTextProps) {
  const { error, errorId } = useFormFieldContext();

  if (!error || !errorId) return null;

  return (
    <span
      id={errorId}
      className={clsx(styles["Block"], className)}
      style={style}
    >
      {error}
    </span>
  );
}

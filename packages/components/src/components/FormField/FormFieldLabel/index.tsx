import clsx from "clsx";

import { BaseProps } from "../../../types";
import { useFormFieldContext } from "../useFormFieldContext";

import styles from "./styles.module.scss";

export type FormLabelProps = BaseProps;

export function FormFieldLabel({ className, style }: FormLabelProps) {
  const { id, label, labelId } = useFormFieldContext();

  return (
    <label
      htmlFor={id}
      id={labelId}
      className={clsx(styles["Block"], className)}
      style={style}
    >
      {label}
    </label>
  );
}

import clsx from "clsx";

import { BaseProps } from "../../../types";
import { useFormFieldContext } from "../useFormFieldContext";

import styles from "./styles.module.scss";

export type FormHelperTextProps = BaseProps;

export function FormFieldDescription({
  className,
  style,
}: FormHelperTextProps) {
  const { description, descriptionId } = useFormFieldContext();

  if (!description || !descriptionId) return null;

  return (
    <span
      id={descriptionId}
      className={clsx(styles["Block"], className)}
      style={style}
    >
      {description}
    </span>
  );
}

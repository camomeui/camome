import clsx from "clsx";

import type { Orientation } from "@camome/system";

import { joinLabelIds } from "../../utils/joinLabelIds";
import { FormField, type FormFieldProps } from "../FormField";

import styles from "./styles.module.scss";

type NativeProps = JSX.IntrinsicElements["div"];

export type RadioGroupProps = {
  orientation?: Orientation;
} & FormFieldProps &
  NativeProps;

export function RadioGroup({
  orientation = "vertical",
  id,
  label,
  description,
  error,
  children,
  ...props
}: RadioGroupProps) {
  return (
    <FormField
      id={id}
      label={label}
      description={description}
      error={error}
      custom
    >
      {({ labelId, descriptionId, errorId }) => (
        <div
          role="radiogroup"
          aria-describedby={joinLabelIds(descriptionId, errorId)}
          aria-labelledby={labelId}
          className={clsx(
            styles.Block,
            orientation !== "vertical" && styles[`--${orientation}`]
          )}
          {...props}
        >
          <FormField.Label />
          <FormField.Description />
          <div className={styles.items}>{children}</div>
          <FormField.Error />
        </div>
      )}
    </FormField>
  );
}

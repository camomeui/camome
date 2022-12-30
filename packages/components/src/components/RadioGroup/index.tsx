import clsx from "clsx";

import { Direction } from "../../types";
import { useFormControlContext } from "../FormControl/useFormControlContext";

import styles from "./styles.module.scss";

type NativeProps = JSX.IntrinsicElements["div"];

export type RadioGroupProps = {
  direction?: Direction;
} & NativeProps;

export function RadioGroup({
  direction = "vertical",
  children,
  ...props
}: RadioGroupProps) {
  const { labelId } = useFormControlContext();
  return (
    <div
      role="radiogroup"
      className={clsx(
        styles.Block,
        direction !== "vertical" && styles[`--${direction}`]
      )}
      aria-labelledby={labelId}
      {...props}
    >
      {children}
    </div>
  );
}

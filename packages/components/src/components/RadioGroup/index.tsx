import clsx from "clsx";

import {
  FormControl,
  type FormControlProps,
} from "@camome/components/FormControl";

import { Direction } from "../../types";

import styles from "./styles.module.scss";

type NativeProps = JSX.IntrinsicElements["div"];

export type RadioGroupProps = {
  direction?: Direction;
} & FormControlProps &
  NativeProps;

export function RadioGroup({
  direction = "vertical",
  children,
  ...props
}: RadioGroupProps) {
  return (
    <FormControl {...props}>
      {({ labelId }) => (
        <div
          role="radiogroup"
          className={clsx(
            styles.Block,
            direction !== "vertical" && styles[`--${direction}`]
          )}
          aria-labelledby={labelId}
        >
          {children}
        </div>
      )}
    </FormControl>
  );
}

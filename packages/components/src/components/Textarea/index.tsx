import clsx from "clsx";
import React from "react";

import { Input } from "../Input";

import styles from "./styles.module.scss";

type TextareaNativeProps = JSX.IntrinsicElements["textarea"];

export type TextareaProps = {
  fill?: boolean;
} & TextareaNativeProps;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ fill, ...props }, forwardedRef) => {
    return (
      <Input
        component="textarea"
        {...props}
        ref={forwardedRef}
        className={clsx(styles.Block, fill && styles[`Block--fill`])}
      />
    );
  }
);

Textarea.displayName = "Textarea";

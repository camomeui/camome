import clsx from "clsx";
import React from "react";

import {
  BaseProps,
  PolymorphicProps,
  ColorScheme,
  Variant,
  Size,
} from "../../types";
import { createPolymorphicComponent } from "../../utils/createPolymorphicComponent";
import { Box } from "../Box";

import styles from "./styles.module.scss";

export type ButtonVariant = Variant;
export type ButtonColorScheme = ColorScheme;

export type ButtonBaseProps = {
  variant?: ButtonVariant;
  colorScheme?: ButtonColorScheme;
  size?: Size;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
};

export type ButtonProps = ButtonBaseProps & BaseProps;

const _Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & PolymorphicProps
>(
  (
    {
      component = "button",
      variant = "solid",
      colorScheme = "primary",
      size = "md",
      leftIcon,
      rightIcon,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const mergedProps = {
      ...props,
      className: clsx(
        className,
        styles.Block,
        styles[`Block--${variant}`],
        styles[`Block--${colorScheme}`],
        styles[`Block--${size}`]
      ),
    };

    return (
      <Box component={component} ref={ref} {...mergedProps}>
        {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
        {children}
        {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
      </Box>
    );
  }
);

_Button.displayName = "Button";

export const Button = createPolymorphicComponent<"button", ButtonProps>(
  _Button
);

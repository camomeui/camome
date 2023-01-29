import clsx from "clsx";
import React from "react";

import type { Variant, ColorScheme, Size } from "@camome/system";

import { BaseProps, PolymorphicProps } from "../../types";
import { createPolymorphicComponent } from "../../utils/createPolymorphicComponent";
import { Box } from "../Box";

import styles from "./styles.module.scss";

export type ButtonVariant = Variant;
export type ButtonColorScheme = ColorScheme;

export type ButtonBaseProps = {
  variant?: ButtonVariant;
  colorScheme?: ButtonColorScheme;
  size?: Size;
  startDecorator?: React.ReactNode;
  endDecorator?: React.ReactNode;
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
      startDecorator,
      endDecorator,
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
        {startDecorator && (
          <span className={styles.startDecorator}>{startDecorator}</span>
        )}
        {children}
        {endDecorator && (
          <span className={styles.endDecorator}>{endDecorator}</span>
        )}
      </Box>
    );
  }
);

_Button.displayName = "Button";

export const Button = createPolymorphicComponent<"button", ButtonProps>(
  _Button
);

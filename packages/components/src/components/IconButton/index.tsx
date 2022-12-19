import clsx from "clsx";
import React from "react";

import { BaseProps, PolymorphicProps } from "../../types";
import { createPolymorphicComponent } from "../../utils/createPolymorphicComponent";
import { Box } from "../Box";
import { ButtonBaseProps } from "../Button";

import styles from "./styles.module.scss";

export type IconButtonBaseProps = {
  children?: React.ReactNode;
  ["aria-label"]: string;
} & ButtonBaseProps;

export type IconButtonProps = {
  children?: React.ReactNode;
} & BaseProps &
  IconButtonBaseProps;

const _IconButton = React.forwardRef<
  HTMLButtonElement,
  IconButtonProps & PolymorphicProps
>(
  (
    {
      component = "button",
      variant = "solid",
      colorScheme = "primary",
      size = "md",
      children,
      className,
      ...props
    },
    forwardedRef
  ) => {
    const mergedProps = {
      ...props,
      variant,
      className: clsx(
        className,
        styles.Block,
        variant !== "solid" && styles[`--${variant}`],
        colorScheme !== "primary" && styles[`--${colorScheme}`],
        size !== "md" && styles[`--${size}`]
      ),
    };

    return (
      <Box component={component} ref={forwardedRef} {...mergedProps}>
        {children}
      </Box>
    );
  }
);

_IconButton.displayName = "IconButton";

export const IconButton = createPolymorphicComponent<"button", IconButtonProps>(
  _IconButton
);

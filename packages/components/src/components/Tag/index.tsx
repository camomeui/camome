import clsx from "clsx";
import React from "react";

import {
  BaseProps,
  PolymorphicProps,
  Variant,
  ColorScheme,
  Size,
} from "../../types";
import { createPolymorphicComponent } from "../../utils/createPolymorphicComponent";
import { mergeStyleAndCssVars } from "../../utils/mergeStyleAndCssVars";
import { Box } from "../Box";

import styles from "./styles.module.scss";

type TagCssVariables = {
  "--Tag-icon-size"?: number | string;
  "--Tag-icon-margin"?: number | string;
};

export type TagProps = {
  size?: Size;
  variant?: Variant;
  colorScheme?: ColorScheme;
  startDecorator?: React.ReactNode;
  endDecorator?: React.ReactNode;
  children?: React.ReactNode;
  cssVariables?: TagCssVariables;
} & BaseProps;

const defaultSize = "md" as const;
const defaultVariant = "subtle" as const;
const defaultColorScheme = "primary" as const;

const _Tag = React.forwardRef<HTMLSpanElement, TagProps & PolymorphicProps>(
  (props, forwardedRef) => {
    const {
      component = "span",
      size = defaultSize,
      variant = defaultVariant,
      colorScheme = defaultColorScheme,
      startDecorator,
      endDecorator,
      cssVariables,
      children,
      style,
      ...restProps
    } = props;
    return (
      <Box
        component={component}
        className={clsx(
          styles.Block,
          size !== defaultSize && styles[`--${size}`],
          styles[`Block--${variant}`],
          styles[`Block--${colorScheme}`]
        )}
        ref={forwardedRef}
        style={mergeStyleAndCssVars(style, cssVariables)}
        {...restProps}
      >
        {startDecorator && startDecorator}
        {children}
        {endDecorator && endDecorator}
      </Box>
    );
  }
);

_Tag.displayName = "Tag";

export const Tag = createPolymorphicComponent<"span", TagProps>(_Tag);

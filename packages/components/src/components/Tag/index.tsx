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
import { Box } from "../Box";

import styles from "./styles.module.scss";

export type TagProps = {
  size?: Size;
  variant?: Variant;
  colorScheme?: ColorScheme;
  startDecorator?: React.ReactNode;
  endDecorator?: React.ReactNode;
  children?: React.ReactNode;
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
      children,
      style,
      className,
      ...restProps
    } = props;
    return (
      <Box
        component={component}
        className={clsx(
          styles.Block,
          size !== defaultSize && styles[`--${size}`],
          styles[`Block--${variant}`],
          styles[`Block--${colorScheme}`],
          className
        )}
        ref={forwardedRef}
        style={style}
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

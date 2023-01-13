import clsx from "clsx";
import { forwardRef } from "react";

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

// Not appending `as const` to prevent react-docgen-typescript from
// including it.
// TODO: maybe filterable?
const defaultSize = "md";
const defaultVariant = "soft";
const defaultColorScheme = "primary";

const _Tag = forwardRef<HTMLSpanElement, TagProps & PolymorphicProps>(
  (
    {
      component = "span",
      size = "md",
      variant = defaultVariant,
      colorScheme = defaultColorScheme,
      startDecorator,
      endDecorator,
      children,
      style,
      className,
      ...restProps
    },
    forwardedRef
  ) => {
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

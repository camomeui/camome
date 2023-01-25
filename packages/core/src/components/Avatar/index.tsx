import { UserCircleIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React from "react";

import type { ColorScheme, Size, Variant } from "@camome/system";

import { BaseProps, PolymorphicProps } from "../../types";
import { createPolymorphicComponent } from "../../utils/createPolymorphicComponent";
import { Box } from "../Box";

import styles from "./styles.module.scss";

export type AvatarProps = {
  size?: Size;
  variant?: Variant;
  colorScheme?: ColorScheme;
  src?: string;
  alt?: string;
  children?: React.ReactNode;
} & BaseProps;

const defaultSize = "md" as const;
const defaultVariant = "soft" as const;
const defaultColorScheme = "primary" as const;

const _Avatar = React.forwardRef<
  HTMLImageElement,
  AvatarProps & PolymorphicProps
>((props, forwardedRef) => {
  const {
    component = "span",
    size = defaultSize,
    variant = defaultVariant,
    colorScheme = defaultColorScheme,
    src,
    alt,
    children,
    className,
    ...restProps
  } = props;

  const inner = src ? (
    <img src={src} alt={alt} />
  ) : (
    <span>{children ?? <UserCircleIcon />}</span>
  );

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
      {...restProps}
    >
      {inner}
    </Box>
  );
});

_Avatar.displayName = "Avatar";

export const Avatar = createPolymorphicComponent<"span", AvatarProps>(_Avatar);

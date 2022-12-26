import clsx from "clsx";
import React from "react";

import styles from "./styles.module.scss";

type OmittedNativeProps = "type" | "size";
type NativeProps = Omit<JSX.IntrinsicElements["input"], OmittedNativeProps>;

type SliderSize = "sm" | "md" | "lg";
type SliderBaseProps = {
  size?: SliderSize;
};

export type SliderProps = SliderBaseProps & NativeProps;

export function Slider(props: SliderProps) {
  const { size = "md", className, ...nativeProps } = props;
  return (
    <input
      {...nativeProps}
      type="range"
      className={clsx(styles.Block, styles[`--${size}`], className)}
    />
  );
}

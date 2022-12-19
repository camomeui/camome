import React from "react";

import { PolymorphicProps } from "../../types";
import { createPolymorphicComponent } from "../../utils/createPolymorphicComponent";

export type BoxProps = {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

export const _Box = React.forwardRef<
  HTMLDivElement,
  BoxProps & PolymorphicProps
>(({ className, component, style, ...props }, ref) => {
  const Element = component || "div";
  return <Element ref={ref} className={className} style={style} {...props} />;
});

_Box.displayName = "Box";

export const Box = createPolymorphicComponent<"div", BoxProps>(_Box);

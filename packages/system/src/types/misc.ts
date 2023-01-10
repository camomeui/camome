import { Color } from "./color";

export type Rounded = {
  none: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  full: string;
};

export type Shadow = {
  color: Color;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export type Outline = {
  color: {
    primary: Color;
    danger: Color;
  };
  width: string;
  offset: string;
};

export type Transition = {
  bg: string;
};

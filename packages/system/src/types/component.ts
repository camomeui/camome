import type { Color } from "./color/primitive";

import {
  colorSchemes,
  sizes,
  variants,
  themedComponents,
  orientations,
} from "../constants";

export type Orientation = (typeof orientations)[number];
export type Size = (typeof sizes)[number];
export type ColorScheme = (typeof colorSchemes)[number];
export type Variant = (typeof variants)[number];

export type ThemedComponent = (typeof themedComponents)[number];

export type Input = {
  bg: Color;
  border: Color;
};

export type Kbd = {
  bg: Color;
  border: Color;
  font: Color;
};

export type Menu = {
  bg: Color;
  bgHover: Color;
  fontLabel: Color;
  fontIcon: Color;
  fontGroup: Color;
};

export type Tab = {
  border: Color;
  borderActive: Color;
  borderHover: Color;
  bg: Color;
  bgActive: Color;
  bgHover: Color;
  font: Color;
  fontActive: Color;
  fontHover: Color;
  listBg: Color;
};

export type Switch = {
  bgOff: Color;
  bgOn: Color;
  bgThumb: Color;
  fontOff: Color;
  fontOn: Color;
  border: Color;
  borderThumb: Color;
};

export type Tooltip = {
  bg: Color;
  font: Color;
};

export type ComponentTheme = {
  Input: Input;
  Kbd: Kbd;
  Menu: Menu;
  Tab: Tab;
  Tooltip: Tooltip;
  Switch: Switch;
};

// Make sure `ComponentTheme` has all the component themes
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Test = {
  [P in ThemedComponent]: ComponentTheme[P];
};

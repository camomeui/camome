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

export type InputTheme = {
  bg: Color;
  border: Color;
};

export type KbdTheme = {
  bg: Color;
  border: Color;
  font: Color;
};

export type MenuTheme = {
  bg: Color;
  bgHover: Color;
  fontLabel: Color;
  fontIcon: Color;
  fontGroup: Color;
};

type MessageThemItem = {
  bg: Color;
  font: Color;
  border: Color;
};

export type MessageTheme = {
  info: MessageThemItem;
  success: MessageThemItem;
  warn: MessageThemItem;
  danger: MessageThemItem;
};

export type TabTheme = {
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

export type SwitchTheme = {
  bgOff: Color;
  bgOn: Color;
  bgThumb: Color;
  fontOff: Color;
  fontOn: Color;
  border: Color;
  borderThumb: Color;
};

export type TooltipTheme = {
  bg: Color;
  font: Color;
};

export type ComponentTheme = {
  Input: InputTheme;
  Kbd: KbdTheme;
  Menu: MenuTheme;
  Tab: TabTheme;
  Tooltip: TooltipTheme;
  Switch: SwitchTheme;
  Message: MessageTheme;
};

// Make sure `ComponentTheme` has all the component themes
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Test = {
  [P in ThemedComponent]: ComponentTheme[P];
};

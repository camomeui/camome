import { type DeepPartial } from "@camome/utils";

import { ColorPalette } from "./color";
import { ComponentTheme } from "./component";
import { FontFamily, FontSize, FontWeight } from "./font";
import { Rounded, Shadow, Outline, Transition } from "./misc";

export type Theme = {
  color: ColorPalette;
  font: {
    family: FontFamily;
    size: FontSize;
    weight: FontWeight;
  };
  rounded: Rounded;
  shadow: Shadow;
  outline: Outline;
  transition: Transition;
} & ComponentTheme;

export type Themes = {
  light: Theme;
  dark: Theme;
};

export type ThemeCustomization = DeepPartial<Themes>;

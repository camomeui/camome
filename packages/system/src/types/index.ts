import type { DeepPartial, Path } from "@camome/utils";

import { ColorPalette } from "./color";
import { ComponentTheme } from "./component";
import { FontFamily, FontSize, FontWeight } from "./font";
import { Radius, Shadow, Outline, Transition } from "./misc";

export type Theme = {
  color: ColorPalette;
  font: {
    family: FontFamily;
    size: FontSize;
    weight: FontWeight;
  };
  radius: Radius;
  shadow: Shadow;
  outline: Outline;
  transition: Transition;
} & ComponentTheme;

export type GetTheme = (key: Path<Theme>) => string;
export type ThemeConfigCallback = (get: GetTheme) => string;
export type WithCallback<T> = T extends object
  ? {
      [P in keyof T]: WithCallback<T[P]>;
    }
  : T | ThemeConfigCallback;
export type ThemeConfig = WithCallback<DeepPartial<Theme>>;
export type Config = {
  themes?: {
    common?: ThemeConfig;
    light?: ThemeConfig;
    dark?: ThemeConfig;
  };
};

export * from "./component";
export * from "./font";
export * from "./misc";

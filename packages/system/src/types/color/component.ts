import { Color } from "./primitive";

export type MenuColors = {
  bg: Color;
  bgHover: Color;
  fontLabel: Color;
  fontIcon: Color;
  fontGroup: Color;
};

export type TabColors = {
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

export type SwitchColors = {
  bgOff: Color;
  bgOn: Color;
  bgThumb: Color;
  fontOff: Color;
  fontOn: Color;
  border: Color;
  borderThumb: Color;
};

export type TooltipColors = {
  bg: Color;
  font: Color;
};

export type ComponentColors = {
  menu: MenuColors;
  tab: TabColors;
  tooltip: TooltipColors;
  switch: SwitchColors;
};

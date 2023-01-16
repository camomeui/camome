import type { Meta } from "@storybook/react";

import { Avatar } from "@camome/core";

const meta: Meta<typeof Avatar> = {
  title: "components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
};
export default meta;

export { default as Default } from "./Default";
export { default as Size } from "./Size";
export { default as Variant } from "./Variant";
export { default as Content } from "./Content";
export { default as ColorScheme } from "./ColorScheme";
export { default as Clickable } from "./Clickable";

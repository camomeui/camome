import type { Meta } from "@storybook/react";

import { Tag } from "@camome/components/Tag";

const meta: Meta<typeof Tag> = {
  title: "components/Tag",
  component: Tag,
  tags: ["autodocs"],
};
export default meta;

export { default as Default } from "./Default";
export { default as Size } from "./Size";
export { default as ColorScheme } from "./ColorScheme";
export { default as Variant } from "./Variant";
export { default as Decorator } from "./Decorators";

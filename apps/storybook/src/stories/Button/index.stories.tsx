import type { Meta } from "@storybook/react";

import { Button } from "@camome/core/Button";

const meta: Meta<typeof Button> = {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
};
export default meta;

export { default as Default } from "./Default";
export { default as Size } from "./Size";
export { default as Variant } from "./Variant";
export { default as ColorScheme } from "./ColorScheme";
export { default as Disabled } from "./Disabled";
export { default as Loading } from "./Loading";
export { default as WithIcon } from "./WithIcon";

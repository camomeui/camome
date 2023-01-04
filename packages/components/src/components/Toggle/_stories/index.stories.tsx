import type { Meta } from "@storybook/react";

import { Toggle } from "@camome/components/Toggle";

const meta: Meta<typeof Toggle> = {
  title: "components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
};
export default meta;

export { default as Default } from "./Default";
export { default as Size } from "./Size";
export { default as WithIcon } from "./WithIcon";

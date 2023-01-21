import type { Meta } from "@storybook/react";

import { Switch } from "@camome/core/Switch";

const meta: Meta<typeof Switch> = {
  title: "components/Switch",
  component: Switch,
  tags: ["autodocs"],
};
export default meta;

export { default as Default } from "./Default";
export { default as Size } from "./Size";
export { default as WithIcon } from "./WithIcon";

import type { Meta } from "@storybook/react";

import { Select } from "@camome/core";

const meta: Meta<typeof Select> = {
  title: "components/Select",
  component: Select,
};

export default meta;

export { default as Default } from "./Default";
export { default as Size } from "./Size";
export { default as Description } from "./Description";
export { default as Error } from "./Error";
export { default as Disabled } from "./Disabled";
export { default as Fill } from "./Fill";

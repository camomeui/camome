import type { Meta } from "@storybook/react";

import { Input } from "@camome/core/Input";

const meta: Meta<typeof Input> = {
  title: "components/Input",
  component: Input,
};
export default meta;

export { default as Default } from "./Default";
export { default as Size } from "./Size";
export { default as Fill } from "./Fill";
export { default as Error } from "./Error";
export { default as Required } from "./Required";
export { default as Disabled } from "./Disabled";
export { default as Description } from "./Description";
export { default as Group } from "./Group";

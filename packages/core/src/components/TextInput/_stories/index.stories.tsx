import type { Meta } from "@storybook/react";

import { TextInput } from "@camome/core/TextInput";

const meta: Meta<typeof TextInput> = {
  title: "components/TextInput",
  component: TextInput,
};
export default meta;

export { default as Default } from "./Default";
export { default as Fill } from "./Fill";
export { default as Error } from "./Error";
export { default as Required } from "./Required";
export { default as Disabled } from "./Disabled";
export { default as Description } from "./Description";
export { default as Group } from "./Group";

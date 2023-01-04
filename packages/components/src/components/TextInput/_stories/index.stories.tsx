import type { Meta } from "@storybook/react";

import { TextInput } from "@camome/components/TextInput";

const meta: Meta<typeof TextInput> = {
  title: "components/TextInput",
  component: TextInput,
  tags: ["autodocs"],
};
export default meta;

export { default as Default } from "./Default";
export { default as Fill } from "./Fill";
export { default as Required } from "./Required";
export { default as HelperText } from "./HelperText";
export { default as Error } from "./Error";
export { default as Disabled } from "./Disabled";
export { default as Group } from "./Group";

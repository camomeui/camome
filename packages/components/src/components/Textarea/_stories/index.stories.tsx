import type { Meta } from "@storybook/react";

import { Textarea } from "@camome/components/Textarea";

const meta: Meta<typeof Textarea> = {
  title: "components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
};
export default meta;

export { default as Default } from "./Default";
export { default as Fill } from "./Fill";
export { default as Required } from "./Required";
export { default as HelperText } from "./HelperText";
export { default as Error } from "./Error";
export { default as Disabled } from "./Disabled";

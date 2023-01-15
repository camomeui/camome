import type { Meta } from "@storybook/react";

import { Textarea } from "@camome/core/Textarea";

const meta: Meta<typeof Textarea> = {
  title: "components/Textarea",
  component: Textarea,
};
export default meta;

export { default as Default } from "./Default";
export { default as Required } from "./Required";
export { default as Description } from "./Description";
export { default as Error } from "./Error";
export { default as Disabled } from "./Disabled";
export { default as Fill } from "./Fill";

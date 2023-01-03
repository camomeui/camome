import type { Meta } from "@storybook/react";

import { Checkbox } from "@camome/components/Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "components/Checkbox",
  component: Checkbox,
};
export default meta;

export { default as Default } from "./Default";
export { default as Size } from "./Size";
export { default as Disabled } from "./Disabled";
export { default as WithHelperText } from "./WithHelperText";

import type { Meta } from "@storybook/react";

import { Select } from "@camome/components/Select";

import { FormControl } from "../../FormControl";

const meta: Meta<typeof Select> = {
  component: Select,
  decorators: [
    (Story) => (
      <FormControl labelText="Your position">
        <Story />
      </FormControl>
    ),
  ],
};

export default meta;

export { default as Default } from "./Default";
export { default as Size } from "./Size";
export { default as HelperText } from "./HelperText";
export { default as Error } from "./Error";
export { default as Disabled } from "./Disabled";

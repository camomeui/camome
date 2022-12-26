import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox, CheckboxProps } from ".";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
};
export default meta;
type Story = StoryObj<CheckboxProps>;

export const Primary: Story = {
  args: {
    labelText: "Agree to Privacy Policy",
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonProps } from ".";

const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};

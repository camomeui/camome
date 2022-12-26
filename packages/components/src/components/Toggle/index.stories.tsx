import type { Meta, StoryObj } from "@storybook/react";

import { Toggle, ToggleProps } from ".";

const meta: Meta<typeof Toggle> = {
  component: Toggle,
};
export default meta;
type Story = StoryObj<ToggleProps>;

export const Primary: Story = {
  args: {
    labelText: "Enable dark theme",
    onLabel: "ON",
    offLabel: "OFF",
  },
};

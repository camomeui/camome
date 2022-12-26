import { BellAlertIcon } from "@heroicons/react/24/outline";

import type { Meta, StoryObj } from "@storybook/react";

import { IconButton, IconButtonProps } from ".";

const meta: Meta<typeof IconButton> = {
  component: IconButton,
};
export default meta;
type Story = StoryObj<IconButtonProps>;

export const Primary: Story = {
  args: {
    children: <BellAlertIcon />,
  },
};

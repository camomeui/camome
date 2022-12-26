import type { Meta, StoryObj } from "@storybook/react";

import { Avatar, AvatarProps } from ".";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
};
export default meta;
type Story = StoryObj<AvatarProps>;

export const Image: Story = {
  args: {
    src: "/avatar-1.jpg",
  },
};

export const Initial: Story = {
  args: {
    children: "MT",
  },
};

export const Placeholder: Story = {
  args: {},
};

import type { Meta, StoryObj } from "@storybook/react";

import { Message, MessageProps } from ".";

const meta: Meta<typeof Message> = {
  component: Message,
  argTypes: {
    title: {
      type: "string",
    },
  },
};
export default meta;
type Story = StoryObj<MessageProps>;

export const Primary: Story = {
  args: {
    title: "This is a title",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
};

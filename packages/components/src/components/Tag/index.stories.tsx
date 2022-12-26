import type { Meta, StoryObj } from "@storybook/react";

import { Tag, TagProps } from ".";

const meta: Meta<typeof Tag> = {
  component: Tag,
};
export default meta;
type Story = StoryObj<TagProps>;

export const Primary: Story = {
  args: {
    children: "Tag",
  },
};

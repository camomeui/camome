import type { Meta, StoryObj } from "@storybook/react";

import { Radio, RadioProps } from "@camome/components/Radio";

const meta: Meta<typeof Radio> = {
  component: Radio,
};
export default meta;
type Story = StoryObj<RadioProps>;

export const Primary: Story = {
  args: {
    labelText: "Apple",
  },
};

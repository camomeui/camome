import type { Meta, StoryObj } from "@storybook/react";

import { Spinner, SpinnerProps } from ".";

const meta: Meta<typeof Spinner> = {
  component: Spinner,
};
export default meta;
type Story = StoryObj<SpinnerProps>;

export const Primary: Story = {
  args: {},
};

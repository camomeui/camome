import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";

import { Tooltip, TooltipProps } from ".";

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  decorators: [
    (Story) => (
      <div style={{ padding: "2rem" }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<TooltipProps>;

export const Top: Story = {
  args: {
    label: "This is a tooltip",
    children: <Button>Hover or focus me</Button>,
    placement: "top",
  },
};

export const Bottom: Story = {
  args: {
    label: "This is a tooltip",
    children: <Button>Hover or focus me</Button>,
    placement: "bottom",
  },
};

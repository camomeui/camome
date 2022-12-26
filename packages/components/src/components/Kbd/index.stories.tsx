import type { Meta, StoryObj } from "@storybook/react";

import { Kbd, KbdProps } from ".";

const meta: Meta<typeof Kbd> = {
  component: Kbd,
};
export default meta;
type Story = StoryObj<KbdProps>;

export const Primary: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.25rem" }}>
      <Kbd>⌘</Kbd>
      <span>+</span>
      <Kbd>K</Kbd>
    </div>
  ),
};

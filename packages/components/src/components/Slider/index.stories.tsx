import type { Meta, StoryObj } from "@storybook/react";

import { Slider, SliderProps } from "@camome/components/Slider";

const meta: Meta<typeof Slider> = {
  component: Slider,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "20rem" }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<SliderProps>;

export const Primary: Story = {
  args: {},
};

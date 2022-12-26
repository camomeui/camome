import type { Meta, StoryObj } from "@storybook/react";

import { FormControl } from "../FormControl";

import { Select, SelectProps } from ".";

const meta: Meta<typeof Select> = {
  component: Select,
  decorators: [
    (Story) => (
      <FormControl labelText="Your position">
        <Story />
      </FormControl>
    ),
  ],
};

export default meta;
type Story = StoryObj<SelectProps>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
        <option value="marketer">Marketer</option>
      </>
    ),
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import { FormControl } from "../FormControl";

import { Textarea, TextareaProps } from ".";

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  decorators: [
    (Story) => (
      <FormControl labelText="Label">
        <Story />
      </FormControl>
    ),
  ],
};
export default meta;
type Story = StoryObj<TextareaProps>;

export const Primary: Story = {
  args: {},
};

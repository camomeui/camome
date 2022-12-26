import type { Meta, StoryObj } from "@storybook/react";

import { FormControl } from "../FormControl";

import { TextInput, TextInputProps } from ".";

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  decorators: [
    (Story) => (
      <FormControl labelText="Label">
        <Story />
      </FormControl>
    ),
  ],
};
export default meta;
type Story = StoryObj<TextInputProps>;

export const Primary: Story = {
  args: {},
};

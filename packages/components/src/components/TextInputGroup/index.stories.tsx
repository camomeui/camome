import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

import type { Meta, StoryObj } from "@storybook/react";

import { FormControl } from "../FormControl";
import { Kbd } from "../Kbd";
import { TextInput } from "../TextInput";

import { TextInputGroup, TextInputGroupProps } from ".";

const meta: Meta<typeof TextInputGroup> = {
  component: TextInputGroup,
  decorators: [
    (Story) => (
      <FormControl labelText="Label">
        <Story />
      </FormControl>
    ),
  ],
};
export default meta;
type Story = StoryObj<TextInputGroupProps>;

export const Primary: Story = {
  args: {
    input: <TextInput type="search" size="md" placeholder="Search" />,
    leftDecorator: (
      <MagnifyingGlassIcon
        stroke-width="2.5"
        style={{ color: "var(--cmm-color-gray-300)" }}
      />
    ),
    rightDecorator: (
      <div
        style={{
          display: "flex",
          fontSize: "0.9rem",
        }}
      >
        <Kbd>⌘ + K</Kbd>
      </div>
    ),
    cssVariables: {
      "--TextInput-left-decor-width": "2.5rem",
      "--TextInput-right-decor-width": "4.5rem",
    },
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import { FormControl } from "../FormControl";

import { Textarea, TextareaProps } from ".";

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<TextareaProps>;

export const Primary: Story = {
  args: {
    placeholder: "Type something...",
  },
};
export const Required: Story = {
  render: () => (
    <FormControl labelText="Name">
      <Textarea rows={3} required placeholder="Type something..." />
    </FormControl>
  ),
};
export const HelperText: Story = {
  render: () => (
    <FormControl labelText="Name" helperText="Supplementary text">
      <Textarea rows={3} placeholder="Type something..." />
    </FormControl>
  ),
};
export const Error: Story = {
  render: () => (
    <FormControl labelText="Message" error="Something is wrong">
      <Textarea rows={3} placeholder="Type something..." />
    </FormControl>
  ),
};
export const Disabled: Story = {
  render: () => (
    <FormControl labelText="Label">
      <Textarea rows={3} disabled placeholder="You can't type..." />
    </FormControl>
  ),
};

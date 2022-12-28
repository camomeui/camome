import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

import type { Meta, StoryObj } from "@storybook/react";

import {
  FormControl,
  Kbd,
  TextInput,
  TextInputGroup,
  TextInputProps,
} from "@camome/components";

import styles from "./index.stories.module.scss";

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<TextInputProps>;

export const Default: Story = {
  args: {
    placeholder: "John Doe",
  },
};
export const Size: Story = {
  render: () => (
    <div className={styles.size__container}>
      <FormControl labelText="Small">
        <TextInput size="sm" />
      </FormControl>
      <FormControl labelText="Medium">
        <TextInput size="md" />
      </FormControl>
      <FormControl labelText="Large">
        <TextInput size="lg" />
      </FormControl>
    </div>
  ),
};
export const Required: Story = {
  render: () => (
    <FormControl labelText="Name">
      <TextInput placeholder="John Doe" required />
    </FormControl>
  ),
};
export const HelperText: Story = {
  render: () => (
    <FormControl labelText="Name" helperText="Supplementary text">
      <TextInput placeholder="John Doe" />
    </FormControl>
  ),
};
export const Error: Story = {
  render: () => (
    <div className={styles.error__container}>
      <FormControl labelText="Name" error={true}>
        <TextInput placeholder="John Doe" />
      </FormControl>
      <FormControl labelText="Name" error="Something is wrong">
        <TextInput placeholder="John Doe" />
      </FormControl>
    </div>
  ),
};
export const Disabled: Story = {
  render: () => (
    <FormControl labelText="Label">
      <TextInput disabled placeholder="This field is disabled" />
    </FormControl>
  ),
};
export const Group: Story = {
  render: () => (
    <TextInputGroup
      input={<TextInput type="search" size="md" placeholder="Search" />}
      leftDecorator={
        <MagnifyingGlassIcon
          stroke-width="2.5"
          style={{ color: "var(--cmm-color-gray-300)" }}
        />
      }
      rightDecorator={
        <div
          style={{
            display: "flex",
            fontSize: "0.9rem",
          }}
        >
          <Kbd>⌘ + K</Kbd>
        </div>
      }
      className={styles.group}
    />
  ),
};

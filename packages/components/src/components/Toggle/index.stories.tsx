import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

import type { Meta, StoryObj } from "@storybook/react";

import { FormControl } from "../FormControl";

import { Toggle, ToggleProps } from ".";

import styles from "./index.stories.module.scss";

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<ToggleProps>;

export const Primary: Story = {
  args: {
    onLabel: "ON",
    offLabel: "OFF",
  },
};

export const Size: Story = {
  render: () => (
    <div className={styles.size__container}>
      <Toggle size="sm" onLabel="ON" offLabel="OFF" />
      <Toggle size="md" onLabel="ON" offLabel="OFF" />
      <Toggle size="lg" onLabel="ON" offLabel="OFF" />
    </div>
  ),
};

export const WithFormControl: Story = {
  render: () => (
    <FormControl
      labelText="Label"
      helperText="Helper text"
      error="Error text"
      direction="horizontal-reverse"
    >
      <Toggle size="md" onLabel="ON" offLabel="OFF" required />
    </FormControl>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Toggle
      size="lg"
      onLabel={<SunIcon width="1.2rem" height="1.2rem" stroke-width={2.5} />}
      offLabel={<MoonIcon width="1.2rem" height="1.2rem" stroke-width={2.5} />}
    />
  ),
};

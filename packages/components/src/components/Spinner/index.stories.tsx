import type { Meta, StoryObj } from "@storybook/react";

import { Spinner, SpinnerProps } from ".";

import styles from "./index.stories.module.scss";

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<SpinnerProps>;

export const Default: Story = {};

export const Size: Story = {
  render: () => (
    <div className={styles.size__container}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
};

import { BellAlertIcon } from "@heroicons/react/24/outline";

import type { Meta, StoryObj } from "@storybook/react";

import { IconButton, IconButtonProps } from "@camome/components/IconButton";
import { Spinner } from "@camome/components/Spinner";

import styles from "./index.stories.module.scss";

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<IconButtonProps>;

export const Primary: Story = {
  args: {
    children: <BellAlertIcon />,
  },
};

export const Size: Story = {
  render: () => (
    <div className={styles.size__container}>
      <IconButton aria-label="bell" size="sm">
        <BellAlertIcon />
      </IconButton>
      <IconButton aria-label="bell" size="md">
        <BellAlertIcon />
      </IconButton>
      <IconButton aria-label="bell" size="lg">
        <BellAlertIcon />
      </IconButton>
    </div>
  ),
};

export const Variant: Story = {
  render: () => (
    <div className={styles.size__container}>
      <IconButton aria-label="bell" variant="solid">
        <BellAlertIcon />
      </IconButton>
      <IconButton aria-label="bell" variant="subtle">
        <BellAlertIcon />
      </IconButton>
      <IconButton aria-label="bell" variant="outline">
        <BellAlertIcon />
      </IconButton>
      <IconButton aria-label="bell" variant="ghost">
        <BellAlertIcon />
      </IconButton>
    </div>
  ),
};

export const ColorScheme: Story = {
  render: () => (
    <div className={styles["color-scheme__container"]}>
      <IconButton aria-label="bell" variant="solid" colorScheme="primary">
        <BellAlertIcon />
      </IconButton>
      <IconButton aria-label="bell" variant="solid" colorScheme="secondary">
        <BellAlertIcon />
      </IconButton>
      <IconButton aria-label="bell" variant="solid" colorScheme="info">
        <BellAlertIcon />
      </IconButton>
      <IconButton aria-label="bell" variant="solid" colorScheme="success">
        <BellAlertIcon />
      </IconButton>
      <IconButton aria-label="bell" variant="solid" colorScheme="warn">
        <BellAlertIcon />
      </IconButton>
      <IconButton aria-label="bell" variant="solid" colorScheme="danger">
        <BellAlertIcon />
      </IconButton>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className={styles["color-scheme__container"]}>
      <IconButton aria-label="bell" variant="solid" disabled>
        <BellAlertIcon />
      </IconButton>
      <IconButton aria-label="bell" variant="subtle" disabled>
        <BellAlertIcon />
      </IconButton>
      <IconButton aria-label="bell" variant="outline" disabled>
        <BellAlertIcon />
      </IconButton>
      <IconButton aria-label="bell" variant="ghost" disabled>
        <BellAlertIcon />
      </IconButton>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <IconButton aria-label="bell" disabled>
      <Spinner size="sm" />
    </IconButton>
  ),
};

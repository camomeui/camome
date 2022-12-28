import { BoltIcon } from "@heroicons/react/24/outline";

import type { Meta, StoryObj } from "@storybook/react";

import { Avatar, AvatarProps } from ".";

import styles from "./index.stories.module.scss";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<AvatarProps>;

export const Default: Story = {
  args: {
    src: "/avatar-1.jpg",
  },
};

export const Content: Story = {
  render: () => (
    <div className={styles.content__container}>
      <Avatar src="/avatar-2.jpg" />
      <Avatar>MT</Avatar>
      <Avatar>
        <BoltIcon />
      </Avatar>
      <Avatar />
    </div>
  ),
};

export const Size: Story = {
  render: () => (
    <div className={styles.size__container}>
      <Avatar size="sm" src="/avatar-2.jpg" />
      <Avatar size="md" src="/avatar-2.jpg" />
      <Avatar size="lg" src="/avatar-2.jpg" />
      <Avatar size="sm" children="AX" />
      <Avatar size="md" children="AX" />
      <Avatar size="lg" children="AX" />
      <Avatar size="sm" />
      <Avatar size="md" />
      <Avatar size="lg" />
    </div>
  ),
};

export const Variant: Story = {
  render: () => (
    <div className={styles.content__container}>
      <Avatar variant="solid" />
      <Avatar variant="subtle" />
      <Avatar variant="outline" />
      <Avatar variant="ghost" />
    </div>
  ),
};

export const ColorScheme: Story = {
  render: () => (
    <div className={styles.content__container}>
      <Avatar colorScheme="primary" />
      <Avatar colorScheme="secondary" />
      <Avatar colorScheme="info" />
      <Avatar colorScheme="success" />
      <Avatar colorScheme="warn" />
      <Avatar colorScheme="danger" />
    </div>
  ),
};

export const Clickable: Story = {
  render: () => (
    <div className={styles.clickable__container}>
      <Avatar component="a" href="#" />
      <Avatar
        component="button"
        variant="solid"
        onClick={() => void alert("You clicked successfully!")}
      />
    </div>
  ),
};

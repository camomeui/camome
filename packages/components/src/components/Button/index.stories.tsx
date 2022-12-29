import {
  ChatBubbleLeftEllipsisIcon,
  ArrowPathIcon,
  CloudArrowDownIcon,
  PaperAirplaneIcon,
  HeartIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonProps } from "@camome/components/Button";
import { Spinner } from "@camome/components/Spinner";

import styles from "./index.stories.module.scss";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};

export const Size: Story = {
  render: () => (
    <div className={styles.size__container}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const Variant: Story = {
  render: () => (
    <div className={styles.variant__container}>
      <Button variant="solid">Solid</Button>
      <Button variant="subtle">Subtle</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};

export const ColorScheme: Story = {
  render: () => (
    <div className={styles["color-scheme__container"]}>
      <Button variant="solid" colorScheme="primary">
        Primary
      </Button>
      <Button variant="solid" colorScheme="secondary">
        Secondary
      </Button>
      <Button variant="solid" colorScheme="info">
        Info
      </Button>
      <Button variant="solid" colorScheme="success">
        Success
      </Button>
      <Button variant="solid" colorScheme="warn">
        Warn
      </Button>
      <Button variant="solid" colorScheme="danger">
        Danger
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className={styles["color-scheme__container"]}>
      <Button variant="solid" disabled>
        Solid
      </Button>
      <Button variant="subtle" disabled>
        Subtle
      </Button>
      <Button variant="outline" disabled>
        Outline
      </Button>
      <Button variant="ghost" disabled>
        Ghost
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <Button disabled leftIcon={<Spinner size="sm" />}>
      Saving...
    </Button>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className={styles["with-icon__container"]}>
      <Button
        leftIcon={<ArrowPathIcon stroke-width="2.25" />}
        size="sm"
        variant="outline"
      >
        Auto-sync
      </Button>
      <Button
        rightIcon={<PaperAirplaneIcon stroke-width="2.25" />}
        size="sm"
        variant="ghost"
      >
        Send
      </Button>

      <Button
        leftIcon={<CloudArrowDownIcon stroke-width="2.25" />}
        variant="subtle"
      >
        Download
      </Button>
      <Button rightIcon={<ChatBubbleLeftEllipsisIcon stroke-width="2.5" />}>
        Chat with us
      </Button>

      <Button
        leftIcon={<HeartIcon stroke-width="2.25" />}
        size="lg"
        variant="ghost"
        colorScheme="success"
      >
        Like
      </Button>
      <Button
        rightIcon={<TrashIcon stroke-width="2" />}
        size="lg"
        colorScheme="danger"
      >
        Remove
      </Button>
    </div>
  ),
};

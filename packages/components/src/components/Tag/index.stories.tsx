import { LinkIcon, WifiIcon, XMarkIcon } from "@heroicons/react/24/outline";

import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "@camome/components/Avatar";
import { IconButton } from "@camome/components/IconButton";
import { Tag, TagProps } from "@camome/components/Tag";

import styles from "./index.stories.module.scss";

const meta: Meta<typeof Tag> = {
  component: Tag,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<TagProps>;

export const Default: Story = {
  args: {
    children: "Tag",
  },
};

export const Variant: Story = {
  render: () => {
    return (
      <div className={styles.container}>
        <Tag variant="solid">Solid</Tag>
        <Tag variant="subtle">Subtle</Tag>
        <Tag variant="outline">Outline</Tag>
        <Tag variant="ghost">Ghost</Tag>
      </div>
    );
  },
};

export const Size: Story = {
  render: () => {
    return (
      <div className={styles.container}>
        <Tag size="sm">Small</Tag>
        <Tag size="md">Medium</Tag>
        <Tag size="lg">Large</Tag>
      </div>
    );
  },
};

export const ColorScheme: Story = {
  render: () => {
    return (
      <div className={styles.container}>
        <Tag colorScheme="primary">Primary</Tag>
        <Tag colorScheme="secondary">Secondary</Tag>
        <Tag colorScheme="info">Info</Tag>
        <Tag colorScheme="success">Success</Tag>
        <Tag colorScheme="warn">Warn</Tag>
        <Tag colorScheme="danger">Danger</Tag>
      </div>
    );
  },
};

export const Decorators: Story = {
  render: () => {
    return (
      <div className={styles.container}>
        <Tag
          component="a"
          href="#"
          size="md"
          startDecorator={<LinkIcon stroke-width="2.5" />}
        >
          Website
        </Tag>
        <Tag
          size="md"
          variant="solid"
          startDecorator={<WifiIcon stroke-width="2.2" />}
        >
          Online
        </Tag>
        <Tag
          size="md"
          colorScheme="success"
          endDecorator={
            <IconButton
              variant="ghost"
              colorScheme="success"
              aria-label="Delete"
            >
              <XMarkIcon stroke-width="2" />
            </IconButton>
          }
          className={styles["with-close"]}
        >
          Next.js
        </Tag>
        <Tag
          size="md"
          startDecorator={
            <Avatar size="sm" src="https://i.imgur.com/isPfQ2E.jpg" alt="Alt" />
          }
          className={styles["with-avatar"]}
        >
          John Doe
        </Tag>
      </div>
    );
  },
};

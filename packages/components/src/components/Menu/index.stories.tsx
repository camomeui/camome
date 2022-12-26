import {
  PencilSquareIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

import type { Meta, StoryObj } from "@storybook/react";

import { Menu } from ".";

const meta: Meta<typeof Menu> = {
  component: Menu,
};
export default meta;
type Story = StoryObj;

const category1 = [
  {
    label: "Edit",
    icon: <PencilSquareIcon />,
  },
  {
    label: "Duplicate",
    icon: <Square2StackIcon />,
  },
];

const category2 = [
  {
    label: "Delete",
    icon: <TrashIcon />,
    "--font-color": "var(--cmm-color-danger-600)",
    "--icon-color": "var(--cmm-color-danger-600)",
    "--bg-hover": "var(--cmm-color-danger-50)",
  },
];

export const Primary: Story = {
  render: () => (
    <Menu>
      <Menu.Label>Editing</Menu.Label>
      {category1.map((item) => (
        <Menu.Item key={item.label}>
          {item.icon}
          {item.label}
        </Menu.Item>
      ))}
      <Menu.Divider />
      <Menu.Label>Danger</Menu.Label>
      {category2.map(({ label, icon }) => (
        <Menu.Item key={label}>
          {icon}
          {label}
        </Menu.Item>
      ))}
    </Menu>
  ),
};

import type { Meta, StoryObj } from "@storybook/react";

import { Tab } from ".";

const meta: Meta<typeof Tab> = {
  component: Tab,
};
export default meta;
type Story = StoryObj;

const items = [
  {
    id: 1,
    label: "React",
    panel: "React is an awesome framework",
  },
  {
    id: 2,
    label: "Vue",
    panel: "Vue is an awesome framework",
  },
  {
    id: 3,
    label: "Svelte",
    panel: "Svelte is an awesome framework",
  },
];

export const Primary: Story = {
  render: () => (
    <Tab.Group>
      <Tab.List>
        {items.map((item) => (
          <Tab key={item.id} active={item.id === 1}>
            {item.label}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panel>{items[0].panel}</Tab.Panel>
    </Tab.Group>
  ),
};

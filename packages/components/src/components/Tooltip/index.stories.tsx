import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@camome/components/Button";
import { Tooltip, TooltipProps } from "@camome/components/Tooltip";

import styles from "./index.stories.module.scss";

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ display: "grid", placeContent: "center", height: "6rem" }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<TooltipProps>;

export const Default: Story = {
  args: {
    label: "This is a tooltip",
    children: <Button size="sm">Hover or focus me</Button>,
    placement: "top",
  },
};

export const Placement: Story = {
  render: () => (
    <div className={styles.placement__container}>
      <Tooltip label="Top" placement="top">
        <Button size="sm">Top</Button>
      </Tooltip>
      <Tooltip label="Bottom" placement="bottom">
        <Button size="sm">Bottom</Button>
      </Tooltip>
    </div>
  ),
};

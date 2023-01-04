import type { Meta } from "@storybook/react";

import { Tooltip } from "@camome/components/Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
};
export default meta;

export { default as Default } from "./Default";
export { default as Placement } from "./Placement";

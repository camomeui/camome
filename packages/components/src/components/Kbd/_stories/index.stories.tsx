import type { Meta } from "@storybook/react";

import { Kbd } from "@camome/components/Kbd";

const meta: Meta<typeof Kbd> = {
  title: "components/Kbd",
  component: Kbd,
};
export default meta;

export { default as Default } from "./Default";
export { default as Size } from "./Size";

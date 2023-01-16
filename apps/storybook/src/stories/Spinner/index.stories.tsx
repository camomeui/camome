import type { Meta } from "@storybook/react";

import { Spinner } from "@camome/core";

const meta: Meta<typeof Spinner> = {
  title: "components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
};
export default meta;

export { default as Default } from "./Default";
export { default as Size } from "./Size";

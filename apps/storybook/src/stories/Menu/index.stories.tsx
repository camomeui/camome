import type { Meta } from "@storybook/react";

import { Menu } from "@camome/core/Menu";

const meta: Meta<typeof Menu> = {
  title: "components/Menu",
  component: Menu,
};
export default meta;

export { default as Default } from "./Default";
export { default as WithHeadlessUI } from "./WithHeadlessUI";

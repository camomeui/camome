import type { Meta } from "@storybook/react";

import { Tab } from "@camome/components/Tab";

const meta: Meta<typeof Tab> = {
  title: "components/Tab",
  component: Tab,
};
export default meta;

export { default as Default } from "./Default";
export { default as WithHeadlessUI } from "./WithHeadlessUI";

import type { Meta } from "@storybook/react";

import { Accordion } from "@camome/core/Accordion";

const meta: Meta<typeof Accordion> = {
  title: "components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
};
export default meta;

export { default as Default } from "./Default";

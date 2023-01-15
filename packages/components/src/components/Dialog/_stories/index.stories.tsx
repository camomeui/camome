import type { Meta } from "@storybook/react";

import { Dialog } from "@camome/components/Dialog";

const meta: Meta<typeof Dialog> = {
  title: "components/Dialog",
  component: Dialog,
};
export default meta;

export { default as Default } from "./Default";
export { default as WithHeadlessUI } from "./WithHeadlessUI";

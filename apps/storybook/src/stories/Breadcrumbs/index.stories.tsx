import type { Meta } from "@storybook/react";

import { Breadcrumbs } from "@camome/core/Breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
  title: "components/Breadcrumbs",
  component: Breadcrumbs,
};
export default meta;

export { default as Default } from "./Default";

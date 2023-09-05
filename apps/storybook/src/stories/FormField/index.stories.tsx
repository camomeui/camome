import type { Meta } from "@storybook/react";

import { FormField } from "@camome/core/FormField";

const meta: Meta<typeof FormField> = {
  title: "components/FormField",
  component: FormField,
};
export default meta;

export { default as Default } from "./Default";

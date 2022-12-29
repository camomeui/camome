import type { Meta, StoryObj } from "@storybook/react";

import { Breadcrumbs, BreadcrumbsProps } from "@camome/components/Breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
};
export default meta;
type Story = StoryObj<BreadcrumbsProps>;

export const Primary: Story = {
  args: {
    paths: [
      {
        href: "#home",
        label: "Home",
      },
      {
        href: "#category",
        label: "Category",
      },
      {
        label: "Product",
      },
    ],
  },
};

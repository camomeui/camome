import type { Meta, StoryObj } from "@storybook/react";

import { Accordion, AccordionProps } from ".";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "32rem" }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<AccordionProps>;

export const Primary: Story = {
  args: {
    items: [
      {
        summary: "Ad ullamco occaecat aliquip nisi?",
        details:
          "Reprehenderit exercitation proident et laboris dolor ex nostrud proident enim in consectetur magna aliqua.",
      },
      {
        summary:
          "Aliqua labore dolore exercitation esse anim consectetur eu aliquip?",
        details: "Officia minim est fugiat dolore.",
      },
      {
        summary:
          "Pariatur laboris do ut eu mollit ea adipisicing est in laborum enim sint commodo dolore?",
        details:
          "Qui ex labore proident et voluptate ut aliquip. Labore sit eu deserunt tempor consequat.",
      },
    ],
  },
};

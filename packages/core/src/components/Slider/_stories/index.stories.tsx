import type { Meta } from "@storybook/react";

import { Slider } from "@camome/core/Slider";

const meta: Meta<typeof Slider> = {
  title: "components/Slider",
  component: Slider,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "20rem" }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

export { default as Default } from "./Default";
export { default as Size } from "./Size";

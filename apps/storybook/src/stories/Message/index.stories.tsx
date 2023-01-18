import type { Meta } from "@storybook/react";

import { Message } from "@camome/core/Message";

const meta: Meta<typeof Message> = {
  title: "components/Message",
  component: Message,
  argTypes: {
    title: {
      type: "string",
    },
  },
};
export default meta;

export { default as Default } from "./Default";
export { default as Variant } from "./Variant";
export { default as Alert } from "./Alert";

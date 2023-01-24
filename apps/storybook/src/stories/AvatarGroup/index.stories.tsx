import type { Meta } from "@storybook/react";

import { Avatar } from "@camome/core/Avatar";

const meta: Meta<typeof Avatar> = {
  title: "components/AvatarGroup",
  component: Avatar,
};
export default meta;

export { default as Default } from "./Default";

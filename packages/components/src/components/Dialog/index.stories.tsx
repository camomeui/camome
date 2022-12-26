import type { Meta, StoryObj } from "@storybook/react";

import { Dialog } from ".";

const meta: Meta<typeof Dialog> = {
  component: Dialog,
};
export default meta;
type Story = StoryObj;

export const Primary: Story = {
  render: () => (
    <Dialog>
      <Dialog.Backdrop />
      <Dialog.PanelWrapper>
        <Dialog.Panel>
          <Dialog.Title>This is a title</Dialog.Title>
          <Dialog.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </Dialog.Content>
        </Dialog.Panel>
      </Dialog.PanelWrapper>
    </Dialog>
  ),
};

import { Dialog } from "@camome/core";

export default function Default() {
  return (
    <Dialog>
      <Dialog.Backdrop />
      <Dialog.PanelWrapper>
        <Dialog.Panel>
          <Dialog.Close />
          <Dialog.Title>This is a title</Dialog.Title>
          <Dialog.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </Dialog.Content>
        </Dialog.Panel>
      </Dialog.PanelWrapper>
    </Dialog>
  );
}

Default.parameters = {
  docs: {
    inlineStories: false,
    iframeHeight: 300,
  },
  layout: "padded",
};

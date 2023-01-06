import { Dialog as HeadlessDialog } from "@headlessui/react";
import React from "react";

import { Button } from "@camome/components/Button";
import { dialogClassNames, Dialog } from "@camome/components/Dialog";

export default function WithHeadlessUI() {
  const [open, setOpen] = React.useState(false);
  const { container, backdrop, panelWrapper, panel, title, content } =
    dialogClassNames;

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <HeadlessDialog
        as="div"
        open={open}
        onClose={setOpen}
        className={container}
      >
        <div className={backdrop} />
        <div className={panelWrapper}>
          <HeadlessDialog.Panel className={panel}>
            <Dialog.Close onClick={() => setOpen(false)} />
            <HeadlessDialog.Title className={title}>
              Are you sure?
            </HeadlessDialog.Title>
            <div className={content}>
              Ea aliqua ad et dolore est.Dolore ipsum consequat qui incididunt
              cupidatat.
            </div>
            <div>
              <Button size="sm" onClick={() => setOpen(false)}>
                Submit
              </Button>
            </div>
          </HeadlessDialog.Panel>
        </div>
      </HeadlessDialog>
    </>
  );
}

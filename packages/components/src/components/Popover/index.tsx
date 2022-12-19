import { Popover as HeadlessPopover } from "@headlessui/react";

import styles from "./styles.module.scss";

export type PopoverProps = {
  button: React.ReactNode;
  content: ({ close }: { close: () => void }) => React.ReactNode;
};

export function Popover({ button, content }: PopoverProps) {
  return (
    <HeadlessPopover className={styles.wrapper}>
      {({ close }) => (
        <>
          <HeadlessPopover.Button>{button}</HeadlessPopover.Button>
          <HeadlessPopover.Panel className={styles.panel}>
            <div className={styles.panel__arrow} />
            <div className={styles.panel__content}>{content({ close })}</div>
          </HeadlessPopover.Panel>
        </>
      )}
    </HeadlessPopover>
  );
}

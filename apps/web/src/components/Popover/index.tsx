import { Popover as HeadlessPopover } from "@headlessui/react";

import styles from "./styles.module.scss";

type Props = {
  button: React.ReactNode;
  content: ({ close }: { close: () => void }) => React.ReactNode;
};

export default function Popover({ button, content }: Props) {
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

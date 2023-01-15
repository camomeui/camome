import { BellAlertIcon } from "@heroicons/react/24/outline";

import { IconButton } from "@camome/core";

import styles from "./Disabled.module.scss";

export default function Disabled() {
  return (
    <div className={styles.container}>
      <IconButton variant="solid" aria-label="bell" disabled>
        <BellAlertIcon />
      </IconButton>
      <IconButton variant="soft" aria-label="bell" disabled>
        <BellAlertIcon />
      </IconButton>
      <IconButton variant="outline" aria-label="bell" disabled>
        <BellAlertIcon />
      </IconButton>
      <IconButton variant="ghost" aria-label="bell" disabled>
        <BellAlertIcon />
      </IconButton>
    </div>
  );
}
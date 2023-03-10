import BellAlertIcon from "@heroicons/react/24/outline/BellAlertIcon";

import { IconButton } from "@camome/core/IconButton";

import styles from "./Size.module.scss";

export default function Size() {
  return (
    <div className={styles.container}>
      <IconButton size="sm" aria-label="bell">
        <BellAlertIcon />
      </IconButton>
      <IconButton size="md" aria-label="bell">
        <BellAlertIcon />
      </IconButton>
      <IconButton size="lg" aria-label="bell">
        <BellAlertIcon />
      </IconButton>
    </div>
  );
}

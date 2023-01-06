import { BellAlertIcon } from "@heroicons/react/24/outline";

import { IconButton } from "@camome/components/IconButton";

import styles from "./ColorScheme.module.scss";

export default function ColorScheme() {
  return (
    <div className={styles.container}>
      <IconButton colorScheme="primary" aria-label="bell">
        <BellAlertIcon />
      </IconButton>
      <IconButton colorScheme="secondary" aria-label="bell">
        <BellAlertIcon />
      </IconButton>
      <IconButton colorScheme="info" aria-label="bell">
        <BellAlertIcon />
      </IconButton>
      <IconButton colorScheme="success" aria-label="bell">
        <BellAlertIcon />
      </IconButton>
      <IconButton colorScheme="warn" aria-label="bell">
        <BellAlertIcon />
      </IconButton>
      <IconButton colorScheme="danger" aria-label="bell">
        <BellAlertIcon />
      </IconButton>
    </div>
  );
}

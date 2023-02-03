import BellAlertIcon from "@heroicons/react/24/outline/BellAlertIcon";

import { IconButton } from "@camome/core/IconButton";

import styles from "./Variant.module.scss";

export default function Variant() {
  return (
    <div className={styles.container}>
      <IconButton variant="solid" aria-label="bell">
        <BellAlertIcon />
      </IconButton>
      <IconButton variant="soft" aria-label="bell">
        <BellAlertIcon />
      </IconButton>
      <IconButton variant="outline" aria-label="bell">
        <BellAlertIcon />
      </IconButton>
      <IconButton variant="ghost" aria-label="bell">
        <BellAlertIcon />
      </IconButton>
    </div>
  );
}

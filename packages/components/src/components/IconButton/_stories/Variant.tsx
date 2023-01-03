import { BellAlertIcon } from "@heroicons/react/24/outline";

import { IconButton } from "@camome/components/IconButton";

import styles from "./Variant.module.scss";

export default function Variant() {
  return (
    <div className={styles.container}>
      <IconButton variant="solid" aria-label="bell">
        <BellAlertIcon />
      </IconButton>
      <IconButton variant="subtle" aria-label="bell">
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

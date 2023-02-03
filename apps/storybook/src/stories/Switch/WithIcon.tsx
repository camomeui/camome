import MoonIcon from "@heroicons/react/24/outline/MoonIcon";
import SunIcon from "@heroicons/react/24/outline/SunIcon";

import { Switch } from "@camome/core/Switch";

import styles from "./styles.module.scss";

export default function Default() {
  return (
    <Switch
      size="lg"
      on={<SunIcon width="1.2rem" height="1.2rem" strokeWidth={2.5} />}
      off={<MoonIcon width="1.2rem" height="1.2rem" strokeWidth={2.5} />}
      aria-label="Switch"
      className={styles.withIcon}
    />
  );
}

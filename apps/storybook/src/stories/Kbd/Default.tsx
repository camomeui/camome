import { Kbd } from "@camome/core/Kbd";

import styles from "./Default.module.scss";

export default function Default() {
  return (
    <div className={styles.container}>
      <Kbd>⌘</Kbd>
      <span>+</span>
      <Kbd>K</Kbd>
    </div>
  );
}

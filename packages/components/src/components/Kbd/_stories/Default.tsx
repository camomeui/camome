import { Kbd } from "@camome/components/Kbd";

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

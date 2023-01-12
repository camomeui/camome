import { Avatar } from "@camome/components/Avatar";

import styles from "./styles.module.scss";

export default function ColorScheme() {
  return (
    <div className={styles.container}>
      <Avatar colorScheme="primary" />
      <Avatar colorScheme="neutral" />
      <Avatar colorScheme="info" />
      <Avatar colorScheme="success" />
      <Avatar colorScheme="warn" />
      <Avatar colorScheme="danger" />
    </div>
  );
}

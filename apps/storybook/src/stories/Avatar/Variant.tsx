import { Avatar } from "@camome/core";

import styles from "./styles.module.scss";

export default function Variant() {
  return (
    <div className={styles.container}>
      <Avatar variant="solid" />
      <Avatar variant="soft" />
      <Avatar variant="outline" />
      <Avatar variant="ghost" />
    </div>
  );
}

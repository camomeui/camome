import { Avatar } from "@camome/components/Avatar";

import styles from "./styles.module.scss";

export default function Variant() {
  return (
    <div className={styles.container}>
      <Avatar variant="solid" />
      <Avatar variant="subtle" />
      <Avatar variant="outline" />
      <Avatar variant="ghost" />
    </div>
  );
}

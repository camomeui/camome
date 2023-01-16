import { Tag } from "@camome/core";

import styles from "./styles.module.scss";

export default function Size() {
  return (
    <div className={styles.container}>
      <Tag size="sm">Small</Tag>
      <Tag size="md">Medium</Tag>
      <Tag size="lg">Large</Tag>
    </div>
  );
}

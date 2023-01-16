import { Tag } from "@camome/core";

import styles from "./styles.module.scss";

export default function Variant() {
  return (
    <div className={styles.container}>
      <Tag variant="solid">Solid</Tag>
      <Tag variant="soft">Subtle</Tag>
      <Tag variant="outline">Outline</Tag>
      <Tag variant="ghost">Ghost</Tag>
    </div>
  );
}

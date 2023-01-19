import { Tag } from "@camome/core/Tag";

import styles from "./styles.module.scss";

export default function Variant() {
  return (
    <div className={styles.container}>
      <Tag variant="solid">Solid</Tag>
      <Tag variant="soft">Soft</Tag>
      <Tag variant="outline">Outline</Tag>
      <Tag variant="ghost">Ghost</Tag>
    </div>
  );
}

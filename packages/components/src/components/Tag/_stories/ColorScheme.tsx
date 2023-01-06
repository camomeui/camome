import { Tag } from "@camome/components/Tag";

import styles from "./styles.module.scss";

export default function ColorScheme() {
  return (
    <div className={styles.container}>
      <Tag colorScheme="primary">Primary</Tag>
      <Tag colorScheme="secondary">Secondary</Tag>
      <Tag colorScheme="info">Info</Tag>
      <Tag colorScheme="success">Success</Tag>
      <Tag colorScheme="warn">Warn</Tag>
      <Tag colorScheme="danger">Danger</Tag>
    </div>
  );
}

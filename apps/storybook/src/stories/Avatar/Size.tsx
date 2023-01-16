import { Avatar } from "@camome/core";

import styles from "./styles.module.scss";

export default function Size() {
  return (
    <div className={styles.size__container}>
      <Avatar size="sm" src="/demo/avatar-2.jpg" />
      <Avatar size="md" src="/demo/avatar-2.jpg" />
      <Avatar size="lg" src="/demo/avatar-2.jpg" />
      <Avatar size="sm" children="AX" />
      <Avatar size="md" children="AX" />
      <Avatar size="lg" children="AX" />
      <Avatar size="sm" />
      <Avatar size="md" />
      <Avatar size="lg" />
    </div>
  );
}

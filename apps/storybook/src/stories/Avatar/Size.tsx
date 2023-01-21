import { Avatar } from "@camome/core/Avatar";

import styles from "./styles.module.scss";

export default function Size() {
  return (
    <div className={styles.size__container}>
      <Avatar size="sm" src="/demo/avatar-2.jpg" alt="avatar" />
      <Avatar size="md" src="/demo/avatar-2.jpg" alt="avatar" />
      <Avatar size="lg" src="/demo/avatar-2.jpg" alt="avatar" />
      <Avatar size="sm" children="AX" />
      <Avatar size="md" children="AX" />
      <Avatar size="lg" children="AX" />
      <Avatar size="sm" alt="avatar" />
      <Avatar size="md" alt="avatar" />
      <Avatar size="lg" alt="avatar" />
    </div>
  );
}

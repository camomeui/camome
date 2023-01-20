import { BoltIcon } from "@heroicons/react/24/outline";

import { Avatar } from "@camome/core/Avatar";

import styles from "./styles.module.scss";

export default function Content() {
  return (
    <div className={styles.container}>
      <Avatar src="/demo/avatar-2.jpg" alt="avatar" />
      <Avatar>MT</Avatar>
      <Avatar>
        <BoltIcon />
      </Avatar>
      <Avatar />
    </div>
  );
}

import { BoltIcon } from "@heroicons/react/24/outline";

import { Avatar } from "@camome/components/Avatar";

import styles from "./styles.module.scss";

export default function Content() {
  return (
    <div className={styles.container}>
      <Avatar src="/assets/avatar-2.jpg" />
      <Avatar>MT</Avatar>
      <Avatar>
        <BoltIcon />
      </Avatar>
      <Avatar />
    </div>
  );
}

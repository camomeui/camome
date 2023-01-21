import { Avatar } from "@camome/core/Avatar";

import styles from "./styles.module.scss";

export default function ColorScheme() {
  return (
    <div className={styles.container}>
      <Avatar component="a" href="#" aria-label="User profile" />
      <Avatar
        component="button"
        variant="solid"
        onClick={() => void alert("You clicked successfully!")}
        aria-label="User profile"
      />
    </div>
  );
}

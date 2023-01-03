import { Avatar } from "@camome/components/Avatar";

import styles from "./styles.module.scss";

export default function ColorScheme() {
  return (
    <div className={styles.container}>
      <Avatar component="a" href="#" />
      <Avatar
        component="button"
        variant="solid"
        onClick={() => void alert("You clicked successfully!")}
      />
    </div>
  );
}

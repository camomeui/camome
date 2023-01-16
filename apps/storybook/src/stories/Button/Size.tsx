import { Button } from "@camome/core";

import styles from "./Size.module.scss";

export default function Size() {
  return (
    <div className={styles.container}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}

import { Button } from "@camome/core/Button";

import styles from "./ColorScheme.module.scss";

export default function ColorScheme() {
  return (
    <div className={styles.container}>
      <Button colorScheme="primary">Primary</Button>
      <Button colorScheme="neutral">Neutral</Button>
      <Button colorScheme="info">Info</Button>
      <Button colorScheme="success">Success</Button>
      <Button colorScheme="warn">Warn</Button>
      <Button colorScheme="danger">Danger</Button>
    </div>
  );
}

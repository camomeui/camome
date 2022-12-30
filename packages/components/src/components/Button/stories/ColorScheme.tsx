import { Button } from "@camome/components/Button";

import styles from "./ColorScheme.module.scss";

export default function ColorScheme() {
  return (
    <div className={styles.container}>
      <Button variant="solid" colorScheme="primary">
        Primary
      </Button>
      <Button variant="solid" colorScheme="secondary">
        Secondary
      </Button>
      <Button variant="solid" colorScheme="info">
        Info
      </Button>
      <Button variant="solid" colorScheme="success">
        Success
      </Button>
      <Button variant="solid" colorScheme="warn">
        Warn
      </Button>
      <Button variant="solid" colorScheme="danger">
        Danger
      </Button>
    </div>
  );
}

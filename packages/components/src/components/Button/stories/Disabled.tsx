import { Button } from "@camome/components/Button";

import styles from "./Disabled.module.scss";

export default function Disabled() {
  return (
    <div className={styles.container}>
      <Button variant="solid" disabled>
        Solid
      </Button>
      <Button variant="subtle" disabled>
        Subtle
      </Button>
      <Button variant="outline" disabled>
        Outline
      </Button>
      <Button variant="ghost" disabled>
        Ghost
      </Button>
    </div>
  );
}
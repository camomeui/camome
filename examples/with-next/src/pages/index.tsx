import { Button } from "@camome/core/Button";
import { Switch } from "@camome/core/Switch";

import styles from "./index.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <Button>Rounded</Button>
      <Switch />
    </main>
  );
}

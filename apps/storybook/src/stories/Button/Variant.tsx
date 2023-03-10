import { Button } from "@camome/core/Button";

import styles from "./Variant.module.scss";

export default function Variant() {
  return (
    <div className={styles.container}>
      <Button variant="solid">Solid</Button>
      <Button variant="soft">Soft</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  );
}

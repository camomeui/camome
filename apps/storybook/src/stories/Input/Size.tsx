import { Input } from "@camome/core/Input";

import styles from "./styles.module.scss";

export default function Size() {
  return (
    <div className={styles.size__container}>
      <Input label="Small" placeholder="John Doe" size="sm" />
      <Input label="Medium" placeholder="John Doe" size="md" />
      <Input label="Large" placeholder="John Doe" size="lg" />
    </div>
  );
}

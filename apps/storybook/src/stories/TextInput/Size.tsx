import { TextInput } from "@camome/core/TextInput";

import styles from "./styles.module.scss";

export default function Size() {
  return (
    <div className={styles.size__container}>
      <TextInput label="Small" placeholder="John Doe" size="sm" />
      <TextInput label="Medium" placeholder="John Doe" size="md" />
      <TextInput label="Large" placeholder="John Doe" size="lg" />
    </div>
  );
}

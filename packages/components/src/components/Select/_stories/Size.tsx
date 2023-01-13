import { Select } from "@camome/components/Select";

import styles from "./styles.module.scss";

export default function Size() {
  return (
    <div className={styles.size__container}>
      <Select label="Small" size="sm">
        <option value="small">Developer</option>
      </Select>
      <Select label="Medium" size="md">
        <option value="medium">Developer</option>
      </Select>
      <Select label="Large" size="lg">
        <option value="large">Developer</option>
      </Select>
    </div>
  );
}

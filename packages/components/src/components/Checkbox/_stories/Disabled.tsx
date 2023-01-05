import { Checkbox } from "@camome/components/Checkbox";

import styles from "./styles.module.scss";

export default function Disabled() {
  return (
    <div className={styles.disabled__container}>
      <Checkbox label="Checked" value="true" checked disabled />
      <Checkbox label="Not checked" value="true" disabled />
    </div>
  );
}

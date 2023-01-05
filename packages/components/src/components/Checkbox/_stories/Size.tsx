import { Checkbox } from "@camome/components/Checkbox";

import styles from "./styles.module.scss";

export default function Size() {
  return (
    <div className={styles.size__container}>
      <Checkbox
        label="Agree to our Privacy Policy"
        value="true"
        size="sm"
        id="size-sm"
      />
      <Checkbox
        label="Agree to our Privacy Policy"
        value="true"
        size="md"
        id="size-md"
      />
      <Checkbox
        label="Agree to our Privacy Policy"
        value="true"
        size="lg"
        id="size-lg"
      />
    </div>
  );
}

import { Checkbox } from "@camome/components/Checkbox";

import styles from "./styles.module.scss";

export default function Size() {
  return (
    <div className={styles.size__container}>
      <Checkbox
        labelText="Agree to our Privacy Policy"
        value="true"
        size="sm"
        id="size-sm"
      />
      <Checkbox
        labelText="Agree to our Privacy Policy"
        value="true"
        size="md"
        id="size-md"
      />
      <Checkbox
        labelText="Agree to our Privacy Policy"
        value="true"
        size="lg"
        id="size-lg"
      />
    </div>
  );
}

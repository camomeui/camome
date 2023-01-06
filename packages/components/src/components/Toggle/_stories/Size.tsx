import { FormField } from "@camome/components/FormField";
import { Toggle } from "@camome/components/Toggle";

import styles from "./styles.module.scss";

export default function Size() {
  return (
    <div className={styles.size__container}>
      <FormField label="Small">
        <Toggle size="sm" on="ON" off="OFF" />
      </FormField>
      <FormField label="Medium">
        <Toggle size="md" on="ON" off="OFF" />
      </FormField>
      <FormField label="Large">
        <Toggle size="lg" on="ON" off="OFF" />
      </FormField>
    </div>
  );
}

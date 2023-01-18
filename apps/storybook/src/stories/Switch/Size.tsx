import { FormField } from "@camome/core/FormField";
import { Switch } from "@camome/core/Switch";

import styles from "./styles.module.scss";

export default function Size() {
  return (
    <div className={styles.size__container}>
      <FormField label="Small">
        <Switch size="sm" on="ON" off="OFF" />
      </FormField>
      <FormField label="Medium">
        <Switch size="md" on="ON" off="OFF" />
      </FormField>
      <FormField label="Large">
        <Switch size="lg" on="ON" off="OFF" />
      </FormField>
    </div>
  );
}

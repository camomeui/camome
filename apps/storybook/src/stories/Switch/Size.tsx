import { FormField, Switch } from "@camome/core";

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

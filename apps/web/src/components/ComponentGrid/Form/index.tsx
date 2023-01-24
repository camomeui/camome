import React from "react";

import { Checkbox } from "@camome/core/Checkbox";
import { FormField } from "@camome/core/FormField";
import { Switch } from "@camome/core/Switch";
import { TextInput } from "@camome/core/TextInput";

import styles from "./styles.module.scss";

export default function Form() {
  return (
    <div className={styles.container}>
      <div className={styles.col2}>
        <TextInput label="First name" />
        <TextInput label="Last name" />
      </div>
      <div className={styles.col2}>
        <FormField label="Accept terms" custom>
          <div className={styles.switchField}>
            <Switch />
            <FormField.Label />
          </div>
        </FormField>
        <Checkbox label="Remember me" defaultChecked />
      </div>
    </div>
  );
}

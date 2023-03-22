import { Checkbox } from "@camome/core/Checkbox";
import { FormField } from "@camome/core/FormField";
import { Input } from "@camome/core/Input";
import { Switch } from "@camome/core/Switch";

import styles from "./styles.module.scss";

export default function Form() {
  return (
    <div className={styles.container}>
      <div className={styles.col2}>
        <Input label="First name" placeholder="John" />
        <Input label="Last name" placeholder="Doe" />
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

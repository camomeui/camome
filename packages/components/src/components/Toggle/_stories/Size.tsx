import { FormControl } from "@camome/components/FormControl";
import { Toggle } from "@camome/components/Toggle";

import styles from "./styles.module.scss";

export default function Size() {
  return (
    <div className={styles.size__container}>
      <FormControl labelText="Small" direction="horizontal-reverse">
        <Toggle size="sm" onLabel="ON" offLabel="OFF" />
      </FormControl>
      <FormControl labelText="Medium" direction="horizontal-reverse">
        <Toggle size="md" onLabel="ON" offLabel="OFF" />
      </FormControl>
      <FormControl labelText="Large" direction="horizontal-reverse">
        <Toggle size="lg" onLabel="ON" offLabel="OFF" />
      </FormControl>
    </div>
  );
}

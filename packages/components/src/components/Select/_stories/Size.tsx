import { FormControl } from "@camome/components/FormControl";
import { Select } from "@camome/components/Select";

import styles from "./styles.module.scss";

export default function Size() {
  return (
    <div className={styles.size__container}>
      <FormControl labelText="Small">
        <Select size="sm" id="size-sm">
          <option value="small">Developer</option>
        </Select>
      </FormControl>
      <FormControl labelText="Medium">
        <Select size="md" id="size-md">
          <option value="medium">Developer</option>
        </Select>
      </FormControl>
      <FormControl labelText="Large">
        <Select size="lg" id="size-lg">
          <option value="large">Developer</option>
        </Select>
      </FormControl>
    </div>
  );
}

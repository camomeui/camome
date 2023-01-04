import { FormControl } from "@camome/components/FormControl";
import { Select } from "@camome/components/Select";

export default function Fill() {
  return (
    <FormControl labelText="Job title" id="fill">
      <Select fill>
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
        <option value="sales">Sales</option>
      </Select>
    </FormControl>
  );
}

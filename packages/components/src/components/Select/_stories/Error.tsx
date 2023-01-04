import { FormControl } from "@camome/components/FormControl";
import { Select } from "@camome/components/Select";

export default function Error() {
  return (
    <FormControl labelText="Job title" error="Something is wrong" id="error">
      <Select>
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
        <option value="marketer">Marketer</option>
      </Select>
    </FormControl>
  );
}

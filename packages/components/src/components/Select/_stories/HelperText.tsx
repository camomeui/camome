import { FormControl } from "@camome/components/FormControl";
import { Select } from "@camome/components/Select";

export default function Error() {
  return (
    <FormControl
      labelText="Job title"
      helperText="Supplementary text"
      id="helper-text"
    >
      <Select>
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
        <option value="marketer">Marketer</option>
      </Select>
    </FormControl>
  );
}

import { FormField } from "@camome/components/FormField";
import { Select } from "@camome/components/Select";

export default function Description() {
  return (
    <FormField label="Job title" description="Description text">
      <Select>
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
        <option value="marketer">Marketer</option>
      </Select>
    </FormField>
  );
}

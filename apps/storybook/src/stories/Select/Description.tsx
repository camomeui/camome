import { FormField, Select } from "@camome/core";

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

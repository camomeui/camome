import { Select } from "@camome/components/Select";

export default function Error() {
  return (
    <Select label="Job title" error="Something is wrong" id="error">
      <option value="developer">Developer</option>
      <option value="designer">Designer</option>
      <option value="marketer">Marketer</option>
    </Select>
  );
}

import { Select } from "@camome/components/Select";

export default function Default() {
  return (
    <Select label="Job title" id="_default">
      <option value="developer">Developer</option>
      <option value="designer">Designer</option>
      <option value="sales">Sales</option>
    </Select>
  );
}

import { Select } from "@camome/core/Select";

export default function Default() {
  return (
    <Select label="Job title">
      <option value="developer">Developer</option>
      <option value="designer">Designer</option>
      <option value="sales">Sales</option>
    </Select>
  );
}

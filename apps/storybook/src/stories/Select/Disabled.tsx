import { Select } from "@camome/core";

export default function Disabled() {
  return (
    <Select label="Job title" disabled>
      <option value="developer">Developer</option>
      <option value="designer">Designer</option>
      <option value="sales">Sales</option>
    </Select>
  );
}

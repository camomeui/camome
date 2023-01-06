import { Select } from "@camome/components/Select";

export default function Disabled() {
  return (
    <Select label="Job title" disabled id="_disabled">
      <option value="developer">Developer</option>
      <option value="designer">Designer</option>
      <option value="sales">Sales</option>
    </Select>
  );
}

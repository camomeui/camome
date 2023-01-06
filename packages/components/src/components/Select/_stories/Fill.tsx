import { Select } from "@camome/components/Select";

export default function Fill() {
  return (
    <div style={{ minWidth: "30rem" }}>
      <Select label="Job title" fill id="_fill">
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
        <option value="sales">Sales</option>
      </Select>
    </div>
  );
}

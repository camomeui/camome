import { Radio, RadioGroup } from "@camome/core";

export default function Disabled() {
  return (
    <RadioGroup label="Disabled">
      <Radio label="Checked" value="true" checked disabled />
      <Radio label="Not checked" value="true" disabled />
    </RadioGroup>
  );
}

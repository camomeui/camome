import { Radio } from "@camome/core/Radio";
import { RadioGroup } from "@camome/core/RadioGroup";

export default function Disabled() {
  return (
    <RadioGroup label="Disabled">
      <Radio label="Checked" value="true" checked disabled />
      <Radio label="Not checked" value="true" disabled />
    </RadioGroup>
  );
}

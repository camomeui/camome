import { Radio } from "@camome/components/Radio";
import { RadioGroup } from "@camome/components/RadioGroup";

export default function Disabled() {
  return (
    <RadioGroup label="Disabled" id="_disabled">
      <Radio label="Checked" value="true" checked disabled id="_disabled-1" />
      <Radio label="Not checked" value="true" disabled id="_disabled-2" />
    </RadioGroup>
  );
}

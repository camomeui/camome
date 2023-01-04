import { Radio } from "@camome/components/Radio";
import { RadioGroup } from "@camome/components/RadioGroup";

export default function Disabled() {
  return (
    <RadioGroup labelText="Disabled" id="_disabled">
      <Radio
        labelText="Checked"
        value="true"
        checked
        disabled
        id="_disabled-1"
      />
      <Radio labelText="Not checked" value="true" disabled id="_disabled-2" />
    </RadioGroup>
  );
}

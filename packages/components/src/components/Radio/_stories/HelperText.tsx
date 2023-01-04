import { Radio } from "@camome/components/Radio";
import { RadioGroup } from "@camome/components/RadioGroup";

export default function HelperText() {
  return (
    <RadioGroup
      labelText="Gundam kids"
      helperText="Choose your favorite"
      error="This field is required"
      id="_helper"
    >
      <Radio
        labelText="Katz"
        name="gundam-kids-4"
        value="katz"
        defaultChecked
        id="_helper-1"
      />
      <Radio
        labelText="Letz"
        name="gundam-kids-4"
        value="letz"
        id="_helper-2"
      />
      <Radio
        labelText="Kikka"
        name="gundam-kids-4"
        value="kikka"
        id="_helper-3"
      />
    </RadioGroup>
  );
}

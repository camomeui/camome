import { Radio } from "@camome/components/Radio";
import { RadioGroup } from "@camome/components/RadioGroup";

export default function HelperText() {
  return (
    <RadioGroup
      label="Gundam kids"
      description="Choose your favorite"
      error="This field is required"
      id="_helper"
    >
      <Radio
        label="Katz"
        name="gundam-kids-4"
        value="katz"
        defaultChecked
        id="_helper-1"
      />
      <Radio label="Letz" name="gundam-kids-4" value="letz" id="_helper-2" />
      <Radio label="Kikka" name="gundam-kids-4" value="kikka" id="_helper-3" />
    </RadioGroup>
  );
}

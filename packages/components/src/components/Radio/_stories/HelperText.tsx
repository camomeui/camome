import { Radio } from "@camome/components/Radio";
import { RadioGroup } from "@camome/components/RadioGroup";

export default function HelperText() {
  return (
    <RadioGroup
      label="Gundam kids"
      description="Choose your favorite"
      error="This field is required"
    >
      <Radio label="Katz" name="gundam-kids-4" value="katz" defaultChecked />
      <Radio label="Letz" name="gundam-kids-4" value="letz" />
      <Radio label="Kikka" name="gundam-kids-4" value="kikka" />
    </RadioGroup>
  );
}

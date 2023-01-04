import { Radio } from "@camome/components/Radio";
import { RadioGroup } from "@camome/components/RadioGroup";

export default function Group() {
  return (
    <RadioGroup labelText="Gundam kids" aria-required id="_group">
      <Radio
        labelText="Katz"
        name="gundam-kids-1"
        value="katz"
        defaultChecked
        id="_group-1"
      />
      <Radio labelText="Letz" name="gundam-kids-1" value="letz" id="_group-2" />
      <Radio
        labelText="Kikka"
        name="gundam-kids-1"
        value="kikka"
        id="_group-3"
      />
    </RadioGroup>
  );
}

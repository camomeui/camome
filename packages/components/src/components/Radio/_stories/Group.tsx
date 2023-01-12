import { Radio } from "@camome/components/Radio";
import { RadioGroup } from "@camome/components/RadioGroup";

export default function Group() {
  return (
    <RadioGroup label="Gundam kids" aria-required id="_group">
      <Radio
        label="Katz"
        name="gundam-kids-1"
        value="katz"
        defaultChecked
        id="_group-1"
      />
      <Radio label="Letz" name="gundam-kids-1" value="letz" id="_group-2" />
      <Radio label="Kikka" name="gundam-kids-1" value="kikka" id="_group-3" />
    </RadioGroup>
  );
}

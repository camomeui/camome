import { Radio } from "@camome/core/Radio";
import { RadioGroup } from "@camome/core/RadioGroup";

export default function Group() {
  return (
    <RadioGroup label="Gundam kids" aria-required>
      <Radio label="Katz" name="gundam-kids-1" value="katz" defaultChecked />
      <Radio label="Letz" name="gundam-kids-1" value="letz" />
      <Radio label="Kikka" name="gundam-kids-1" value="kikka" />
    </RadioGroup>
  );
}

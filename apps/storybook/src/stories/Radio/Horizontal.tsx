import { Radio } from "@camome/core/Radio";
import { RadioGroup } from "@camome/core/RadioGroup";

export default function Horizontal() {
  return (
    <RadioGroup label="Gundam kids" aria-required orientation="horizontal">
      <Radio label="Katz" name="gundam-kids-3" value="katz" defaultChecked />
      <Radio label="Letz" name="gundam-kids-3" value="letz" />
      <Radio label="Kikka" name="gundam-kids-3" value="kikka" />
    </RadioGroup>
  );
}

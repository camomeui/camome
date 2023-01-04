import { Radio } from "@camome/components/Radio";
import { RadioGroup } from "@camome/components/RadioGroup";

export default function Horizontal() {
  return (
    <RadioGroup
      labelText="Gundam kids"
      aria-required
      direction="horizontal"
      id="_horizontal"
    >
      <Radio
        labelText="Katz"
        name="gundam-kids-3"
        value="katz"
        defaultChecked
        id="_horizontal-1"
      />
      <Radio
        labelText="Letz"
        name="gundam-kids-3"
        value="letz"
        id="_horizontal-2"
      />
      <Radio
        labelText="Kikka"
        name="gundam-kids-3"
        value="kikka"
        id="_horizontal-3"
      />
    </RadioGroup>
  );
}

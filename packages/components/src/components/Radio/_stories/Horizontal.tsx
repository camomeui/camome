import { Radio } from "@camome/components/Radio";
import { RadioGroup } from "@camome/components/RadioGroup";

export default function Horizontal() {
  return (
    <RadioGroup
      label="Gundam kids"
      aria-required
      orientation="horizontal"
      id="_horizontal"
    >
      <Radio
        label="Katz"
        name="gundam-kids-3"
        value="katz"
        defaultChecked
        id="_horizontal-1"
      />
      <Radio
        label="Letz"
        name="gundam-kids-3"
        value="letz"
        id="_horizontal-2"
      />
      <Radio
        label="Kikka"
        name="gundam-kids-3"
        value="kikka"
        id="_horizontal-3"
      />
    </RadioGroup>
  );
}

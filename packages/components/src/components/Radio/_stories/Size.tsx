import { Radio } from "@camome/components/Radio";
import { RadioGroup } from "@camome/components/RadioGroup";

export default function Size() {
  return (
    <RadioGroup label="Sizes" aria-required id="_size">
      <Radio
        label="Small"
        name="sizes"
        value="sm"
        size="sm"
        defaultChecked
        id="_size-1"
      />
      <Radio label="Medium" name="sizes" value="md" size="md" id="_size-2" />
      <Radio label="Large" name="sizes" value="lg" size="lg" id="_size-3" />
    </RadioGroup>
  );
}

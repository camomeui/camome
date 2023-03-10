import { Radio } from "@camome/core/Radio";
import { RadioGroup } from "@camome/core/RadioGroup";

export default function Size() {
  return (
    <RadioGroup label="Sizes" aria-required>
      <Radio label="Small" name="sizes" value="sm" size="sm" defaultChecked />
      <Radio label="Medium" name="sizes" value="md" size="md" />
      <Radio label="Large" name="sizes" value="lg" size="lg" />
    </RadioGroup>
  );
}

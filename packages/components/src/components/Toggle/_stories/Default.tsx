import { FormControl } from "@camome/components/FormControl";
import { Toggle } from "@camome/components/Toggle";

export default function Default() {
  return (
    <FormControl labelText="Label" direction="horizontal-reverse">
      <Toggle size="md" onLabel="ON" offLabel="OFF" required />
    </FormControl>
  );
}

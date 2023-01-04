import { FormControl } from "@camome/components/FormControl";
import { TextInput } from "@camome/components/TextInput";

export default function Disabled() {
  return (
    <FormControl labelText="Name" id="_disabled">
      <TextInput placeholder="John Doe" disabled />
    </FormControl>
  );
}

import { FormControl } from "@camome/components/FormControl";
import { TextInput } from "@camome/components/TextInput";

export default function Fill() {
  return (
    <FormControl labelText="Name" id="_fill">
      <TextInput placeholder="John Doe" fill />
    </FormControl>
  );
}

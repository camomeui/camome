import { FormControl } from "@camome/components/FormControl";
import { TextInput } from "@camome/components/TextInput";

export default function Default() {
  return (
    <FormControl labelText="Name" id="_default">
      <TextInput placeholder="John Doe" />
    </FormControl>
  );
}

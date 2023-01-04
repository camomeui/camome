import { FormControl } from "@camome/components/FormControl";
import { TextInput } from "@camome/components/TextInput";

export default function Default() {
  return (
    <FormControl labelText="Name">
      <TextInput placeholder="John Doe" />
    </FormControl>
  );
}

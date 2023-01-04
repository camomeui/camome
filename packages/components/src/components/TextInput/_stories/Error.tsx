import { FormControl } from "@camome/components/FormControl";
import { TextInput } from "@camome/components/TextInput";

export default function Error() {
  return (
    <FormControl labelText="Name" error="Something is wrong">
      <TextInput placeholder="John Doe" />
    </FormControl>
  );
}

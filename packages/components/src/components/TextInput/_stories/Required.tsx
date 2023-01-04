import { FormControl } from "@camome/components/FormControl";
import { TextInput } from "@camome/components/TextInput";

export default function Required() {
  return (
    <FormControl labelText="Name" id="_required">
      <TextInput placeholder="John Doe" />
    </FormControl>
  );
}

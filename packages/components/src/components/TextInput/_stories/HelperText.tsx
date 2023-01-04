import { FormControl } from "@camome/components/FormControl";
import { TextInput } from "@camome/components/TextInput";

export default function HelperText() {
  return (
    <FormControl labelText="Name" helperText="Supplementary text">
      <TextInput placeholder="John Doe" />
    </FormControl>
  );
}

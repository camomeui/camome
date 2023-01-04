import { FormControl } from "@camome/components/FormControl";
import { Textarea } from "@camome/components/Textarea";

export default function Default() {
  return (
    <FormControl labelText="Name">
      <Textarea rows={3} placeholder="Type something..." />
    </FormControl>
  );
}

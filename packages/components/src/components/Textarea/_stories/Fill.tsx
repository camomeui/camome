import { FormControl } from "@camome/components/FormControl";
import { Textarea } from "@camome/components/Textarea";

export default function Fill() {
  return (
    <FormControl labelText="Name">
      <Textarea rows={3} required placeholder="Type something..." fill />
    </FormControl>
  );
}

import { FormControl } from "@camome/components/FormControl";
import { Textarea } from "@camome/components/Textarea";

export default function Disabled() {
  return (
    <FormControl labelText="Name" id="_disabled">
      <Textarea rows={3} placeholder="Type something..." disabled />
    </FormControl>
  );
}

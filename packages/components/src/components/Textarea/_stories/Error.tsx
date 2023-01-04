import { FormControl } from "@camome/components/FormControl";
import { Textarea } from "@camome/components/Textarea";

export default function Error() {
  return (
    <FormControl labelText="Message" error="Something is wrong" id="_error">
      <Textarea rows={3} placeholder="Type something..." />
    </FormControl>
  );
}

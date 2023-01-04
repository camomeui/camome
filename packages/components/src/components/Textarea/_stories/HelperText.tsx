import { FormControl } from "@camome/components/FormControl";
import { Textarea } from "@camome/components/Textarea";

export default function HelperText() {
  return (
    <FormControl labelText="Name" helperText="Supplementary text" id="_helper">
      <Textarea rows={3} placeholder="Type something..." />
    </FormControl>
  );
}

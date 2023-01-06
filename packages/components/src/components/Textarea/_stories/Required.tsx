import { Textarea } from "@camome/components/Textarea";

export default function Required() {
  return (
    <Textarea
      label="Name"
      rows={3}
      required
      placeholder="Type something..."
      id="_required"
    />
  );
}

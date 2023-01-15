import { Textarea } from "@camome/core/Textarea";

export default function Error() {
  return (
    <Textarea
      rows={3}
      placeholder="Type something..."
      label="Message"
      error="Something is wrong"
    />
  );
}

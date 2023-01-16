import { Textarea } from "@camome/core";

export default function Description() {
  return (
    <Textarea
      label="Name"
      description="Description text"
      rows={3}
      placeholder="Type something..."
    />
  );
}

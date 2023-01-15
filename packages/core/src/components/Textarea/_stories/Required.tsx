import { Textarea } from "@camome/core/Textarea";

export default function Required() {
  return (
    <Textarea label="Name" rows={3} required placeholder="Type something..." />
  );
}

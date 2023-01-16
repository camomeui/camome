import { Textarea } from "@camome/core";

export default function Required() {
  return (
    <Textarea label="Name" rows={3} required placeholder="Type something..." />
  );
}

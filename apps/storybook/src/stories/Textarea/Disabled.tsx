import { Textarea } from "@camome/core/Textarea";

export default function Disabled() {
  return (
    <Textarea label="Name" rows={3} placeholder="Type something..." disabled />
  );
}

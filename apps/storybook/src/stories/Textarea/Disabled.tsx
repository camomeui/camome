import { Textarea } from "@camome/core";

export default function Disabled() {
  return (
    <Textarea label="Name" rows={3} placeholder="Type something..." disabled />
  );
}

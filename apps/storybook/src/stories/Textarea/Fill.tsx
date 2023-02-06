import { Textarea } from "@camome/core/Textarea";

export default function Fill() {
  return (
    <Textarea label="Name" rows={3} placeholder="Type something..." fill />
  );
}

Fill.parameters = {
  layout: "padded",
};

import { Textarea } from "@camome/core";

export default function Fill() {
  return (
    <div style={{ minWidth: "30rem" }}>
      <Textarea label="Name" rows={3} placeholder="Type something..." fill />
    </div>
  );
}

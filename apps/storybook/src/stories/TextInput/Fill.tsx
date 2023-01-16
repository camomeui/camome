import { TextInput } from "@camome/core";

export default function Fill() {
  return (
    <div style={{ minWidth: "30rem" }}>
      <TextInput label="Name" placeholder="John Doe" fill />
    </div>
  );
}

import { TextInput } from "@camome/core/TextInput";

export default function Fill() {
  return (
    <div style={{ minWidth: "30rem" }}>
      <TextInput label="Name" placeholder="John Doe" fill />
    </div>
  );
}

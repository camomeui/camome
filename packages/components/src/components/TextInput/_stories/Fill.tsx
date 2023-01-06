import { TextInput } from "@camome/components/TextInput";

export default function Fill() {
  return (
    <div style={{ minWidth: "30rem" }}>
      <TextInput label="Name" placeholder="John Doe" fill id="_fill" />
    </div>
  );
}

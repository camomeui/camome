import { TextInput } from "@camome/core/TextInput";

export default function Fill() {
  return <TextInput label="Name" placeholder="John Doe" fill />;
}

Fill.parameters = {
  layout: "padded",
};

import { Input } from "@camome/core/Input";

export default function Fill() {
  return <Input label="Name" placeholder="John Doe" fill />;
}

Fill.parameters = {
  layout: "padded",
};

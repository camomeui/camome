import { FormField } from "@camome/core/FormField";
import { Input } from "@camome/core/Input";

export default function Default() {
  return (
    <FormField
      description="This is description"
      label="This is label"
      className="additional-class"
    >
      <Input />
    </FormField>
  );
}

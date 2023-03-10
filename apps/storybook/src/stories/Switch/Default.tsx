import { FormField } from "@camome/core/FormField";
import { Switch } from "@camome/core/Switch";

export default function Default() {
  return (
    <FormField
      label="Label"
      description="Description text"
      error="This is an error"
      custom
    >
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}
        >
          <FormField.Label />
          <FormField.Description />
        </div>
        <Switch size="md" />
      </div>
    </FormField>
  );
}

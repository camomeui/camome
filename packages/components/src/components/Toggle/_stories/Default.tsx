import { FormField } from "@camome/components/FormField";
import { Toggle } from "@camome/components/Toggle";

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
        <Toggle size="md" on="ON" off="OFF" />
      </div>
    </FormField>
  );
}

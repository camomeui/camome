import { Checkbox } from "@camome/components/Checkbox";

export default function Size() {
  return (
    <>
      <Checkbox
        labelText="Agree to our Privacy Policy"
        value="true"
        size="sm"
        id="size-sm"
      />
      <Checkbox
        labelText="Agree to our Privacy Policy"
        value="true"
        size="md"
        id="size-md"
      />
      <Checkbox
        labelText="Agree to our Privacy Policy"
        value="true"
        size="lg"
        id="size-lg"
      />
    </>
  );
}

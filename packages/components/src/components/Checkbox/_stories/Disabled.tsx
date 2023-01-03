import { Checkbox } from "@camome/components/Checkbox";

export default function Disabled() {
  return (
    <>
      <Checkbox labelText="Checked" value="true" checked disabled />
      <Checkbox labelText="Not checked" value="true" disabled />
    </>
  );
}

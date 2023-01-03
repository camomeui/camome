import { Checkbox } from "@camome/components/Checkbox";

export default function WithHelperText() {
  return (
    <Checkbox
      labelText="With helper text"
      helperText="Descriptive text"
      value="true"
      id="with-helper"
    />
  );
}

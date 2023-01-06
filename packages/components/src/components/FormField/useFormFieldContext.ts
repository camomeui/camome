import React from "react";

import { FormFieldContext } from "./FormFieldContext";

export function useFormFieldContext() {
  return React.useContext(FormFieldContext);
}

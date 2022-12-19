import React from "react";

import { FormControlContext } from "./FormControlContext";

export function useFormControlContext() {
  return React.useContext(FormControlContext);
}

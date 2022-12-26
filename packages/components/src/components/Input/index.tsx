import React from "react";

import { BaseProps, PolymorphicProps } from "../../types";
import { createPolymorphicComponent } from "../../utils/createPolymorphicComponent";
import { Box } from "../Box";
import { useFormControlContext } from "../FormControl/useFormControlContext";

const _Input = React.forwardRef<HTMLInputElement, BaseProps & PolymorphicProps>(
  ({ component = "input", ...inputProps }, forwardedRef) => {
    const { id, helperTextId, errorTextId, isError } = useFormControlContext();
    return (
      <Box
        component={component}
        id={id}
        aria-describedby={[helperTextId || "", errorTextId || ""].join(" ")}
        aria-invalid={isError}
        ref={forwardedRef}
        {...inputProps}
      />
    );
  }
);

_Input.displayName = "Input";

export const Input = createPolymorphicComponent<"input", BaseProps>(_Input);

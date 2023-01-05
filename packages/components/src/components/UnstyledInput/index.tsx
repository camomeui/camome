import React from "react";

import { joinLabelIds } from "src/utils/joinLabelIds";

import { BaseProps, PolymorphicProps } from "../../types";
import { createPolymorphicComponent } from "../../utils/createPolymorphicComponent";
import { Box } from "../Box";
import { useFormFieldContext } from "../FormField/useFormFieldContext";

const _UnstyledInput = React.forwardRef<
  HTMLInputElement,
  BaseProps & PolymorphicProps
>(({ component = "input", ...inputProps }, forwardedRef) => {
  const { id, descriptionId, errorId, isError } = useFormFieldContext();
  return (
    <Box
      component={component}
      id={id}
      aria-describedby={joinLabelIds(descriptionId, errorId)}
      aria-invalid={isError}
      ref={forwardedRef}
      {...inputProps}
    />
  );
});

_UnstyledInput.displayName = "Input";

export const UnstyledInput = createPolymorphicComponent<"input", BaseProps>(
  _UnstyledInput
);

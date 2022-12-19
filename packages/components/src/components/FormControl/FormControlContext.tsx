import React from "react";

export type FormControlContextValue = {
  labelId: string | undefined;
  htmlFor: string | undefined;
  helperTextId: string | undefined;
  errorTextId: string | undefined;
  isError: boolean | string;
};

export const FormControlContext = React.createContext<FormControlContextValue>({
  htmlFor: undefined,
  labelId: undefined,
  helperTextId: undefined,
  errorTextId: undefined,
  isError: false,
});

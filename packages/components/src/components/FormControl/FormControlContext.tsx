import React from "react";

export type FormControlContextValue = {
  labelId: string | undefined;
  id: string | undefined;
  helperTextId: string | undefined;
  errorTextId: string | undefined;
  isError: boolean;
};

export const FormControlContext = React.createContext<FormControlContextValue>({
  id: undefined,
  labelId: undefined,
  helperTextId: undefined,
  errorTextId: undefined,
  isError: false,
});

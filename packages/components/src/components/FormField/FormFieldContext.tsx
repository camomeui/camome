import React from "react";

export type FormFieldContextValue = {
  id: string | undefined;
  label: React.ReactNode;
  labelId: string;
  description: React.ReactNode | undefined;
  descriptionId: string | undefined;
  error: React.ReactNode | undefined;
  errorId: string | undefined;
  isError: boolean;
};

export const FormFieldContext = React.createContext<FormFieldContextValue>({
  id: undefined,
  label: <></>,
  labelId: "",
  description: undefined,
  descriptionId: undefined,
  error: undefined,
  errorId: undefined,
  isError: false,
});

import clsx from "clsx";
import React from "react";

import { FormFieldContext, FormFieldContextValue } from "./FormFieldContext";
import { FormFieldDescription } from "./FormFieldDescription";
import { FormFieldError } from "./FormFieldError";
import { FormFieldLabel } from "./FormFieldLabel";
import styles from "./styles.module.scss";

export type FormFieldProps = {
  label: React.ReactNode;
  description?: React.ReactNode;
  error?: boolean | string;
  id?: string;
  custom?: boolean;
  fill?: boolean;
  children:
    | React.ReactNode
    | ((props: FormFieldContextValue) => React.ReactNode);
};

type FormFieldApi = React.FC<FormFieldProps> & {
  Container: typeof FormFieldContainer;
  Label: typeof FormFieldLabel;
  Description: typeof FormFieldDescription;
  Error: typeof FormFieldError;
};

export const FormField = (({
  label,
  description,
  error = false,
  id: _id,
  custom = false,
  fill = false,
  children,
}: FormFieldProps) => {
  const useIdValue = React.useId();
  const id = _id || useIdValue;
  const labelId = `${id}--label`;
  const descriptionId = description ? `${id}--description` : undefined;
  const errorId = typeof error === "string" ? `${id}--error` : undefined;
  const ctxValue = {
    id,
    label,
    labelId,
    description,
    descriptionId,
    error,
    errorId,
    isError: !!error,
  };

  const content = (
    <FormFieldContext.Provider value={ctxValue}>
      {!custom && <FormFieldLabel />}
      {!custom && <FormFieldDescription />}
      {typeof children === "function" ? children(ctxValue) : children}
      {!custom && <FormFieldError />}
    </FormFieldContext.Provider>
  );

  return custom ? (
    content
  ) : (
    <FormFieldContainer fill={fill}>{content}</FormFieldContainer>
  );
}) as FormFieldApi;

function FormFieldContainer({
  fill,
  children,
}: {
  fill: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={clsx(styles.Block, fill && styles["Block--fill"])}>
      {children}
    </div>
  );
}

FormField.Container = FormFieldContainer;
FormField.Label = FormFieldLabel;
FormField.Description = FormFieldDescription;
FormField.Error = FormFieldError;

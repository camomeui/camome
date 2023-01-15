import { ComponentCssVariables } from "../../types";

const variables = {
  closeOffset: "0.75rem",
  outerMargin: "1rem",
  minWidth: "28rem",
  maxWidth: "28rem",
} as const satisfies ComponentCssVariables;

export default variables;

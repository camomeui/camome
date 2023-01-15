import { ComponentCssVariables } from "../../types";

const variables = {
  summaryPad: "0.5rem 1rem",
  contentPad: "0.5rem 1rem",
  markerSize: "1.25em",
} as const satisfies ComponentCssVariables;

export default variables;

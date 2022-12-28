import { cssVar } from "@camome/system";

import { ComponentCssVariables } from "../../types";

const variables = {
  arrowSize: "0.3rem",
  offset: "2.25rem",
  bgColor: cssVar("color.gray.800"),
} as const satisfies ComponentCssVariables;

export default variables;

import { cssVar } from "@camome/system";

import { ComponentCssVariables } from "../../types";

const variables = {
  iconSize: "1.25rem",
  iconColor: cssVar("color.primary.600"),
  bgHover: cssVar("color.gray.100"),
} as const satisfies ComponentCssVariables;

export default variables;

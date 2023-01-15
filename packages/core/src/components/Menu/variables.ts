import { cssVar } from "@camome/system";

import { ComponentCssVariables } from "../../types";

const variables = {
  iconSize: "1em",
  iconColor: cssVar("color.font.subtle"),
  fontColor: cssVar("color.font.base"),
} as const satisfies ComponentCssVariables;

export default variables;

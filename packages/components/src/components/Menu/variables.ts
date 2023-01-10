import { cssVar } from "@camome/system";

import { ComponentCssVariables } from "../../types";

const variables = {
  iconSize: "1.25rem",
  iconColor: cssVar("color.font.subtle"),
  fontColor: cssVar("color.font.base"),
  bgHover: null,
} as const satisfies ComponentCssVariables;

export default variables;

import { cssVar } from "@camome/system";

import { ComponentCssVariables } from "../../../types";

const variables = {
  fontSize: cssVar("font.size.sm"),
  color: cssVar("color.danger.600"),
  lineHeight: "1.2",
  margin: null,
} as const satisfies ComponentCssVariables;

export default variables;

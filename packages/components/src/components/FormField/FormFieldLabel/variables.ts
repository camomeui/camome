import { cssVar } from "@camome/system";

import { ComponentCssVariables } from "../../../types";

const variables = {
  fontSize: cssVar("font.size.sm"),
  fontWeight: cssVar("font.weight.medium"),
  lineHeight: "1.2",
  margin: null,
} as const satisfies ComponentCssVariables;

export default variables;

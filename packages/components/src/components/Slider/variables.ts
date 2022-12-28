import { cssVar } from "@camome/system";

import { ComponentCssVariables } from "../../types";

const variables = {
  thumbSize: null,
  thumbBorderColor: cssVar("color.primary.500"),
  thumbColor: cssVar("color.white"),
  thumbRadius: cssVar("rounded.full"),
  trackHeight: null,
  trackRadius: cssVar("rounded.full"),
  trackColor: cssVar("color.primary.100"),
} as const satisfies ComponentCssVariables;

export default variables;

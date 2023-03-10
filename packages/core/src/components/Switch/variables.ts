import { cssVar } from "@camome/system";

import { ComponentCssVariables } from "../../types";

const variables = {
  radius: cssVar("radius.full"),
  thumbWidth: null,
  thumbHeight: null,
  padX: null,
  padY: null,
  labelFontSize: null,
  labelPadX: null,
  width: null,
  borderWidth: "1px",
} as const satisfies ComponentCssVariables;

export default variables;

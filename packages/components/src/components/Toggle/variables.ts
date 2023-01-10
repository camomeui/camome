import { cssVar } from "@camome/system";

import { ComponentCssVariables } from "../../types";

const variables = {
  radius: cssVar("rounded.full"),
  thumbWidth: null,
  thumbHeight: null,
  padX: null,
  padY: null,
  labelFontSize: null,
  labelPadX: null,
  gap: null,
} as const satisfies ComponentCssVariables;

export default variables;

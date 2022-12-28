import { cssVar } from "@camome/system";

import { ComponentCssVariables } from "../../types";

const variables = {
  radius: cssVar("rounded.full"),
  bgOff: cssVar("color.gray.200"),
  bgOn: cssVar("color.primary.500"),
  thumbWidth: null,
  thumbHeight: null,
  padX: null,
  padY: null,
  labelFontSize: null,
  labelColorOn: cssVar("color.white"),
  labelColorOff: cssVar("color.gray.500"),
  labelPadX: null,
  gap: null,
} as const satisfies ComponentCssVariables;

export default variables;

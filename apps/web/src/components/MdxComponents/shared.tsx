/* eslint-disable @typescript-eslint/no-unused-vars */
import * as HeroIconsOutline from "@heroicons/react/24/outline";

import * as CamomeComponentsWithUtils from "@camome/components/src";

const {
  useFormControlContext,
  tabClassNames,
  menuClassNames,
  dialogClassNames,
  ...CamomeComponents
} = CamomeComponentsWithUtils;

export const sharedComponents = {
  ...CamomeComponents,
  ...HeroIconsOutline,
} as const;

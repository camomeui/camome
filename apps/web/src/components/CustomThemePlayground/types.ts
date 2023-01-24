import React from "react";

import type { Theme } from "@camome/system";

export type Option = {
  name: string;
  label: string;
  properties: Theme;
  icon: React.ReactNode;
  css?: string;
  googleFont?: string;
};

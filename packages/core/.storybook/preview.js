import React from "react";
import { DocsContainer } from "@storybook/addon-docs";
import { useDarkMode } from "storybook-dark-mode";

import "@camome/system/style.css";
import "./styles.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "centered",
};

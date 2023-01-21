import { defineTheme } from "@camome/system";

/** @type { import("@camome/system").Config;} */
const config = {
  themes: {
    light: defineTheme("light"),
    dark: defineTheme("dark"),
  },
};

export default config;

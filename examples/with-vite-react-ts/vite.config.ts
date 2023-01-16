import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

import { buildScopedClassName } from "@camome/utils";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      generateScopedName(name, filename) {
        return buildScopedClassName(name, filename);
      },
    },
  },
});

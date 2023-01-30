import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

import { generateScopedName } from "@camome/utils";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      generateScopedName(name, filename) {
        return generateScopedName(name, filename);
      },
    },
  },
});

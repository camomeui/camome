import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

import { buildScopedClassName, hash } from "@camome/utils";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      generateScopedName(local, filename) {
        if (filename.includes("apps/storybook")) {
          return "story-" + hash(filename + local);
        }
        return buildScopedClassName(local, filename);
      },
    },
  },
});

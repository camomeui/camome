import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

import { generateScopedName, hash } from "@camome/utils";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      generateScopedName(name, filename) {
        // @camome/core depends on static class names
        // but your own module classes won't.
        if (!filename.match(/@camome\/core/)) {
          // Whatever.
          return name + "-" + hash(filename);
        }
        return generateScopedName(name, filename);
      },
    },
  },
});

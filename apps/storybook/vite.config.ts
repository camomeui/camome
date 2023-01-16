import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

import { buildScopedClassName, hash } from "@camome/utils";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      generateScopedName(local, filename) {
        const dir = filename.split("/").at(-2);
        if (dir === "_stories" || filename.endsWith("stories.module.scss")) {
          const className = hash(filename + local);
          return className.match(/^[0-9]/) ? `_${className}` : className;
        }
        return buildScopedClassName(local, filename);
      },
    },
  },
});

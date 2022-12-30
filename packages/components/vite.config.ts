import path from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

import { buildScopedClassName, hash } from "@camome/utils";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react(), dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@camome/components",
      formats: ["es"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  css: {
    modules: {
      generateScopedName(local, filename) {
        const dir = filename.split("/").at(-2);
        if (dir === "stories" || filename.endsWith("stories.module.scss")) {
          const className = hash(filename + local);
          return className.match(/^[0-9]/) ? `_${className}` : className;
        }
        return buildScopedClassName(local, filename);
      },
    },
  },
});

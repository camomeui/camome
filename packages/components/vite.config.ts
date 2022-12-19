import path from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

import { buildScopedClassName } from "@camome/utils";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
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
        return buildScopedClassName(local, filename);
      },
    },
  },
});

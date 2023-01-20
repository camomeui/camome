import path from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

import { buildScopedClassName } from "@camome/utils";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react(), dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@camome/core",
      formats: ["es", "cjs"],
      fileName(format, entryName) {
        return format === "es" ? `${entryName}.mjs` : `${entryName}.cjs`;
      },
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "components.css";
          return assetInfo.name;
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

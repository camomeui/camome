import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts", "./src/cli/index.ts"],
  clean: true,
  format: ["esm"],
  dts: true,
  minify: true,
  sourcemap: true,
  loader: {
    ".css": "text",
  },
  outExtension(ctx) {
    return { js: `.${ctx.format}.js` };
  },
  onSuccess: "node ./scripts/generate-css.js",
});

import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts", "./src/cli/index.ts"],
  clean: false,
  format: ["esm", "cjs"],
  dts: true,
  minify: true,
  sourcemap: true,
  loader: {
    ".css": "text",
  },
  outExtension(ctx) {
    return { js: `.${ctx.format}.js` };
  },
  onSuccess: "pnpm tsx ./scripts/generate-css.ts",
});

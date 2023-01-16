import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts", "./src/cli/index.ts"],
  clean: true,
  format: ["esm"],
  dts: true,
  outExtension(ctx) {
    return { js: ctx.format === "esm" ? ".mjs" : ".cjs" };
  },
});

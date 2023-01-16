import { defineConfig } from "tsup";

export default defineConfig({
  clean: false,
  dts: true,
  format: ["esm", "cjs"],
  outExtension(ctx) {
    return { js: ctx.format === "esm" ? ".mjs" : ".cjs" };
  },
});

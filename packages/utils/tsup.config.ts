import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  format: ["esm", "cjs"],
  outExtension(ctx) {
    return { js: `.${ctx.format}.js` };
  },
});

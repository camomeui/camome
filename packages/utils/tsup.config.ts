import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  format: ["esm"],
  outExtension(ctx) {
    return { js: `.${ctx.format}.js` };
  },
});

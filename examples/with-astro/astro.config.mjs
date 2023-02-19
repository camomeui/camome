import react from "@astrojs/react";
import { generateScopedName, hash } from "@camome/utils";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    ssr: {
      noExternal: ["@camome/core"],
    },
    css: {
      modules: {
        generateScopedName(name, filename) {
          // @camome/core depends on static class names
          // but your own module classes won't.
          if (!filename.match(/@camome\/core/)) {
            // Whatever.
            return name + "-" + hash(filename);
          }
          return generateScopedName(name, filename);
        },
      },
    },
  },
});

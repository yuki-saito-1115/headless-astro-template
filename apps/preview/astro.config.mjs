import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";

const contentPath = fileURLToPath(new URL("../../packages/content/src", import.meta.url));
const uiPath = fileURLToPath(new URL("../../packages/ui/src", import.meta.url));

export default defineConfig({
  output: "static",
  publicDir: ".generated-public",
  vite: {
    resolve: {
      alias: {
        "@shared/content": contentPath,
        "@shared/ui": uiPath
      }
    }
  }
});

import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";

const sharedPath = fileURLToPath(new URL("../../packages/content/src", import.meta.url));
const uiPath = fileURLToPath(new URL("../../packages/ui/src", import.meta.url));

export default defineConfig({
  output: "static",
  vite: {
    resolve: {
      alias: {
        "@shared/content": sharedPath,
        "@shared/ui": uiPath
      }
    }
  }
});

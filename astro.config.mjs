// @ts-check

import react from "@astrojs/react";
import yaml from "@rollup/plugin-yaml";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
  },
  integrations: [react(), icon()],
  vite: {
    plugins: [tailwindcss(), yaml()],
  },
});

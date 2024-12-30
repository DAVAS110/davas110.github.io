import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://davas110.github.io',
});
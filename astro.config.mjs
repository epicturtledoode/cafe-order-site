import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "DotGothic16",
    cssVariable: "--font-dotgothic",
  }],

  vite: {
    plugins: [tailwindcss()]
  }
});
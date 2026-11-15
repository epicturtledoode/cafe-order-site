import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Pixelify Sans",
    cssVariable: "--font-pixelify",
  }],

  vite: {
    plugins: [tailwindcss()]
  }
});
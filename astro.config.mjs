import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  fonts: [
    {provider: fontProviders.fontsource(),
    name: "Pixelify Sans",
    cssVariable: "--font-pixelify"},
    {provider: fontProviders.fontsource(),
    name: "IBM Plex Mono",
    cssVariable: "--font-IBMplex"}
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});
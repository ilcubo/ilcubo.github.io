// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  fonts: [{
    provider: fontProviders.local(),
    name: "MerriweatherSans",
    cssVariable: "--font-merriweather-sans",
    options: {
      variants: [{
        src: ["./src/assets/fonts/MerriweatherSans-VariableFont_wght.woff2"],
        weight: "100 900",
        style: 'normal'
      }]
    }
  }]
});

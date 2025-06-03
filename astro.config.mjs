// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify'; // 👈 agrega esta línea

// https://astro.build/config
export default defineConfig({
  adapter: netlify(), // 👈 agrega esta línea
  devToolbar: {
    enabled: false
  }
});

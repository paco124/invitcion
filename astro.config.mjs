import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";

export default defineConfig({
  output: "static", // <-- esto es importante
  adapter: netlify({
    // si no usas SSR, no actives funciones
    edgeMiddleware: false,
    functionPerRoute: false
  }),
  devToolbar: {
    enabled: false
  }
});

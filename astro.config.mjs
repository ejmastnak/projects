import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
  integrations: [tailwind()],
});

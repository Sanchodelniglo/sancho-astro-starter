import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yourdomain.com',
  base: '/',
  output: 'static',
  integrations: [
    tailwind(),
    sitemap(),
  ],
});

// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: process.env.SITE_URL || 'https://clearitrtax.com',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});

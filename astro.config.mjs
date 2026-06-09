import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL overrides the production domain at build/deploy time (the only env var read).
export default defineConfig({
  site: process.env.SITE_URL || 'https://pinestatewellpump.com',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'always' }, // inline CSS → no render-blocking request
  integrations: [
    sitemap({ filter: (page) => !/\/(terms|privacy)\/?$/.test(page) }), // exclude legal pages
  ],
});

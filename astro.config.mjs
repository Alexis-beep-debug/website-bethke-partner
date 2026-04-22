import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.bethke-und-partner.de',
  output: 'static',
  integrations: [sitemap()],
});

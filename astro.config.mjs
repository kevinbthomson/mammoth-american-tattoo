import sanity from '@sanity/astro';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [
    sanity({
      projectId: 'i8y9tpei',
      dataset: 'production',
      useCdn: false,
      studioBasePath: '/admin',
    }),
    react(),
  ],

  adapter: netlify(),
});

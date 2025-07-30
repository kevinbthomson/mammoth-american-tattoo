import sanity from '@sanity/astro';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [
    sanity({
      projectId: 'i8y9tpei',
      dataset: 'production',
      useCdn: false,
      studioBasePath: '/admin',
    }),
    react(),
  ],
});

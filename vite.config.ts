import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import environmentPlugin from 'vite-plugin-environment';
import { VitePWA } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  define: {
    'process.env': process.env,
  },
  build: {
    sourcemap: true,
  },
  server: {
    host: true,
    open: true,
  },
  preview: {
    open: true,
  },
  plugins: [
    environmentPlugin({
      APP_ENV: 'local',
      NODE_ENV: 'development',
    }),
    tsconfigPaths(),
    react(),
    VitePWA({
      includeAssets: [
        'icons/favicon.svg',
        'icons/favicon.ico',
        'robots.txt',
        'icons/apple-touch-icon.png',
      ],
      manifest: {
        name: 'Admin DEV',
        short_name: 'Admin',
        description: 'Administrative Interface for DEV',
        theme_color: '#ff0044',
        icons: [
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'icons/maskable_icon.png',
            sizes: '196x196',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
});
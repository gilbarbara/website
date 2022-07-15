import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import environmentPlugin from 'vite-plugin-environment';
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
    port: 3000,
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
  ],
});

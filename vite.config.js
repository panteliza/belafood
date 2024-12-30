import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add this to include JPG files as assets
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png'], // Include image formats
});

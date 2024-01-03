import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "@all/css/include.sass"\n`
      },
    },
  },
  resolve: {
    alias: {
      '@all': '/src',
      '@': '/src/components', 
    },
  },
});

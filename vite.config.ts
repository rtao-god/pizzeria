import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        // Note: Use 'additionalData' instead of 'prependData'
        additionalData: `@import "@all/css/include.sass"\n`, // Adjust the path as needed
      },
    },
  },
  resolve: {
    alias: {
      '@all': '/src', // Adjust this alias based on your project structure
      '@': '/src/components', 
    },
  },
});

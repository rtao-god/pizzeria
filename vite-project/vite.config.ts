import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, "./src"),
      '@components': path.resolve(__dirname, './src/components'),
      '@mainPage': path.resolve(__dirname, './src/layout/mainPage'),
      '@mainSass': path.resolve(__dirname, './src/Styles/mainSass'),
      '@API': path.resolve(__dirname, './src/API'),
      '@layout': path.resolve(__dirname, './src/layout'),
      '@UI': path.resolve(__dirname, './src/UI'),
<<<<<<< HEAD
      '@assets': path.resolve(__dirname, './src/assets'),
      '@context': path.resolve(__dirname, './src/context'),
=======
      '@assets': path.resolve(__dirname, './src/assets')
>>>>>>> 0657087b7ba6da58ef90271e3a43ef862a1f64d5
    },
  }
})


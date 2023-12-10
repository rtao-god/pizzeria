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
      '@common': path.resolve(__dirname, './src/components/common'),
      '@controls': path.resolve(__dirname, './src/components/common/controls'),
      '@mainPage': path.resolve(__dirname, './src/layout/mainPage'),
      '@mainSass': path.resolve(__dirname, './src/Styles/mainSass'),
      '@API': path.resolve(__dirname, './src/API'),
      '@layout': path.resolve(__dirname, './src/layout'),
      '@UI': path.resolve(__dirname, './src/UI'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@context': path.resolve(__dirname, './src/context'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@router': path.resolve(__dirname, './src/router'),
      '@layoutPages': path.resolve(__dirname, './src/layoutPages'),
    },
  }
})


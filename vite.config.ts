import path from 'path'
import vue from '@vitejs/plugin-vue'
import ElementPlus from 'unplugin-element-plus/vite'
import { defineConfig } from 'vite'
import { BASE_URL } from './env'

// https://vitejs.dev/config/
export default defineConfig({
  base: BASE_URL,
  server: {
    host: '0.0.0.0',
  },
  plugins: [vue(), ElementPlus()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@router': path.resolve(__dirname, 'src/router'),
      '@view': path.resolve(__dirname, 'src/view'),
    },
  },
  build: {
    sourcemap: true,
  },
})

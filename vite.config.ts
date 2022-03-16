import path from 'path'
import dotenv from 'dotenv'
import vue from '@vitejs/plugin-vue'
import ElementPlus from 'unplugin-element-plus/vite'
import { defineConfig } from 'vite'

dotenv.config({ path: `.env` })

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE,
  server: {
    host: '0.0.0.0',
    open: true,
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

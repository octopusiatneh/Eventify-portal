import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import basicSsl from '@vitejs/plugin-basic-ssl'
import { transformAssetUrls } from 'vite-plugin-vuetify'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5173,
  },
  css: {
    preprocessorOptions: {
      sass: {},
    },
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    vueDevTools(),
    basicSsl(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

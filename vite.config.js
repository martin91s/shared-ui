import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    lib: {
      entry: './src/web-comp.js',
      format: ['es', 'cjs'],
      name: 'vue-web-comp',
      fileName: (format) => (format === 'es' ? 'index.js' : 'index.cjs.js'),

    },
    sourcemap: true,
    target: 'esnext',
    minify: false,
  },
})
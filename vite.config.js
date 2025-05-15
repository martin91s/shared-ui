import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'web-components.js'),
      name: 'SharedUI',
      fileName: 'web-components',
      formats: ['es'], // needed for use with <script type="module">
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

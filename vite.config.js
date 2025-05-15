import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'web-components.js'),
      name: 'SharedUI',
      fileName: 'web-components',
      formats: ['es'],
    },
    rollupOptions: {
      // ❌ DO NOT externalize vue
      external: [], // or just remove this key entirely
    },
  },
  plugins: [vue()],
})

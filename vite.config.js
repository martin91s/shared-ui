// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    target: 'esnext',
    lib: {
      entry: path.resolve(__dirname, 'src/web-components.js'),
      formats: ['es'],
      fileName: 'web-components',
    },
    rollupOptions: {
      // ❌ REMOVE this: external: ['vue'],
      // ✅ Ensure nothing is excluded so Vue is bundled in
      external: [],
    },
  },
})

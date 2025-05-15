import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext', // ✅ Ensures proper module syntax for modern browsers
    lib: {
      entry: path.resolve(__dirname, 'src/web-components.js'),
      formats: ['es'],
      fileName: 'web-components',
    },
    rollupOptions: {
      // ✅ Do NOT exclude vue, include it in the build
      external: [],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})

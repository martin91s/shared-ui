import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  // ...
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/web-components.js'),
      formats: ['es'],
      fileName: 'web-components',
    },
    rollupOptions: {
      // ❌ remove external vue
      external: [],
    },
  },
});

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { BootstrapVueNextResolver } from 'bootstrap-vue-next';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    Components({
      resolvers: [BootstrapVueNextResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      vue: 'vue/dist/vue.esm-browser.js', // ✅ browser-safe build of Vue
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
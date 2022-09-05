import { defineConfig } from 'vite'
import { createVuePlugin as vue } from "vite-plugin-vue2";
import * as path from "path";
import sassDts from 'vite-plugin-sass-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [  
    vue(),
    sassDts(),
  ],
  define: {
    'process.env': {}
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: { 
    postcss: "./postcss.config.js",
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./assets/styles/sass/themes/lite-purple.scss"
        `
      }
    }}
});

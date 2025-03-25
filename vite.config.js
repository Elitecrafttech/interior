import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import viteImagemin from "vite-plugin-imagemin";
import purgecss from "vite-plugin-purgecss";
import compression from "vite-plugin-compression";
import inspect from "vite-plugin-inspect";


// https://vite.dev/config/
export default defineConfig({
  build: {
    minify: "esbuild", // Faster minification than Terser
    target: 'esnext',  // Reduce legacy JS
    terserOptions: {
      compress: {
        drop_console: true, // Removes console.log for smaller JS size
        dead_code: true, // Removes unused code
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) return "vendor"; // Splits vendor code
        },
      },
    },
  },

  plugins: [
    tailwindcss(), react(), purgecss(), compression(),
    compression({ algorithm: "brotliCompress", threshold: 1024 }),
     inspect(),
    viteImagemin({
      gifsicle: { optimizationLevel: 3 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 70 },
      webp: { quality: 70 },
      svgo: {
        plugins: [{ removeViewBox: false }, { cleanupIDs: false }]
      }
    }),
    
  ],
})

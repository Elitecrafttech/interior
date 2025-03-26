import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import viteImagemin from "vite-plugin-imagemin";
import compression from "vite-plugin-compression";
import inspect from "vite-plugin-inspect";
import { visualizer } from "rollup-plugin-visualizer";


// https://vite.dev/config/
export default defineConfig({
  build: {
    minify: "esbuild", // Faster minification than Terser
    cssCodeSplit: true, // Splits CSS into smaller chunks
    target: 'esnext',  // Reduce legacy JS
    sourcemap: false, // No source maps in production
    terserOptions: {
      compress: {
        drop_console: true, // Removes console.log for smaller JS size
        dead_code: true, // Removes unused code
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react')) return 'react-vendor';
          if (id.includes('node_modules/lodash')) return 'lodash-vendor';
          if (id.includes('node_modules')) return 'vendor';
        },
      },
      treeshake: true,
    },
  },

  plugins: [
    tailwindcss(), react(), compression(),
    compression({ algorithm: "gzip", threshold: 1000 }),
    compression({ algorithm: "brotliCompress", threshold: 1000 }),
     inspect(),
    viteImagemin({
      gifsicle: { optimizationLevel: 3 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 50 },
      webp: { quality: 50 },
      svgo: {
        plugins: [{ removeViewBox: false }, { cleanupIDs: false }]
      }
    }),
    visualizer({
      open: true, // Opens the report in browser
      filename: "stats.html", // Output file
      gzipSize: true, // Show gzip size
      brotliSize: true, // Show Brotli compression size
    }),
    
  ],
})

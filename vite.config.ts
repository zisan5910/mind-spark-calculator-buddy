
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    middlewareMode: false,
  },
  build: {
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'framer': ['framer-motion'],
          'react-vendor': ['react', 'react-dom'],
          'routing': ['react-scroll', 'react-router-dom'],
          'ui': ['lucide-react', 'clsx', 'tailwind-merge'],
        },
      },
    },
    chunkSizeWarningLimit: 500,
  },
  optimize: {
    esbuild: {
      pure: ['console.log', 'console.info'],
    },
  },
});

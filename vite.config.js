import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  outDir: 'dist',
  build: {
    chunkSizeWarningLimit: 30000000, // Set the limit to 1000 KB (default is 500 KB)
  },
})

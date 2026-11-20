import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    open: false,
    watch: {
      usePolling: true,
      interval: 1000
    }
  }
})

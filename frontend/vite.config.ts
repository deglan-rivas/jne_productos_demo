import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // just for development
  // server: {
  //   host: true,
  //   port: 5173,
  //   proxy: {
  //     '/api': {
  //       target: 'http://saas_backend:8000',
  //       changeOrigin: false,
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     }
  //   }
  // },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/server': {
          target: 'http://localhost:5000', // server host
          changeOrigin: true,
          secure: false, // disable ssl
          rewrite: (path) => path.replace(/^\/server/, '') // remove /server to url 
      }
    }
  }
})

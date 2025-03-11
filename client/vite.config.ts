import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// Define common proxy options
const proxyOptions = {
  target: 'http://localhost:5000', // Backend server URL
  changeOrigin: true,
  secure: false, // Disable SSL verification for development
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/socialmedia': { ...proxyOptions },
      '/api': {
        ...proxyOptions,
        rewrite: (path) => path.replace(/^\/api/, '') // remove /server to url 
      },
    }
  }
})

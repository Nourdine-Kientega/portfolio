import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',
  server: {
    port: 3000,
    host: '0.0.0.0', // permit other connexion like phone http://ipadress:portnumber
  },
  build: {
    outDir: 'dist',  // Le dossier de sortie dans 'client/dist'
    rollupOptions: {
      input: 'index.html',  // Point d'entrée principal dans 'client/index.html'
    },
  }
})

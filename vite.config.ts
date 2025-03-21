import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  server: {
    host: '0.0.0.0',
    port:  3000,
    strictPort: true, 
    allowedHosts: ['portfolio-5tmy.onrender.com'], 
  }
  
})


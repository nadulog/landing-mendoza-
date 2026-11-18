import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Por defecto la web se sirve desde la raíz (Netlify, Vercel, dominio propio).
// El workflow de GitHub Pages define BASE_PATH=/landing-mendoza-/ al compilar.
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || '/',
})

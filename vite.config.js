import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base = nombre del repo, necesario para GitHub Pages (https://nadulog.github.io/landing-mendoza-/)
export default defineConfig({
  plugins: [react()],
  base: '/landing-mendoza-/',
})

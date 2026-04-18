import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // 👈 ADD THIS LINE

  plugins: [
    react(),
    tailwindcss(),
  ],

  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        displaysBackdrops: path.resolve(__dirname, 'displays-backdrops.html'),
        tabletopGamingBackdrops: path.resolve(__dirname, 'tabletop-gaming-backdrops.html'),
      },
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

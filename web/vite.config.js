import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  resolve: {
    alias: {
      'src': path.resolve(__dirname, './src')
    }
  },
  build: {
    rollupOptions: {
      external: (id) => id.startsWith('/scripts/')
    }
  },
  plugins: [
    react()
  ],
})

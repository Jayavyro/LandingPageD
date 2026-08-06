import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile()],
  base: './',
  build: {
    outDir: 'dist-html',
    emptyOutDir: true,
    cssCodeSplit: false,
    assetsInlineLimit: 100_000_000,
    rollupOptions: {
      input: resolve(__dirname, 'index.singlefile.html'),
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { buildSitemapXml } from './src/constants/sitemap'

const rootDir = dirname(fileURLToPath(import.meta.url))

function sitemapPlugin() {
  return {
    name: 'generate-sitemap',
    closeBundle() {
      const xml = buildSitemapXml()
      writeFileSync(resolve(rootDir, 'dist/sitemap.xml'), xml)
      writeFileSync(resolve(rootDir, 'public/sitemap.xml'), xml)
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), sitemapPlugin()],
})

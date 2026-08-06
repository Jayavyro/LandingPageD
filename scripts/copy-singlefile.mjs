import { copyFileSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const distHtml = resolve(rootDir, 'dist-html', 'index.singlefile.html')
const outFile = resolve(rootDir, 'avyro-app.html')

if (!existsSync(distHtml)) {
  console.error('Missing build output:', distHtml)
  process.exit(1)
}

let html = readFileSync(distHtml, 'utf8')

// Ensure the standalone file keeps a stable name when opened locally.
html = html.replace(/<title>.*?<\/title>/, '<title>Avyro — AI-Native Operating System for AEC</title>')

writeFileSync(outFile, html, 'utf8')
copyFileSync(outFile, resolve(rootDir, 'dist-html', 'avyro-app.html'))

const sizeMb = (Buffer.byteLength(html, 'utf8') / (1024 * 1024)).toFixed(2)
console.log(`Created ${outFile} (${sizeMb} MB)`)
console.log('Open this file in a browser. Routes use hash URLs (e.g. #/pricing).')

/**
 * Export all site marketing content as JSON for DOCX generation.
 * Run: node --experimental-strip-types scripts/export-site-content.mjs
 * Or via tsx if available.
 */
import { writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { createRequire } from 'node:module'
import { build } from 'vite'
import { mkdirSync, rmSync, readFileSync, existsSync } from 'node:fs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const outDir = resolve(root, 'scripts/.content-export')
const outJson = resolve(root, 'scripts/site-content.json')

async function bundleAndLoad() {
  if (existsSync(outDir)) rmSync(outDir, { recursive: true, force: true })
  mkdirSync(outDir, { recursive: true })

  await build({
    configFile: false,
    root,
    logLevel: 'warn',
    build: {
      outDir,
      emptyOutDir: true,
      lib: {
        entry: resolve(root, 'scripts/site-content-entry.ts'),
        formats: ['es'],
        fileName: () => 'bundle.js',
      },
      rollupOptions: {
        external: [],
      },
      write: true,
    },
  })

  const bundlePath = resolve(outDir, 'bundle.js')
  const mod = await import(pathToFileURL(bundlePath).href)
  return mod.default ?? mod.siteContent ?? mod
}

const content = await bundleAndLoad()
writeFileSync(outJson, JSON.stringify(content, null, 2), 'utf8')
console.log('Wrote', outJson)
rmSync(outDir, { recursive: true, force: true })

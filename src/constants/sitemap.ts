import { SITE_ORIGIN } from './siteConfig'
import { getPublicSiteRoutes } from './siteRoutes'

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

function formatLastMod(date: Date): string {
  return date.toISOString().slice(0, 10)
}

export function buildSitemapXml(lastModified = new Date()): string {
  const lastmod = formatLastMod(lastModified)
  const urls = getPublicSiteRoutes()
    .map(({ path, changefreq, priority }) => {
      const loc = path === '/' ? SITE_ORIGIN : `${SITE_ORIGIN}${path}`

      return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
}

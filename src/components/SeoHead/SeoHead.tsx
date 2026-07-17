import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getCanonicalUrl, getOgImageUrl, getPageSeo } from '../../constants/seo'

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element!.setAttribute(key, value)
  })
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

function SeoHead() {
  const { pathname } = useLocation()

  useEffect(() => {
    const seo = getPageSeo(pathname)
    const canonical = getCanonicalUrl(seo.path)
    const image = getOgImageUrl(seo.image)
    const robots = seo.noindex ? 'noindex, nofollow' : 'index, follow'

    document.title = seo.title

    upsertMeta('meta[name="description"]', { name: 'description', content: seo.description })
    upsertMeta('meta[name="keywords"]', { name: 'keywords', content: seo.keywords ?? '' })
    upsertMeta('meta[name="robots"]', { name: 'robots', content: robots })

    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: seo.title })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: seo.description })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image })
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'Avyro' })
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_US' })

    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: seo.title })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: seo.description })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image })

    upsertLink('canonical', canonical)
  }, [pathname])

  return null
}

export default SeoHead

import { ACCOUNTANTS_CFOS_HEADLINE, ACCOUNTANTS_CFOS_SUBTITLE } from './accountantsCfos'
import { getFeaturePage } from './featurePages'
import { getIndustryPage, INDUSTRY_PAGE_LABELS } from './industryPages'
import { OPERATIONS_LEADERS_HEADLINE, OPERATIONS_LEADERS_SUBTITLE } from './operationsLeaders'
import { PRICING_HERO } from './pricingPage'
import { PRINCIPAL_OWNERS_HEADLINE, PRINCIPAL_OWNERS_SUBTITLE } from './principalOwners'
import { getProductPage, PRODUCT_PAGE_LABELS } from './productPages'
import { PROJECT_MANAGERS_HEADLINE, PROJECT_MANAGERS_SUBTITLE } from './projectManagers'
import { RESOURCES_HERO, resolveResourceTabId } from './resourcesPage'
import { RESOURCES_LINKS } from './resourcesMenu'
import {
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_ORIGIN,
  SITE_TAGLINE,
} from './siteConfig'

export interface PageSeo {
  title: string
  description: string
  path: string
  keywords?: string
  image?: string
  noindex?: boolean
}

const USE_CASE_SEO: Record<string, Pick<PageSeo, 'title' | 'description'>> = {
  'project-managers': {
    title: `${PROJECT_MANAGERS_HEADLINE} | ${SITE_NAME}`,
    description: PROJECT_MANAGERS_SUBTITLE,
  },
  'principals-owners': {
    title: `${PRINCIPAL_OWNERS_HEADLINE} | ${SITE_NAME}`,
    description: PRINCIPAL_OWNERS_SUBTITLE,
  },
  'operations-leaders': {
    title: `${OPERATIONS_LEADERS_HEADLINE} | ${SITE_NAME}`,
    description: OPERATIONS_LEADERS_SUBTITLE,
  },
  'accountants-cfos': {
    title: `${ACCOUNTANTS_CFOS_HEADLINE} | ${SITE_NAME}`,
    description: ACCOUNTANTS_CFOS_SUBTITLE,
  },
}

function absoluteUrl(path: string): string {
  return path === '/' ? SITE_ORIGIN : `${SITE_ORIGIN}${path}`
}

function withDefaults(seo: Omit<PageSeo, 'keywords' | 'image'> & Partial<Pick<PageSeo, 'keywords' | 'image'>>): PageSeo {
  return {
    keywords: SITE_KEYWORDS,
    image: SITE_OG_IMAGE,
    ...seo,
  }
}

export function getDefaultSeo(): PageSeo {
  return withDefaults({
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    path: '/',
  })
}

export function getPageSeo(pathname: string): PageSeo {
  const path = pathname.replace(/\/+$/, '') || '/'

  if (path === '/') {
    return getDefaultSeo()
  }

  if (path === '/pricing') {
    return withDefaults({
      title: `${PRICING_HERO.title} | ${SITE_NAME}`,
      description: PRICING_HERO.subtitle,
      path,
    })
  }

  const useCaseMatch = path.match(/^\/use-case\/([^/]+)$/)
  if (useCaseMatch) {
    const useCase = USE_CASE_SEO[useCaseMatch[1]]
    if (useCase) {
      return withDefaults({ ...useCase, path })
    }
  }

  const productMatch = path.match(/^\/products\/([^/]+)$/)
  if (productMatch) {
    const productId = productMatch[1]
    const feature = getFeaturePage(productId)
    if (feature) {
      return withDefaults({
        title: `${feature.headline} ${feature.headlineAccent} | ${SITE_NAME}`,
        description: feature.subtitle,
        path,
      })
    }

    const product = getProductPage(productId)
    if (product) {
      return withDefaults({
        title: `${product.headline} | ${SITE_NAME}`,
        description: product.subtitle,
        path,
      })
    }

    const label = PRODUCT_PAGE_LABELS[productId as keyof typeof PRODUCT_PAGE_LABELS]
    if (label) {
      return withDefaults({
        title: `${label} | ${SITE_NAME}`,
        description: SITE_DESCRIPTION,
        path,
      })
    }
  }

  const industryMatch = path.match(/^\/industry\/([^/]+)$/)
  if (industryMatch) {
    const industry = getIndustryPage(industryMatch[1])
    if (industry) {
      return withDefaults({
        title: `${industry.headline} | ${SITE_NAME}`,
        description: industry.subtitle,
        path,
      })
    }

    const label = INDUSTRY_PAGE_LABELS[industryMatch[1] as keyof typeof INDUSTRY_PAGE_LABELS]
    if (label) {
      return withDefaults({
        title: `${label} Firms | ${SITE_NAME}`,
        description: SITE_DESCRIPTION,
        path,
      })
    }
  }

  const resourcesMatch = path.match(/^\/resources(?:\/([^/]+))?$/)
  if (resourcesMatch) {
    const tabId = resolveResourceTabId(resourcesMatch[1])
    const resource = tabId ? RESOURCES_LINKS.find((item) => item.id === tabId) : null

    return withDefaults({
      title: resource
        ? `${resource.label} | ${SITE_NAME} Resources`
        : `${RESOURCES_HERO.title} | ${SITE_NAME}`,
      description: resource?.description ?? RESOURCES_HERO.subtitle,
      path: tabId ? `/resources/${tabId}` : '/resources',
    })
  }

  return withDefaults({
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    path,
    noindex: true,
  })
}

export function getCanonicalUrl(path: string): string {
  return absoluteUrl(path)
}

export function getOgImageUrl(image = SITE_OG_IMAGE): string {
  return image.startsWith('http') ? image : absoluteUrl(image)
}

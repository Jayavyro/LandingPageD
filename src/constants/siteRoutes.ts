import { INDUSTRY_ROUTES } from './industryRoutes'
import { PRICING_ROUTE } from './pricingPage'
import { PRIVACY_ROUTE } from './privacyPage'
import { PRODUCT_ROUTES } from './productRoutes'
import type { ResourceTabId } from './resourcesPage'
import { TERMS_ROUTE } from './termsPage'

export const USE_CASE_ROUTES = [
  '/use-case/project-managers',
  '/use-case/principals-owners',
  '/use-case/operations-leaders',
  '/use-case/accountants-cfos',
] as const

export const RESOURCE_TAB_IDS: ResourceTabId[] = [
  'blog',
  'case-studies',
  'videos',
  'documentation',
  'benefits',
  'competitive-comparisons',
]

export interface SiteRouteEntry {
  path: string
  changefreq: 'weekly' | 'monthly'
  priority: number
}

function resourceRoutes(): SiteRouteEntry[] {
  return RESOURCE_TAB_IDS.map((tabId) => ({
    path: `/resources/${tabId}`,
    changefreq: 'monthly' as const,
    priority: 0.6,
  }))
}

export function getPublicSiteRoutes(): SiteRouteEntry[] {
  return [
    { path: '/', changefreq: 'weekly', priority: 1 },
    { path: PRICING_ROUTE, changefreq: 'monthly', priority: 0.8 },
    { path: TERMS_ROUTE, changefreq: 'monthly', priority: 0.3 },
    { path: PRIVACY_ROUTE, changefreq: 'monthly', priority: 0.3 },
    ...Object.values(PRODUCT_ROUTES).map((path) => ({
      path,
      changefreq: 'monthly' as const,
      priority: 0.8,
    })),
    ...Object.values(INDUSTRY_ROUTES).map((path) => ({
      path,
      changefreq: 'monthly' as const,
      priority: 0.8,
    })),
    ...USE_CASE_ROUTES.map((path) => ({
      path,
      changefreq: 'monthly' as const,
      priority: 0.8,
    })),
    ...resourceRoutes(),
  ]
}

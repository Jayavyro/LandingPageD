export const INDUSTRY_ROUTES = {
  architecture: '/industry/architecture',
  engineering: '/industry/engineering',
  construction: '/industry/construction',
} as const

export type IndustryRouteId = keyof typeof INDUSTRY_ROUTES

export const INDUSTRY_ROUTE_IDS = Object.keys(INDUSTRY_ROUTES) as IndustryRouteId[]

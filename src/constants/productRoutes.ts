export const PRODUCT_ROUTES = {
  crm: '/products/crm',
  billing: '/products/billing',
  assets: '/products/assets',
  proposals: '/products/proposals',
  resource: '/products/resource',
  activity: '/products/activity',
  timesheets: '/products/timesheets',
  platform: '/products/platform',
} as const

export type ProductRouteId = keyof typeof PRODUCT_ROUTES

export const PLATFORM_MODULE_ANCHORS = {
  approvals: 'approvals',
  bulk: 'bulk-uploader',
  analytics: 'analytics',
  integrations: 'integrations',
} as const

export function isProductRouteId(id: string | undefined): id is ProductRouteId {
  return Boolean(id && id in PRODUCT_ROUTES)
}

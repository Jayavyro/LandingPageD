import type { ResourceLink } from './resourcesMenu'

export type ResourceTabId =
  | 'blog'
  | 'case-studies'
  | 'videos'
  | 'documentation'
  | 'benefits'
  | 'competitive-comparisons'

export const RESOURCES_HERO = {
  badge: 'Resources',
  title: 'Guides, comparisons, and firm know-how',
  subtitle:
    'Practical content for AEC operators—implementation guides, workflow walkthroughs, case scenarios, and head-to-head platform comparisons.',
} as const

export const DEFAULT_RESOURCE_TAB: ResourceTabId = 'competitive-comparisons'

const LEGACY_TAB_ALIASES: Record<string, ResourceTabId> = {
  blog: 'blog',
  'enterprise-blog': 'blog',
  'case-studies': 'case-studies',
  videos: 'videos',
  'user-guides': 'videos',
  documentation: 'documentation',
  benefits: 'benefits',
  all: 'benefits',
  'competitive-comparisons': 'competitive-comparisons',
}

export function resolveResourceTabId(value: string | undefined): ResourceTabId | null {
  if (!value) return null
  return LEGACY_TAB_ALIASES[value] ?? null
}

export function isResourceTabId(value: string | undefined): value is ResourceTabId {
  return resolveResourceTabId(value) !== null
}

export function getResourceTabRoute(id: ResourceTabId): string {
  return `/resources/${id}`
}

export function getResourceTabFromLink(link: ResourceLink): ResourceTabId {
  const segment = link.href.replace('/resources/', '')
  return resolveResourceTabId(segment) ?? DEFAULT_RESOURCE_TAB
}

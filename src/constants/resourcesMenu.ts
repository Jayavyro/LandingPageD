export type ResourceIconName =
  | 'blog'
  | 'case-studies'
  | 'videos'
  | 'documentation'
  | 'benefits'
  | 'comparisons'

export type ResourceTabId =
  | 'blog'
  | 'case-studies'
  | 'videos'
  | 'documentation'
  | 'benefits'
  | 'competitive-comparisons'

export interface ResourceLink {
  id: ResourceTabId
  label: string
  description: string
  href: string
  icon: ResourceIconName
}

export const RESOURCES_LINKS: ResourceLink[] = [
  {
    id: 'blog',
    label: 'Blog',
    description: 'Latest insights and product updates.',
    href: '/resources/blog',
    icon: 'blog',
  },
  {
    id: 'case-studies',
    label: 'Case Studies',
    description: 'See how firms succeed with Avyro.',
    href: '/resources/case-studies',
    icon: 'case-studies',
  },
  {
    id: 'videos',
    label: 'Videos',
    description: 'Watch tutorials and walkthroughs.',
    href: '/resources/videos',
    icon: 'videos',
  },
  {
    id: 'documentation',
    label: 'Documentation',
    description: 'Guides to get started quickly.',
    href: '/resources/documentation',
    icon: 'documentation',
  },
  {
    id: 'benefits',
    label: 'Benefits',
    description: 'Explore what Avyro delivers for your firm.',
    href: '/resources/benefits',
    icon: 'benefits',
  },
  {
    id: 'competitive-comparisons',
    label: 'Competitive Comparisons',
    description: 'Compare Avyro with other AEC ERP and PSA platforms.',
    href: '/resources/competitive-comparisons',
    icon: 'comparisons',
  },
]

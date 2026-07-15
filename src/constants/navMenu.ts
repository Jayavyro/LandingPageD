import { PRODUCT_ROUTES } from './productRoutes'
import { PRICING_ROUTE } from './pricingPage'

export type ModuleIconName =
  | 'crm'
  | 'billing'
  | 'asset'
  | 'hrms'
  | 'resource'
  | 'project'
  | 'activity'
  | 'timesheet'
  | 'approval'
  | 'ai'
  | 'analytics'
  | 'integration'
  | 'bulk'
  | 'workforce'
  | 'talent'
  | 'recruitment'

export interface ProductModule {
  title: string
  description: string
  icon: ModuleIconName
  href?: string
}

export interface MenuSection {
  title: string
  items: ProductModule[]
}

export const PROJECTS_MENU: MenuSection[] = [
  {
    title: 'Business Operations',
    items: [
      {
        title: 'AI-Powered CRM',
        description: 'Manage clients and opportunities in one place.',
        icon: 'crm',
        href: PRODUCT_ROUTES.crm,
      },
      {
        title: 'Billing & Invoice',
        description: 'Create and send invoices effortlessly.',
        icon: 'billing',
        href: PRODUCT_ROUTES.billing,
      },
      {
        title: 'Asset Management',
        description: 'Track firm assets and utilization.',
        icon: 'asset',
        href: PRODUCT_ROUTES.assets,
      },
      {
        title: 'Proposal Management',
        description: 'Win more work with streamlined proposals.',
        icon: 'analytics',
        href: PRODUCT_ROUTES.proposals,
      },
    ],
  },
  {
    title: 'Project Execution',
    items: [
      {
        title: 'Resource Management',
        description: 'Assign the right people to every project.',
        icon: 'resource',
        href: PRODUCT_ROUTES.resource,
      },
      {
        title: 'Activity Tracker',
        description: 'Monitor project activity in real time.',
        icon: 'activity',
        href: PRODUCT_ROUTES.activity,
      },
      {
        title: 'Smart Timesheets',
        description: 'Capture time accurately with zero friction.',
        icon: 'timesheet',
        href: PRODUCT_ROUTES.timesheets,
      },
    ],
  },
  {
    title: 'Platform',
    items: [
      {
        title: 'Approval Workflows',
        description: 'Route reviews and sign-offs automatically.',
        icon: 'approval',
        href: `${PRODUCT_ROUTES.platform}#approvals`,
      },
      {
        title: 'Bulk Uploader',
        description: 'Import data at scale in minutes.',
        icon: 'bulk',
        href: `${PRODUCT_ROUTES.platform}#bulk-uploader`,
      },
      {
        title: 'Analytics',
        description: 'Turn project data into actionable insights.',
        icon: 'analytics',
        href: `${PRODUCT_ROUTES.platform}#analytics`,
      },
      {
        title: 'Integrations',
        description: 'Connect your favorite tools seamlessly.',
        icon: 'integration',
        href: `${PRODUCT_ROUTES.platform}#integrations`,
      },
    ],
  },
]

export const FEATURED_OFFERING = {
  tag: 'Smart Timesheets',
  title: 'Auto-mapping',
  description:
    'Timesheet entries route straight to the right project, no manual tagging.',
  ctaLabel: 'Learn more',
  ctaHref: PRODUCT_ROUTES.timesheets,
}

export const SCHEDULER_OFFERING = {
  tag: 'Resource Scheduler',
  title: 'Gantt Chart',
  description:
    'Visual planning built for AEC project delivery.',
  ctaLabel: 'Explore scheduler',
  ctaHref: PRODUCT_ROUTES.resource,
}

export const NAV_LINKS = [
  { label: 'Pricing', href: PRICING_ROUTE },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact Us', href: '/#contact-us' },
]

export const WHY_AVYRO_LINK = {
  label: 'Why Avyro?',
  href: '/#why-avyro',
}

import type { LucideIcon } from 'lucide-react'
import {
  BarChart3,
  CheckSquare,
  ClipboardList,
  Clock3,
  Handshake,
  ReceiptText,
  Activity,
  UsersRound,
} from 'lucide-react'
import { PRODUCT_ROUTES } from './productRoutes'

export interface ExplorePlatformModule {
  id: string
  name: string
  description: string
  href: string
  icon: LucideIcon
}

export const EXPLORE_PLATFORM_BADGE = 'Explore the Platform'

export const EXPLORE_PLATFORM_HEADLINE = 'Everything your firm needs.'
export const EXPLORE_PLATFORM_HEADLINE_ACCENT = 'One operating system.'

export const EXPLORE_PLATFORM_SUBTITLE =
  'Avyro brings CRM, planning, delivery, time, billing, and analytics into one system built for AEC. Every module shares the same operational foundation — so the business runs as one, not as a stack of tools.'

export const EXPLORE_PLATFORM_CTA_LABEL = 'Learn More'

export const EXPLORE_PLATFORM_MODULES: ExplorePlatformModule[] = [
  {
    id: 'crm',
    name: 'CRM',
    description: 'Win more work with pursuits that open straight into delivery.',
    href: PRODUCT_ROUTES.crm,
    icon: Handshake,
  },
  {
    id: 'resource-planning',
    name: 'Resource Planning',
    description: 'Staff the right team before capacity and utilization slip.',
    href: PRODUCT_ROUTES.resource,
    icon: UsersRound,
  },
  {
    id: 'project-management',
    name: 'Project Management',
    description: 'Deliver every job from one live plan, budget, and timeline.',
    href: PRODUCT_ROUTES['gantt-chart'],
    icon: ClipboardList,
  },
  {
    id: 'activity-tracking',
    name: 'Activity Tracking',
    description: 'See work as it happens — not after the week is reconstructed.',
    href: PRODUCT_ROUTES.activity,
    icon: Activity,
  },
  {
    id: 'smart-timesheets',
    name: 'Smart Timesheets',
    description: 'Capture billable hours accurately with far less admin.',
    href: PRODUCT_ROUTES.timesheets,
    icon: Clock3,
  },
  {
    id: 'billing',
    name: 'Billing & Invoicing',
    description: 'Invoice from approved work and get paid faster.',
    href: PRODUCT_ROUTES.billing,
    icon: ReceiptText,
  },
  {
    id: 'analytics',
    name: 'Analytics',
    description: 'Decide from live firm performance — not month-end reports.',
    href: `${PRODUCT_ROUTES.platform}#analytics`,
    icon: BarChart3,
  },
  {
    id: 'approvals',
    name: 'Approvals',
    description: 'Keep sign-offs moving without bottlenecks or email chains.',
    href: `${PRODUCT_ROUTES.platform}#approvals`,
    icon: CheckSquare,
  },
]

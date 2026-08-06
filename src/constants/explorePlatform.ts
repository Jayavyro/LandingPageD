import type { LucideIcon } from 'lucide-react'
import {
  BarChart3,
  ClipboardList,
  Clock3,
  FileText,
  Handshake,
  Laptop,
  ReceiptText,
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

export const EXPLORE_PLATFORM_BADGE = 'One Connected System'

export const EXPLORE_PLATFORM_HEADLINE = 'One record, eight capabilities.'
export const EXPLORE_PLATFORM_HEADLINE_ACCENT = 'Nothing rebuilt as you grow.'

export const EXPLORE_PLATFORM_SUBTITLE =
  'CRM, proposals, resource allocation, smart timesheets, project management, billing, assets, and workforce productivity — reading and writing to the same record so nothing is ever re-entered, re-explained, or rebuilt.'

export const EXPLORE_PLATFORM_CTA_LABEL = 'Learn More'

export const EXPLORE_PLATFORM_MODULES: ExplorePlatformModule[] = [
  {
    id: 'crm',
    name: 'CRM',
    description: 'Track leads and opportunities from first contact, with the work plan starting here.',
    href: PRODUCT_ROUTES.crm,
    icon: Handshake,
  },
  {
    id: 'proposals',
    name: 'Proposals',
    description: 'Scope goes out from the same record that won the lead.',
    href: PRODUCT_ROUTES.proposals,
    icon: FileText,
  },
  {
    id: 'resource-allocation',
    name: 'Resource Allocation',
    description: 'See real-time studio bandwidth against won and pipeline work.',
    href: PRODUCT_ROUTES.resource,
    icon: UsersRound,
  },
  {
    id: 'smart-timesheets',
    name: 'Smart Timesheets',
    description: 'Hours log in seconds against the actual project plan.',
    href: PRODUCT_ROUTES.timesheets,
    icon: Clock3,
  },
  {
    id: 'project-management',
    name: 'Project Management',
    description: 'Track milestones, deliverables, and budget against plan — one view.',
    href: PRODUCT_ROUTES['gantt-chart'],
    icon: ClipboardList,
  },
  {
    id: 'billing',
    name: 'Billing & Invoicing',
    description: 'AIA-style progress billing pulled straight from approved hours.',
    href: PRODUCT_ROUTES.billing,
    icon: ReceiptText,
  },
  {
    id: 'assets',
    name: 'IT & Asset Mgmt',
    description: 'Track firm assets and utilization on the same operational foundation.',
    href: PRODUCT_ROUTES.assets,
    icon: Laptop,
  },
  {
    id: 'workforce-productivity',
    name: 'Workforce Productivity',
    description: 'Firm-wide visibility into where time and effort are actually going.',
    href: `${PRODUCT_ROUTES.platform}#analytics`,
    icon: BarChart3,
  },
]

import type { LucideIcon } from 'lucide-react'
import {
  BarChart3,
  Box,
  CircleDollarSign,
  Clock,
  CloudUpload,
  ShieldCheck,
  TrendingUp,
  Users,
  UsersRound,
} from 'lucide-react'
import { PRODUCT_ROUTES } from './productRoutes'

export type ProductAccent = 'blue' | 'green' | 'purple' | 'orange'

export interface ProductItem {
  id: string
  title: string
  description: string
  href: string
  icon: LucideIcon
  accent: ProductAccent
}

export const PRODUCTS_HEADLINE = 'Products'

export const PRODUCTS_SUBTITLE =
  'Powerful modules. One connected platform. Choose a module to explore how Avyro can transform your operations.'

export const PRODUCTS: ProductItem[] = [
  {
    id: 'crm',
    title: 'AI-Powered CRM',
    description: 'Build stronger relationships and win more work.',
    href: PRODUCT_ROUTES.crm,
    icon: Users,
    accent: 'blue',
  },
  {
    id: 'resource',
    title: 'Resource Allocation',
    description: 'Understand capacity at a glance.',
    href: PRODUCT_ROUTES.resource,
    icon: UsersRound,
    accent: 'green',
  },
  {
    id: 'timesheets',
    title: 'Smart Timesheets',
    description: 'Know exactly where time goes.',
    href: PRODUCT_ROUTES.timesheets,
    icon: Clock,
    accent: 'purple',
  },
  {
    id: 'billing',
    title: 'Billing & Invoice',
    description: 'Get paid faster with less effort.',
    href: PRODUCT_ROUTES.billing,
    icon: CircleDollarSign,
    accent: 'orange',
  },
  {
    id: 'activity',
    title: 'Activity Tracker',
    description: 'Stay on top of every project detail.',
    href: PRODUCT_ROUTES.activity,
    icon: TrendingUp,
    accent: 'blue',
  },
  {
    id: 'assets',
    title: 'Asset Management',
    description: "Know what you own and how it's used.",
    href: PRODUCT_ROUTES.assets,
    icon: Box,
    accent: 'green',
  },
  {
    id: 'approvals',
    title: 'Approval Workflows',
    description: 'Keep sign-offs moving without bottlenecks.',
    href: `${PRODUCT_ROUTES.platform}#approvals`,
    icon: ShieldCheck,
    accent: 'purple',
  },
  {
    id: 'bulk',
    title: 'Bulk Uploader',
    description: 'Move bulk data without manual entry.',
    href: `${PRODUCT_ROUTES.platform}#bulk-uploader`,
    icon: CloudUpload,
    accent: 'green',
  },
  {
    id: 'analytics',
    title: 'Analytics',
    description: "See what's working before it's too late.",
    href: `${PRODUCT_ROUTES.platform}#analytics`,
    icon: BarChart3,
    accent: 'blue',
  },
]

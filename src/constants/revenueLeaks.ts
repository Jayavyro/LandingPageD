import type { LucideIcon } from 'lucide-react'
import { FileWarning, Layers, UsersRound } from 'lucide-react'

export type RevenueLeakAccent = 'blue' | 'purple' | 'orange'

export const REVENUE_LEAK_ACCENTS: Record<RevenueLeakAccent, string> = {
  blue: '#3b82f6',
  purple: '#8b5cf6',
  orange: '#f97316',
}

export interface RevenueLeakItem {
  id: string
  icon: LucideIcon
  number: string
  title: string
  description: string
  why: string
  accent: RevenueLeakAccent
}

export const REVENUE_LEAKS_BADGE = 'The problem'

export const REVENUE_LEAKS_HEADLINE = 'Where a 50-person firm loses ~$1.5M a year.'

export const REVENUE_LEAKS_SUBTITLE =
  'Not fraud. Not bad clients. Just under-utilization, missed billing, and the tools meant to prevent both — working against each other.'

export const REVENUE_LEAKS_ITEMS: RevenueLeakItem[] = [
  {
    id: 'utilization',
    icon: UsersRound,
    number: '$680K',
    title: 'Lost to under-utilization',
    description:
      'Industry average is 59%. Healthy is 70%. That 11-point gap is ~5,500 unbilled hours a year at $125/hr.',
    why: 'Utilization lives in spreadsheets and shows up monthly — after the hours are already gone.',
    accent: 'blue',
  },
  {
    id: 'invoicing',
    icon: FileWarning,
    number: '$680–850K',
    title: 'Lost to under-invoicing',
    description:
      '8–10% of project value never reaches an invoice — untracked tasks, missed change orders, time that never gets billed.',
    why: 'Time, scope, and billing sit in separate tools, so they drift apart within weeks.',
    accent: 'purple',
  },
  {
    id: 'tooling',
    icon: Layers,
    number: '$120K',
    title: 'Spent on the tools causing it',
    description:
      'Typical annual spend across CRM, resourcing, time, and billing — usually 4 to 6 disconnected products.',
    why: 'Enterprise prices. No enterprise outcomes. Pure overhead.',
    accent: 'orange',
  },
]

export const REVENUE_LEAKS_TOTAL = '~$1.5M / year for a typical 50-person firm'

export const REVENUE_LEAKS_CLOSING_TEXT = 'See what this costs your firm'
export const REVENUE_LEAKS_CLOSING_HREF = '#financial-calculator'

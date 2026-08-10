import type { LucideIcon } from 'lucide-react'
import { Clock3, FileWarning, UsersRound } from 'lucide-react'

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

export const REVENUE_LEAKS_BADGE = 'Why Avyro'

export const REVENUE_LEAKS_HEADLINE = 'Most firms are only running at six days out of ten.'

export const REVENUE_LEAKS_STAT = '60%'

export const REVENUE_LEAKS_STAT_CAPTION_BEFORE =
  'Average studio utilization across A&E firms industry-wide — '

export const REVENUE_LEAKS_STAT_CITE = 'Deltek Clarity, 2026'

export const REVENUE_LEAKS_STAT_CAPTION_AFTER =
  '. High performers routinely clear 72%. That gap is where disconnected tools quietly cost firms the most.'

export const REVENUE_LEAKS_SUBTITLE =
  'Average studio utilization across A&E firms industry-wide is 60% — Deltek Clarity, 2026. High performers routinely clear 72%. That gap is where disconnected tools quietly cost firms the most.'

export const REVENUE_LEAKS_ITEMS: RevenueLeakItem[] = [
  {
    id: 'won-unbilled',
    icon: FileWarning,
    number: '01',
    title: 'Won scope, unbilled.',
    description:
      "Work gets sold and re-entered — sometimes never fully — into resourcing. What's won and what's staffed quietly drift apart.",
    why: 'Handoffs between BD and delivery break the work plan.',
    accent: 'purple',
  },
  {
    id: 'bandwidth-guessed',
    icon: UsersRound,
    number: '02',
    title: 'Bandwidth, guessed.',
    description:
      "Without a live view of studio capacity, staffing decisions are made on gut feel and last week's spreadsheet — not this week's reality.",
    why: 'Capacity lives in inboxes and memory, not one live view.',
    accent: 'blue',
  },
  {
    id: 'billing-delayed',
    icon: Clock3,
    number: '03',
    title: 'Billing, delayed.',
    description:
      "Hours sit in disconnected timesheets before they reach billing, pushing out cash collection on work that's already been delivered.",
    why: 'Time and billing never share the same record.',
    accent: 'orange',
  },
]
import type { LucideIcon } from 'lucide-react'
import { CircleDollarSign, Clock, UsersRound } from 'lucide-react'

export interface WhyAvyroV2Feature {
  title: string
  metric: string
  metricLabel: string
  icon: LucideIcon
}

export const WHY_AVYRO_V2_BADGE = 'Why Firms Choose AVYRO'

export const WHY_AVYRO_V2_HEADLINE_LINES = [
  'One platform.',
  'Every workflow.',
] as const

export const WHY_AVYRO_V2_HEADLINE_ACCENT = 'Better business performance.'

export const WHY_AVYRO_V2_SUBTITLE_PARAS = [
  'Most AEC firms lose time switching between disconnected systems, rebuilding information, and chasing updates.',
 ] as const

export const WHY_AVYRO_V2_FEATURES: WhyAvyroV2Feature[] = [
  {
    title: 'Recover Billable Hours',
    metric: '10+ Hours',
    metricLabel:
      'Recovered per employee every week through intelligent time capture.',
    icon: Clock,
  },
  {
    title: 'Increase Resource Utilization',
    metric: '15%+',
    metricLabel:
      'Keep the right people on the right projects at the right time.',
    icon: UsersRound,
  },
  {
    title: 'Reduce Software Costs',
    metric: 'Up to 40%',
    metricLabel:
      'Replace multiple disconnected applications with one integrated platform.',
    icon: CircleDollarSign,
  },
]

import type { LucideIcon } from 'lucide-react'
import { CircleDollarSign, Clock, UsersRound } from 'lucide-react'

export interface WhyAvyroV2Feature {
  title: string
  metric: string
  metricLabel: string
  icon: LucideIcon
}

export const WHY_AVYRO_V2_BADGE = 'What You Get'

export const WHY_AVYRO_V2_HEADLINE_LINES = [
  'Because of everything above,',
] as const

export const WHY_AVYRO_V2_HEADLINE_ACCENT = 'here is what your firm gets back.'

export const WHY_AVYRO_V2_SUBTITLE_PARAS = [
  'When CRM, resourcing, delivery, timesheets, and billing share one record, the gaps that leak hours and delay invoices disappear. These are the outcomes firms see once the products above are connected.',
] as const

export const WHY_AVYRO_V2_FEATURES: WhyAvyroV2Feature[] = [
  {
    title: 'Billable hours recovered',
    metric: '10+ hrs/week',
    metricLabel:
      'Per employee. Activity Tracker and Smart Timesheets map work to the right project automatically — hours that used to vanish now land on invoices.',
    icon: Clock,
  },
  {
    title: 'Utilization gained',
    metric: '15%+',
    metricLabel:
      'Resource Planning and Project Delivery give one live capacity view. No overbooking, no idle bench, no guessing who is free next week.',
    icon: UsersRound,
  },
  {
    title: 'Software spend cut',
    metric: 'Up to 40%',
    metricLabel:
      'One platform replaces the CRM + PM + timesheet + billing + BI license pile — one record, one bill, fewer tools to babysit.',
    icon: CircleDollarSign,
  },
]

import { BarChart3, Clock, TrendingUp, type LucideIcon } from 'lucide-react'

export interface TrustBarStat {
  id: string
  icon: LucideIcon
  metric: string
  label: string
}

export const TRUST_BAR_LABEL = 'Trusted by teams at'

export const TRUST_BAR_BRAND = 'fivD'

export const TRUST_BAR_STATS: TrustBarStat[] = [
  {
    id: 'hours-recovered',
    icon: Clock,
    metric: '10+ hrs',
    label: 'recovered per person, every week',
  },
  {
    id: 'payment-speed',
    icon: TrendingUp,
    metric: '1.8×',
    label: 'faster time to payment',
  },
  {
    id: 'utilization',
    icon: BarChart3,
    metric: '15%+',
    label: 'utilization gained',
  },
]

export const TRUST_BAR_CAPTION =
  "Figures measured on Avyro's connected record — CRM, projects, timesheets, and billing in one place."

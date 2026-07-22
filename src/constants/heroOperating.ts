export interface HeroContinuumNode {
  id: string
  label: string
}

export interface HeroWorkRow {
  id: string
  project: string
  status: string
}

export const HERO_CONTINUUM_NODES: HeroContinuumNode[] = [
  { id: 'win', label: 'Win' },
  { id: 'plan', label: 'Plan' },
  { id: 'deliver', label: 'Deliver' },
  { id: 'bill', label: 'Bill' },
  { id: 'lead', label: 'Lead' },
]

export const HERO_CONTINUUM_CAPTION = 'Operating continuum'

export const HERO_PULSE_CARD = {
  eyebrow: 'FIRM PULSE',
  value: '68%',
  label: 'Utilization · live',
  foot: 'Studio capacity clear across 42 people',
} as const

export const HERO_MOTION_CARD = {
  eyebrow: 'IN MOTION',
  rows: [
    { id: '1', project: 'Tower Annex · SD', status: 'On plan' },
    { id: '2', project: 'Civic Hall · DD', status: 'Staffed' },
    { id: '3', project: 'Data Center · CD', status: 'Billing ready' },
  ] satisfies HeroWorkRow[],
  foot: 'Same record the team is working',
} as const

export const HERO_CASH_CARD = {
  eyebrow: 'CASH',
  value: 'Invoice ready',
  label: 'Approved hours → bill today',
  foot: '1.8× faster to payment',
} as const

export const HERO_PRINCIPAL_CARD = {
  eyebrow: 'PRINCIPAL',
  title: 'One business. One view.',
  body: 'Pipeline, delivery, and cash on a single operating record',
  micro: '+$25K revenue per employee',
} as const

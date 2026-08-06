export interface ProductModuleCard {
  id: string
  code: string
  title: string
  description: string
  features: string[]
}

export const PRODUCT_DRIVE_BADGE = 'Avyro Drive'

export const PRODUCT_DRIVE_HEADLINE =
  'Run every project like you\'re watching it happen.'

export const PRODUCT_DRIVE_SUBTITLE =
  'Project Management, Smart Timesheets, and Workforce Productivity. Everything a PM needs day to day, in one simple product — no CRM, no billing.'

export const PRODUCT_DRIVE_PRIMARY_CTA = {
  label: 'Book a demo',
  href: '#contact-us',
} as const

export const PRODUCT_DRIVE_SECONDARY_CTA = {
  label: 'See Drive pricing',
  href: '#pricing',
} as const

export const PRODUCT_DRIVE_MODULES: ProductModuleCard[] = [
  {
    id: 'project-management',
    code: '01',
    title: 'Project Management',
    description:
      'Track milestones, deliverables, and budget against plan — one view instead of five spreadsheets.',
    features: [
      'Real-time task visibility across the whole project',
      'Task-to-manpower mapping — see who\'s on what',
      'Add or remove manpower mid-project without losing history',
      'Shift timelines and cascade the changes downstream',
      'Milestone & deliverable tracking against plan',
      'Budget vs. actual, updated live',
    ],
  },
  {
    id: 'smart-timesheets',
    code: '02',
    title: 'Smart Timesheets',
    description:
      'Hours log in seconds against the actual project plan — less chasing, more accurate records.',
    features: [
      'One-click logging against the live task list',
      'Auto-suggested entries from the day\'s activity',
      'Built-in approval workflows',
      'Full audit trail — nothing reconstructed after the fact',
      'Mobile-friendly logging from the field',
    ],
  },
  {
    id: 'workforce-productivity',
    code: '03',
    title: 'Workforce Productivity',
    description:
      'Firm-wide visibility into where time and effort are actually going, updated live.',
    features: [
      'Team-wide utilization dashboard',
      'Individual productivity trends over time',
      'Bench and idle-time visibility',
      'Capacity vs. demand forecasting',
    ],
  },
]

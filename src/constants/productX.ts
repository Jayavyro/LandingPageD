import type { ProductModuleCard } from './productDrive'

export const PRODUCT_X_BADGE = 'Avyro X'

export const PRODUCT_X_HEADLINE =
  'One connected system, from first lead to final invoice.'

export const PRODUCT_X_SUBTITLE =
  'The full Workforce Operating System: CRM, Resource Allocation, Timesheets, and Billing — reading and writing to the same record, so nothing is ever re-entered, re-explained, or rebuilt.'

export const PRODUCT_X_PRIMARY_CTA = {
  label: 'Book a demo',
  href: '#contact-us',
} as const

export const PRODUCT_X_SECONDARY_CTA = {
  label: 'See X pricing',
  href: '#pricing',
} as const

export const PRODUCT_X_MODULES: ProductModuleCard[] = [
  {
    id: 'crm',
    code: '01',
    title: 'CRM',
    description:
      'Track leads and opportunities from first contact, with the work plan starting here.',
    features: [
      'Lead & opportunity pipeline tracking',
      'Win-probability scoring',
      'Proposal generation straight from CRM data',
      'Full client communication history',
    ],
  },
  {
    id: 'resource-allocation',
    code: '02',
    title: 'Resource Allocation',
    description: 'See real-time studio bandwidth against won and pipeline work.',
    features: [
      'Real-time bandwidth across every active project',
      'Skill-based staffing suggestions',
      'Double-booking conflict detection',
      'What-if staffing scenarios before you commit',
    ],
  },
  {
    id: 'timesheets',
    code: '03',
    title: 'Timesheets',
    description: 'Hours log against the same plan the team is actually running.',
    features: [
      'One-click logging against the live task list',
      'Built-in approval workflows',
      'Full audit trail, tied to the same work plan',
    ],
  },
  {
    id: 'billing',
    code: '04',
    title: 'Billing & Invoicing',
    description: 'AIA-style progress billing pulled straight from approved, logged hours.',
    features: [
      'AIA G702/G703 progress billing',
      'Multi-currency & tax support',
      'Invoices generated straight from approved hours',
      'Aging & collections tracking',
    ],
  },
]

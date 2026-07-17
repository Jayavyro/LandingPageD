export interface PricingTier {
  id: 'starter' | 'full-suite' | 'custom'
  name: string
  price: string
  priceUnit: string
  tagline: string
  modules: string[]
  ctaLabel: string
  ctaHref: string
  featured?: boolean
}

export const PRICING_HERO = {
  eyebrow: 'Pricing',
  title: 'Plans that scale with your firm',
  subtitle: 'Per-user pricing for AEC teams. Start with core modules or run the full connected platform.',
} as const

export const PRICING_DISCLAIMER =
  'Sample pricing for planning purposes. Final quotes depend on firm size, modules, and rollout scope.'

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$59',
    priceUnit: 'per user / month',
    tagline: 'CRM, time, resourcing, assets, and billing—connected.',
    modules: [
      'AI-Powered CRM',
      'Proposal Management',
      'Activity Tracker',
      'Smart Timesheets',
      'Resource Allocation',
      'Asset Management',
      'Billing & Invoice',
    ],
    ctaLabel: 'Talk to sales',
    ctaHref: '/#contact-us',
  },
  {
    id: 'full-suite',
    name: 'Full Suite',
    price: '$99',
    priceUnit: 'per user / month',
    tagline: 'Everything in Starter plus the full Platform layer.',
    modules: [
      'All Starter modules',
      'Approval Workflows',
      'Bulk Uploader',
      'Analytics',
      'Integrations',
    ],
    ctaLabel: 'Book a demo',
    ctaHref: '/#contact-us',
    featured: true,
  },
  {
    id: 'custom',
    name: 'Custom Suite',
    price: 'From $45',
    priceUnit: 'per user / month',
    tagline: 'Pick the modules you need and add more as you grow.',
    modules: [
      'Any core module mix',
      'Platform add-ons optional',
      'Multi-office rollout support',
    ],
    ctaLabel: 'Get a custom quote',
    ctaHref: '/#contact-us',
  },
]

export const PRICING_ALL_MODULES = [
  'AI-Powered CRM',
  'Proposal Management',
  'Resource Allocation',
  'Activity Tracker',
  'Smart Timesheets',
  'Asset Management',
  'Billing & Invoice',
  'Approval Workflows',
  'Bulk Uploader',
  'Analytics',
  'Integrations',
] as const

export const PRICING_STARTER_MODULE_SET = new Set([
  'AI-Powered CRM',
  'Proposal Management',
  'Resource Allocation',
  'Activity Tracker',
  'Smart Timesheets',
  'Asset Management',
  'Billing & Invoice',
])

export const PRICING_FAQ = [
  {
    question: 'Is this the final price?',
    answer:
      'These are sample rates for planning. Contact our team for a quote based on your firm size, modules, and implementation scope.',
  },
  {
    question: 'Can we start on Starter and upgrade?',
    answer:
      'Yes. Many firms begin with Starter and move to Full Suite or add Platform modules when the team is ready.',
  },
  {
    question: 'What is included in Starter?',
    answer:
      'CRM, proposals, Activity Tracker, Smart Timesheets with keyword mapping, Resource Allocation, Asset Management, and Billing & Invoice.',
  },
] as const

export const PRICING_ROUTE = '/pricing'

export interface PricingTier {
  id: 'drive' | 'x'
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
  title: 'Pricing built around your firm, not a price list.',
  subtitle:
    "Both products are still early in their rollout, and we're pricing pilot partners individually rather than publishing a fixed rate card. Tell us your firm size and which modules matter most, and we'll put together a number that fits.",
} as const

export const PRICING_DISCLAIMER =
  'Avyro X in particular is still evolving in its current form — pilot partners get direct input into the roadmap alongside custom pricing. No setup or onboarding fee on either product.'

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'drive',
    name: 'Avyro Drive',
    price: "Let's talk",
    priceUnit: '',
    tagline: 'Project Management, Smart Timesheets & Workforce Productivity.',
    modules: [
      'All three Drive modules',
      'No setup or onboarding fee',
      'Live in weeks',
    ],
    ctaLabel: 'Get pricing',
    ctaHref: '/#contact-us',
  },
  {
    id: 'x',
    name: 'Avyro X',
    price: "Let's talk",
    priceUnit: '',
    tagline: 'CRM, Resource Allocation, Timesheets & Billing.',
    modules: [
      'All four X modules',
      'Full work-plan continuity, lead to invoice',
      'Priority onboarding as an early pilot partner',
    ],
    ctaLabel: 'Get pricing',
    ctaHref: '/#contact-us',
    featured: true,
  },
]

export const PRICING_ALL_MODULES = [
  'Project Management',
  'Smart Timesheets',
  'Workforce Productivity',
  'CRM',
  'Resource Allocation',
  'Timesheets',
  'Billing & Invoicing',
] as const

export const PRICING_DRIVE_MODULE_SET = new Set([
  'Project Management',
  'Smart Timesheets',
  'Workforce Productivity',
])

/** @deprecated Use PRICING_DRIVE_MODULE_SET — kept for PricingPage imports during transition */
export const PRICING_STARTER_MODULE_SET = PRICING_DRIVE_MODULE_SET

export const PRICING_FAQ = [
  {
    question: 'Which product is right for us — Drive or X?',
    answer:
      'If you mainly need project tracking, timesheets, and productivity visibility, start with Avyro Drive. If you also need CRM, resource allocation, and billing connected to the same record, that\'s Avyro X. Many firms start with Drive and add X later.',
  },
  {
    question: 'Is this the final price?',
    answer:
      'We price pilot partners individually based on firm size and which modules you need, rather than publishing a fixed rate card. Contact us for a number that fits your firm.',
  },
  {
    question: 'Can we start on Drive and add X later?',
    answer:
      'Yes. Drive and X share the same underlying record — nothing gets rebuilt as you expand.',
  },
] as const

export const PRICING_ROUTE = '/pricing'

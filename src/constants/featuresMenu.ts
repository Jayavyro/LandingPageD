import type { ModuleIconName } from './navMenu'
import { BOOK_DEMO_HREF, PRODUCT_LINES_MENU } from './navMenu'
import { PRODUCT_ROUTES } from './productRoutes'

export interface FeaturesMenuItem {
  title: string
  description: string
  href: string
  icon: ModuleIconName
}

export interface FeaturesMenuSection {
  title: string
  items: FeaturesMenuItem[]
}

/** Capability sections for the Features mega-menu. */
export const FEATURES_MENU_SECTIONS: FeaturesMenuSection[] = [
  {
    title: 'Win More work',
    items: [
      {
        title: 'Capture lead',
        description:
          'Turn every inquiry into a tracked opportunity the moment it lands.',
        href: PRODUCT_ROUTES.crm,
        icon: 'crm',
      },
      {
        title: 'Build budgets & workplans',
        description:
          'Draft the phase-based budget and workplan the proposal will be built on.',
        href: PRODUCT_ROUTES['gantt-chart'],
        icon: 'project',
      },
      {
        title: 'Create proposal',
        description:
          'Turn the workplan straight into a client-ready proposal, no retyping.',
        href: PRODUCT_ROUTES.proposals,
        icon: 'analytics',
      },
      {
        title: 'Digital signature',
        description:
          'Get the proposal signed and countersigned in minutes — the project is won.',
        href: `${PRODUCT_ROUTES.proposals}#signature`,
        icon: 'approval',
      },
    ],
  },
  {
    title: 'Mobilize',
    items: [
      {
        title: 'Assign staff',
        description:
          'Match the right people to the right phases against the plan.',
        href: PRODUCT_ROUTES.resource,
        icon: 'resource',
      },
      {
        title: 'Track Projects',
        description:
          'Get instant visibility over every project in your firm.',
        href: PRODUCT_ROUTES.activity,
        icon: 'activity',
      },
      {
        title: 'Document Repository',
        description:
          'The signed contract and every project file land in one searchable home.',
        href: PRODUCT_ROUTES['gantt-chart'],
        icon: 'approval',
      },


    ],
  },
  {
    title: 'Deliver & get paid',
    items: [
      {
        title: 'Live timesheet',
        description:
          'Log hours against real phases and watch budgets update live.',
        href: PRODUCT_ROUTES.timesheets,
        icon: 'timesheet',
      },
      {
        title: 'Live utilization & occupancy',
        description:
          "See who's overloaded and who's free, before it becomes a problem.",
        href: PRODUCT_ROUTES.resource,
        icon: 'activity',
      },
      {
        title: 'Generate revenue',
        description:
          'Drive revenue with Smart Billing and Invoicing solutions.',
        href: PRODUCT_ROUTES.billing,
        icon: 'billing',
      },
    ],
  },
]

/** Flat list for mobile nav and other consumers. */
export const FEATURES_MENU_ITEMS: FeaturesMenuItem[] =
  FEATURES_MENU_SECTIONS.flatMap((section) => section.items)

export const FEATURES_MENU_CTA = {
  headlineBefore: 'Run the firm on ',
  headlineAccent: 'one operational record',
  headlineAfter: ' — from first lead to final invoice.',
  ctaLabel: 'Book a demo',
  ctaHref: BOOK_DEMO_HREF,
  footnote: `${PRODUCT_LINES_MENU[0].title} · ${PRODUCT_LINES_MENU[1].title}`,
} as const

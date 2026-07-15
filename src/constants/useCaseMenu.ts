import { INDUSTRY_ROUTES } from './industryRoutes'

export type UseCaseIconName =
  | 'architecture'
  | 'engineering'
  | 'construction'
  | 'principals'
  | 'operations'
  | 'project-managers'
  | 'accountants'

export interface UseCaseItem {
  title: string
  description: string
  href: string
  icon: UseCaseIconName
}

export interface UseCaseSection {
  title: string
  layout: 'single' | 'double'
  items: UseCaseItem[]
}

export const USE_CASE_MENU: UseCaseSection[] = [
  {
    title: 'By firm',
    layout: 'single',
    items: [
      {
        title: 'Architecture',
        description: 'Take control of the design of your business',
        href: INDUSTRY_ROUTES.architecture,
        icon: 'architecture',
      },
      {
        title: 'Engineering',
        description: 'Optimize time and finances to deliver your best work',
        href: INDUSTRY_ROUTES.engineering,
        icon: 'engineering',
      },
      {
        title: 'Construction',
        description: 'Align field activity, budgets, and billing on every job',
        href: INDUSTRY_ROUTES.construction,
        icon: 'construction',
      },
    ],
  },
  {
    title: 'By role',
    layout: 'double',
    items: [
      {
        title: 'Principals & owners',
        description: 'Maximize business health with confidence',
        href: '/use-case/principals-owners',
        icon: 'principals',
      },
      {
        title: 'Operations leaders',
        description: 'Easily monitor and optimize performance',
        href: '/use-case/operations-leaders',
        icon: 'operations',
      },
      {
        title: 'Project managers',
        description: 'Meet project deadlines and budget targets without burnout',
        href: '/use-case/project-managers',
        icon: 'project-managers',
      },
      {
        title: 'Accountants and CFOs',
        description: 'Consolidate timesheets, invoices, and payments',
        href: '/use-case/accountants-cfos',
        icon: 'accountants',
      },
    ],
  },
]

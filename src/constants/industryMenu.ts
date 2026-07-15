import { INDUSTRY_ROUTES } from './industryRoutes'

export type IndustryMenuIconName = 'architecture' | 'engineering' | 'construction'

export interface IndustryMenuItem {
  title: string
  description: string
  href: string
  icon: IndustryMenuIconName
}

export const INDUSTRY_MENU_ITEMS: IndustryMenuItem[] = [
  {
    title: 'Architecture',
    description: 'Design phases, proposals, and delivery in one rhythm',
    href: INDUSTRY_ROUTES.architecture,
    icon: 'architecture',
  },
  {
    title: 'Engineering',
    description: 'Complex schedules, deliverables, and utilization under control',
    href: INDUSTRY_ROUTES.engineering,
    icon: 'engineering',
  },
  {
    title: 'Construction',
    description: 'Field activity, budgets, and billing aligned with the job site',
    href: INDUSTRY_ROUTES.construction,
    icon: 'construction',
  },
]

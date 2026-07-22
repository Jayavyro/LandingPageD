import { PRODUCT_ROUTES } from './productRoutes'

export type WorkflowSolutionAccent = 'purple' | 'blue' | 'orange' | 'pink'

export interface WorkflowSolution {
  id: string
  step: string
  quality: string
  title: string
  description: string
  ctaLabel: string
  href: string
  accent: WorkflowSolutionAccent
  imageSrc: string
  imageAlt: string
}

export const WORKFLOW_SOLUTIONS_BADGE = 'Solutions'

export const WORKFLOW_SOLUTIONS_HEADLINE = 'What AVYRO actually does.'
export const WORKFLOW_SOLUTIONS_HEADLINE_ACCENT = 'For AEC firms that want clarity.'
export const WORKFLOW_SOLUTIONS_SUBTITLE =
  'Win work. Staff projects. Capture time. Bill clients. Lead the firm—with capabilities built for how architecture and engineering businesses operate.'

export const WORKFLOW_SOLUTIONS: WorkflowSolution[] = [
  {
    id: 'ai-crm',
    step: '01',
    quality: 'AI CRM',
    title: 'Win more projects with AI-assisted opportunity and proposal tracking.',
    description:
      'Know which deals need attention. Create proposals faster. Convert wins into projects without rebuilding. Outcome: More wins. Less administration.',
    ctaLabel: 'Explore CRM',
    href: PRODUCT_ROUTES.crm,
    accent: 'purple',
    imageSrc:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'A&E team discussing a client opportunity and proposal',
  },
  {
    id: 'resource-planning',
    step: '02',
    quality: 'RESOURCE PLANNING',
    title: 'Always know who should work on what.',
    description:
      'Assign the right people, balance capacity, and avoid overbooking before delivery suffers. Outcome: More productive, billable teams.',
    ctaLabel: 'Explore resourcing',
    href: PRODUCT_ROUTES.resource,
    accent: 'blue',
    imageSrc:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Operations leaders planning team capacity across projects',
  },
  {
    id: 'project-delivery',
    step: '03',
    quality: 'PROJECT DELIVERY',
    title: 'Manage projects from kickoff to completion.',
    description:
      'Plan milestones, track progress, collaborate, and keep documents with the job. Outcome: Predictable delivery on schedule.',
    ctaLabel: 'Explore projects',
    href: PRODUCT_ROUTES['gantt-chart'],
    accent: 'orange',
    imageSrc:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Architects reviewing project plans and delivery schedules',
  },
  {
    id: 'intelligent-timesheets',
    step: '04',
    quality: 'INTELLIGENT TIMESHEETS',
    title: 'Turn daily work into accurate timesheets automatically.',
    description:
      'Activity tracking and smart suggestions cut manual entry, improve billable accuracy, and speed approvals. Outcome: Higher utilization. Faster billing.',
    ctaLabel: 'Explore timesheets',
    href: PRODUCT_ROUTES.timesheets,
    accent: 'pink',
    imageSrc:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Engineer reviewing project time and activity for timesheets',
  },
  {
    id: 'billing-invoicing',
    step: '05',
    quality: 'BILLING & INVOICING',
    title: 'Convert approved work into invoices.',
    description:
      'Generate invoices from approved time and cut the manual billing grind. Outcome: Fewer delays. Get paid faster.',
    ctaLabel: 'Explore billing',
    href: PRODUCT_ROUTES.billing,
    accent: 'purple',
    imageSrc:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Finance professional preparing project invoices from approved work',
  },
  {
    id: 'executive-insights',
    step: '06',
    quality: 'EXECUTIVE INSIGHTS',
    title: 'See the health of your business in real time.',
    description:
      'Track utilization, project profitability, revenue, and performance from one leadership view. Outcome: Better decisions, sooner.',
    ctaLabel: 'Explore insights',
    href: `${PRODUCT_ROUTES.platform}#analytics`,
    accent: 'blue',
    imageSrc:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Executive reviewing firm performance dashboards and profitability',
  },
  {
    id: 'activity-tracker',
    step: '07',
    quality: 'ACTIVITY TRACKER',
    title: 'Know what work happened—without the chase.',
    description:
      'Desktop activity capture feeds Smart Timesheets so daily work is recorded as it happens. Outcome: Less reconstruction. Cleaner time data.',
    ctaLabel: 'Explore activity',
    href: PRODUCT_ROUTES.activity,
    accent: 'orange',
    imageSrc:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Professional reviewing daily activity and project work logs',
  },
  {
    id: 'asset-management',
    step: '08',
    quality: 'ASSET MANAGEMENT',
    title: 'Track equipment and assets alongside projects.',
    description:
      'Know what you own, where it is assigned, and how it is used across jobs. Outcome: Less waste. Better utilization of firm assets.',
    ctaLabel: 'Explore assets',
    href: PRODUCT_ROUTES.assets,
    accent: 'pink',
    imageSrc:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Engineering team managing shared equipment and project assets',
  },
  {
    id: 'approval-workflows',
    step: '09',
    quality: 'APPROVAL WORKFLOWS',
    title: 'Keep timesheets and invoices moving.',
    description:
      'Route sign-offs to the right people without email bottlenecks. Outcome: Faster approvals. Fewer billing delays.',
    ctaLabel: 'Explore approvals',
    href: `${PRODUCT_ROUTES.platform}#approvals`,
    accent: 'purple',
    imageSrc:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Managers reviewing and approving project timesheets together',
  },
]

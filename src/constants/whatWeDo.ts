import { PRODUCT_ROUTES } from './productRoutes'

export type WorkflowSolutionAccent = 'purple' | 'blue' | 'orange' | 'pink'

export interface WorkflowSolution {
  id: string
  step: string
  quality: string
  title: string
  description: string
  features: string[]
  ctaLabel: string
  href: string
  accent: WorkflowSolutionAccent
  imageSrc: string
  imageAlt: string
}

export const WHAT_WE_DO_BADGE = 'What We Do'

export const WHAT_WE_DO_HEADLINE = 'One operational platform.'
export const WHAT_WE_DO_HEADLINE_ACCENT = 'Every team. Every project. Every dollar.'
export const WHAT_WE_DO_SUBTITLE =
  'Avyro is not a pile of apps under one logo. Below is every capability — what it does, the features inside it, and how each one feeds the next so CRM, delivery, time, and billing stay connected.'

export const WHAT_WE_DO_SOLUTIONS: WorkflowSolution[] = [
  {
    id: 'ai-crm',
    step: '01',
    quality: 'AI CRM',
    title: 'Win more work with less admin.',
    description:
      'Pipeline, clients, and proposals live on one record. AI fills opportunity forms, builds proposals from captured data, and opens the project the moment a deal is won.',
    features: [
      'One client record for contacts, notes, and opportunities',
      'AI-assisted opportunity forms and proposal drafts',
      'Pipeline by stage, sector, and estimated value',
      'Won deal → live project with budget attached',
    ],
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
      'One live capacity view across every project. Assign people to phases, spot overbooking early, and keep bench time from eating margin.',
    features: [
      'Firm-wide capacity and utilization view',
      'Assign staff to projects and phases in one plan',
      'Overbooking and idle bench alerts',
      'Staffing that stays tied to live project demand',
    ],
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
    title: 'Deliver on the record that won the job.',
    description:
      'Schedules, documents, progress, and budgets stay on the same project that came from the CRM. Nothing gets rebuilt in a second tool.',
    features: [
      'Phases, milestones, and Gantt schedules',
      'Budgets and progress on the live project record',
      'Documents and delivery status in one workspace',
      'No exported stale copies for PMs to chase',
    ],
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
    quality: 'SMART TIMESHEETS',
    title: 'Timesheets people review, not invent.',
    description:
      'Daily work maps itself to the right project and phase. Billable accuracy climbs, approvals stop stalling, and Friday recall guesswork ends.',
    features: [
      'Auto-mapped hours to project and phase',
      'Review-and-approve instead of recall-and-type',
      'Billable vs non-billable clarity',
      'Fewer stalled timesheet approvals',
    ],
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
    title: 'Invoice the day work is approved.',
    description:
      'Approved hours flow straight into invoices. No month-end reconstruction, no chasing PMs — cash starts moving sooner.',
    features: [
      'Invoices generated from approved timesheets',
      'Collections and outstanding payments tracked',
      'Live profitability by project',
      'Same-day billing when work is approved',
    ],
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
    title: 'Lead from live numbers, not last month’s PDF.',
    description:
      'Profitability, utilization, revenue, and risk — fed by real work as it happens. Catch a slipping project while there is still time to fix it.',
    features: [
      'Profitability and budget variance by project',
      'Utilization and billable ratios across teams',
      'Live revenue and risk signals',
      'Principal-ready views without spreadsheet rebuilds',
    ],
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
    title: 'Know what happened without asking.',
    description:
      'Desktop capture records the day as it happens and feeds Smart Timesheets. Clean time data with zero interrogation.',
    features: [
      'Automatic desktop activity capture',
      'Feeds Smart Timesheets directly',
      'Project and phase mapping from real work',
      'No weekly “what did you do?” chase',
    ],
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
    title: 'Track equipment beside the jobs that use it.',
    description:
      'What you own, where it sits, and whether it earns its keep — visible next to the projects it serves.',
    features: [
      'Inventory of owned equipment and assets',
      'Location and assignment visibility',
      'Utilization next to project demand',
      'Fewer lost or idle assets',
    ],
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
    title: 'Sign-offs that move on their own.',
    description:
      'Timesheets and invoices route to the right approver automatically. No email black holes between your team’s work and your revenue.',
    features: [
      'Role- and project-based routing',
      'Pending, approved, and rejected queues',
      'Audit trail for compliance',
      'Faster path from work to invoice',
    ],
    ctaLabel: 'Explore approvals',
    href: `${PRODUCT_ROUTES.platform}#approvals`,
    accent: 'purple',
    imageSrc:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Managers reviewing and approving project timesheets together',
  },
]

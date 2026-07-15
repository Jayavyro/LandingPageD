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

export const WORKFLOW_SOLUTIONS_HEADLINE = 'Four workflows. One platform.'
export const WORKFLOW_SOLUTIONS_HEADLINE_ACCENT = 'From win to invoice.'
export const WORKFLOW_SOLUTIONS_SUBTITLE =
  'From winning work to getting paid—without spreadsheets, duplicate entry, or Friday timesheet chaos.'

export const WORKFLOW_SOLUTIONS: WorkflowSolution[] = [
  {
    id: 'win-the-work',
    step: '01',
    quality: 'Connected',
    title: 'Win more work without retyping client data',
    description:
      'Stop copying lead details into spreadsheets and proposals. Capture opportunities in AI-Powered CRM, pre-fill proposal forms, and move from intake to project setup without duplicate entry.',
    ctaLabel: 'Get started',
    href: PRODUCT_ROUTES.crm,
    accent: 'purple',
    imageSrc:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'A&E team in a client meeting discussing a new project opportunity',
  },
  {
    id: 'run-the-project',
    step: '02',
    quality: 'Intuitive',
    title: 'Save time with a streamlined planning process',
    description:
      'Eliminate scattered schedules and manual staffing updates. Build project plans on Gantt timelines, assign people in Resource Allocation, and see utilization across phases before deadlines slip.',
    ctaLabel: 'Get started',
    href: PRODUCT_ROUTES.resource,
    accent: 'blue',
    imageSrc:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Architects reviewing project plans and schedules on a planning table',
  },
  {
    id: 'capture-the-time',
    step: '03',
    quality: 'Accurate',
    title: 'Capture billable hours without the Friday chase',
    description:
      'Eliminate manual project selection on timesheets. Activity Tracker logs work during the day; Smart Timesheets map activities to the right project using keyword mapping—then route through approvals.',
    ctaLabel: 'Get started',
    href: PRODUCT_ROUTES.timesheets,
    accent: 'orange',
    imageSrc:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Engineer working at a computer tracking project activity and time',
  },
  {
    id: 'get-paid',
    step: '04',
    quality: 'Faster',
    title: 'Turn approved work into invoices in fewer steps',
    description:
      'Stop waiting on late timesheets and disconnected billing. Approved hours flow into Billing & Invoice with budget and variance visibility in Analytics—so cash moves faster.',
    ctaLabel: 'Get started',
    href: PRODUCT_ROUTES.billing,
    accent: 'pink',
    imageSrc:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Finance professional reviewing invoices and project billing documents',
  },
]

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
    quality: 'WIN WORK',
    title: 'Grow Your Pipeline Without Growing Administrative Work',
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
    quality: 'PLAN & DELIVER',
    title: 'Deliver More Projects With the Same Team',
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
    quality: 'TRACK & APPROVE',
    title: 'Capture Every Billable Hour Without the Friday Timesheet Chase',
    description:
      'Eliminate manual project selection on timesheets. Activity Tracker captures work automatically while Smart Timesheets map activities to the correct project and route them for approval.',
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
    quality: 'BILL & ANALYZE',
    title: 'Get Invoices Out Faster. Improve Cash Flow.',
    description:
      'Approved work flows directly into billing, budgets, analytics, and financial reporting—eliminating manual reconciliation and reducing invoicing delays.',
    ctaLabel: 'Get started',
    href: PRODUCT_ROUTES.billing,
    accent: 'pink',
    imageSrc:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Finance professional reviewing invoices and project billing documents',
  },
]

import crmImage from '../Proposals.png'
import projectImage from '../Screenshot 2026-07-20 104755.png'
import autoMappingImage from '../Screenshot 2026-07-14 154441.png'
import billingImage from '../Account_image.png'

export const WHY_AVYRO_BADGE = 'Inside the product'

export const WHY_AVYRO_HEADLINE_LINES = [
  'Real screens.',
  'Real workflows.',
] as const

export const WHY_AVYRO_HEADLINE_ACCENT = 'Your firm’s Monday.'

export const WHY_AVYRO_SUBTITLE =
  'Four connected modules on one record — CRM, work plans, time capture, and billing — the same product your PMs, finance, and principals open every day.'

export interface WhyAvyroTimelineItem {
  id: string
  module: string
  title: string
  description: string
  /** Standalone P&L / ops outcome — never depends on prior sections */
  outcomeMetric: string
  outcomeCaption: string
  highlights: string[]
  image: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
}

export const WHY_AVYRO_TIMELINE: WhyAvyroTimelineItem[] = [
  {
    id: 'ai-crm',
    module: 'Win Work · AI CRM & Proposals',
    title: 'The deal closes. The project opens itself.',
    description:
      'AI fills opportunity forms from captured client data, proposals go out DocuSign-ready, and the moment a client signs, the project opens with budget and client record attached. No kickoff meeting spent copying data.',
    outcomeMetric: '50% less setup',
    outcomeCaption:
      'Won deals open as live projects with budget and contacts already attached — half the admin of a typical handoff.',
    highlights: [
      'AI-assisted opportunity and client forms',
      'Proposals built from live client data',
      'Signed deal → live project, automatically',
    ],
    image: crmImage,
    imageAlt:
      'Avyro Proposal Management editor with slides, document canvas, and custom proposal elements',
    imageWidth: 1916,
    imageHeight: 923,
  },
  {
    id: 'projects',
    module: 'Work Plans · Project Delivery',
    title: 'Every PM works from the same live plan.',
    description:
      'Phases, staffing, schedules, and budgets live on the record that won the work. When something changes, everyone sees it — there is no stale spreadsheet copy to contradict it.',
    outcomeMetric: '−34% overruns',
    outcomeCaption:
      'Slipping jobs and fee burn show up early — while you can still re-staff, re-scope, or reset the client conversation.',
    highlights: [
      'Phases, milestones, and staffing in one plan',
      'Budgets and progress always current',
      'No exported, outdated project copies',
    ],
    image: projectImage,
    imageAlt:
      'Avyro project delivery workspace with stages, milestones, and progress',
    imageWidth: 1874,
    imageHeight: 980,
  },
  {
    id: 'smart-timesheets',
    module: 'Time Capture · Smart Timesheets',
    title: 'Timesheets write themselves. People just review.',
    description:
      'The desktop tracker records work as it happens and maps it to the right project and phase. Friday timesheet archaeology is gone — and so is the underbilling that came with it.',
    outcomeMetric: '10+ hrs / person / week',
    outcomeCaption:
      'Billable hours that used to vanish at week’s end now map to the right phase and land on invoices.',
    highlights: [
      'Automatic desktop activity capture',
      'Intelligent project and phase mapping',
      'Review-and-approve instead of recall-and-type',
    ],
    image: autoMappingImage,
    imageAlt:
      'Avyro Activity Tracker and Smart Timesheets with intelligent project mapping',
    imageWidth: 1600,
    imageHeight: 900,
  },
  {
    id: 'billing',
    module: 'Billing · Invoices & Collections',
    title: 'Approved hours become invoices the same day.',
    description:
      'Billing pulls straight from approved timesheets — no month-end reconstruction, no chasing PMs for numbers. Collections, cash flow, and per-project profit sit in the same view.',
    outcomeMetric: '1.8× faster payment',
    outcomeCaption:
      'Invoices leave the day work is approved — finance stops rebuilding spreadsheets and cash comes in sooner.',
    highlights: [
      'Invoices generated from approved work',
      'Collections and open balances in one view',
      'Live profitability by project',
    ],
    image: billingImage,
    imageAlt:
      'Avyro Billing & Invoice dashboard with collections and cash flow',
    imageWidth: 1600,
    imageHeight: 1000,
  },
]

import crmImage from '../Proposals.png'
import projectImage from '../Screenshot 2026-07-20 104755.png'
import autoMappingImage from '../Screenshot 2026-07-14 154441.png'
import billingImage from '../Account_image.png'

export const WHY_AVYRO_BADGE = 'What AVYRO does'

export const WHY_AVYRO_HEADLINE_LINES = [
  'Every project. Every person.',
  'Every billable hour.',
] as const

export const WHY_AVYRO_HEADLINE_ACCENT = 'One AEC platform.'

export const WHY_AVYRO_SUBTITLE =
  'Every stage of your business runs on the same platform. From winning new work to delivering projects, capturing time, and billing clients, AVYRO keeps your teams connected with one source of truth.'

export interface WhyAvyroTimelineItem {
  id: string
  module: string
  title: string
  description: string
  highlights: string[]
  image: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
}

export const WHY_AVYRO_TIMELINE: WhyAvyroTimelineItem[] = [
  {
    id: 'ai-crm',
    module: 'AI CRM & Proposal Management',
    title: 'Win more work with connected CRM and proposals',
    description:
      'Track leads and opportunities, Auto fill opportunity forms with AI, turn wins into DocuSign-ready proposals from captured client data, then open the project automatically.',
    highlights: [
      'AI-assisted opportunity management',
      'Faster proposal creation',
      'Better win rates',
    ],
    image: crmImage,
    imageAlt:
      'Avyro Proposal Management editor with slides, document canvas, and custom proposal elements',
    imageWidth: 1916,
    imageHeight: 923,
  },
  {
    id: 'projects',
    module: 'Project Delivery',
    title: 'Deliver projects from one shared workspace',
    description:
      'Plan projects, assign the right people, manage schedules, and track delivery from one shared workspace. Every team works from the same live project data.',
    highlights: [
      'Resource planning and scheduling',
      'Live project progress and budgets',
      'Real-time collaboration',
    ],
    image: projectImage,
    imageAlt:
      'Avyro project delivery workspace with stages, milestones, and progress',
    imageWidth: 1874,
    imageHeight: 980,
  },
  {
    id: 'smart-timesheets',
    module: 'Activity Tracker & Smart Timesheets',
    title: 'Capture every billable hour automatically',
    description:
      'Desktop activity tracking records daily work and intelligently maps it to the right project and phase. Employees review their timesheets instead of manually creating them, improving accuracy and reducing administrative effort.',
    highlights: [
      'Automatic desktop activity tracking',
      'Intelligent project and phase mapping',
      'Faster approvals and accurate billable hours',
    ],
    image: autoMappingImage,
    imageAlt:
      'Avyro Activity Tracker and Smart Timesheets with intelligent project mapping',
    imageWidth: 1600,
    imageHeight: 900,
  },
  {
    id: 'billing',
    module: 'Billing & Invoice',
    title: 'Invoice directly from approved work',
    description:
      'Approved timesheets flow directly into billing, making invoice creation faster and more accurate. Track collections, monitor cash flow, and measure profitability from the same connected project data.',
    highlights: [
      'Generate invoices from approved work',
      'Track collections and outstanding payments',
      'Live profitability and cash flow insights',
    ],
    image: billingImage,
    imageAlt:
      'Avyro Billing & Invoice dashboard with collections and cash flow',
    imageWidth: 1600,
    imageHeight: 1000,
  },
]

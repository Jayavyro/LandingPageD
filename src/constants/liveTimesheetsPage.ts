import {
  Clock3,
  Layers3,
  MapPin,
  Receipt,
  RefreshCw,
  Wallet,
} from 'lucide-react'
import type { ShortFeaturePageContent } from './shortFeaturePage'
import { PRODUCT_ROUTES } from './productRoutes'
import liveTimesheetImage from '../Live Timesheet.png'

export const LIVE_TIMESHEETS_ROUTE = PRODUCT_ROUTES['live-timesheets']

export const LIVE_TIMESHEETS_PAGE: ShortFeaturePageContent = {
  seo: {
    title: 'Live Timesheets | Avyro for AEC Firms',
    description:
      'Log time against project phases and tasks so budgets and progress update as work happens—then move approved hours into billing without spreadsheets.',
  },

  hero: {
    eyebrow: 'Live Timesheets',
    headlineBefore: 'Capture time where',
    headlineAccent: 'the work happens',
    tagline: 'Timesheets shouldn’t be a Friday scramble',
    supporting:
      'Your team logs hours against project phases and tasks. Managers see progress, who’s busy, and budget use as it happens—so every hour updates the project without manual spreadsheets.',
    cta: { label: 'Book a demo', href: '/#contact-us' },
    visual: {
      src: liveTimesheetImage,
      alt: 'Avyro Live Timesheet with logged hours, screen time, and unallocated activities',
    },
  },

  overview: {
    eyebrow: 'Overview',
    heading: 'Track time in real time',
    body: 'Connect every logged hour to the work that matters. Budgets update as time is submitted, and approved hours are ready for billing—on the same project record.',
    audienceEyebrow: 'Who uses it',
    audienceHeading: 'Who this helps',
    audience: [
      {
        title: 'Team Members',
        body: 'Log hours quickly against the work you just finished.',
      },
      {
        title: 'Project Managers',
        body: 'See progress, budget use, and team productivity as hours come in.',
      },
      {
        title: 'Operations Teams',
        body: 'Track who’s busy across projects without waiting for weekly reports.',
      },
      {
        title: 'Finance Teams',
        body: 'Review approved timesheets for accurate billing and project costing.',
      },
    ],
  },

  benefits: {
    eyebrow: 'Impact',
    heading: 'What this changes for your firm',
    supporting: 'Live hours. Clearer budgets. Faster billing.',
    items: [
      {
        title: 'Live budget visibility',
        body: 'See planned vs. actual hours and budget use as work happens.',
      },
      {
        title: 'Accurate project tracking',
        body: 'Know where time is going across every project phase.',
      },
      {
        title: 'Clearer staffing picture',
        body: 'Monitor workloads without waiting for end-of-week reports.',
      },
      {
        title: 'Faster billing',
        body: 'Approved timesheets move into invoicing with less admin work.',
      },
      {
        title: 'Healthier margins',
        body: 'Catch overruns early—before they quietly eat the fee.',
      },
    ],
  },

  features: {
    eyebrow: 'What you can do',
    heading: 'Every hour tied to real work',
    supporting: 'Log once. Update the project. Bill with confidence.',
    items: [
      {
        icon: Layers3,
        title: 'Log against phases & tasks',
        body: 'Record time on the same phases and tasks in the workplan.',
      },
      {
        icon: MapPin,
        title: 'From anywhere',
        body: 'Capture hours whenever and wherever the work gets done.',
      },
      {
        icon: RefreshCw,
        title: 'Budgets update automatically',
        body: 'Submitted time updates project budgets as it comes in.',
      },
      {
        icon: Wallet,
        title: 'Billable & non-billable',
        body: 'Track both so managers see the full picture of effort.',
      },
      {
        icon: Clock3,
        title: 'Live progress views',
        body: 'See progress across projects and teams as hours are logged.',
      },
      {
        icon: Receipt,
        title: 'Ready for invoicing',
        body: 'Move approved hours into billing without rebuilding the week.',
      },
    ],
  },

  screenshot: {
    eyebrow: 'How it flows',
    heading: 'From work to visibility',
    body: 'Every hour logged keeps projects, budgets, and teams in sync.',
    workflow: [
      'Log Time',
      'Update Progress',
      'Track Budget Use',
      'Review & Approve',
      'Bill with Confidence',
    ],
    visual: {
      src: liveTimesheetImage,
      alt: 'Avyro Live Timesheet with logged hours, screen time, and unallocated activities',
    },
  },

  finalCta: {
    heading: 'See hours update the project live',
    supporting:
      'Bring a typical week. We’ll show how time against phases updates budgets—and flows to billing—without a spreadsheet rebuild.',
    cta: { label: 'Book a demo', href: '/#contact-us' },
  },
}

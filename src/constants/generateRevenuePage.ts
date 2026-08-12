import {
  FileSpreadsheet,
  Link2,
  ReceiptText,
  Send,
  TimerReset,
  Wallet,
} from 'lucide-react'
import type { ShortFeaturePageContent } from './shortFeaturePage'
import { PRODUCT_ROUTES } from './productRoutes'
import billingImage from '../Billing.png'

export const GENERATE_REVENUE_ROUTE = PRODUCT_ROUTES['generate-revenue']

export const GENERATE_REVENUE_PAGE: ShortFeaturePageContent = {
  seo: {
    title: 'Generate Revenue | Avyro Billing & Invoicing for AEC',
    description:
      'Turn approved timesheets and project budgets into accurate client invoices faster—so completed work doesn’t sit unbilled and cash flow improves.',
  },

  hero: {
    eyebrow: 'Generate Revenue',
    headlineBefore: 'Turn completed work into',
    headlineAccent: 'revenue faster',
    tagline: 'Don’t let finished work sit unbilled',
    supporting:
      'Avyro connects approved timesheets, project budgets, and billing so you can create accurate invoices with less manual effort. From billable hours to client invoices, every step stays connected—so you get paid faster.',
    cta: { label: 'Book a demo', href: '/#contact-us' },
    visual: {
      src: billingImage,
      alt: 'Avyro projects billing view with revenue, invoices, and payment status',
    },
  },

  overview: {
    eyebrow: 'Overview',
    heading: 'Smart billing & invoicing',
    body: 'Generate invoices from work your team already completed. Track billable and non-billable effort, send accurate client invoices, and keep billing linked to projects and budgets—on one record.',
    audienceEyebrow: 'Who uses it',
    audienceHeading: 'Who this helps',
    audience: [
      {
        title: 'Finance Teams',
        body: 'Create invoices, track payments, and manage project billing.',
      },
      {
        title: 'Project Managers',
        body: 'Review billable work and confirm invoices match project progress.',
      },
      {
        title: 'Business Leaders',
        body: 'Monitor revenue, billing performance, and project profitability.',
      },
      {
        title: 'Operations Teams',
        body: 'Make sure completed work flows cleanly into the billing process.',
      },
    ],
  },

  benefits: {
    eyebrow: 'Impact',
    heading: 'What this changes for your firm',
    supporting: 'Shorter path from approved hours to cash in the bank.',
    items: [
      {
        title: 'Faster billing cycles',
        body: 'Cut the lag between project work and sending the invoice.',
      },
      {
        title: 'Better cash flow',
        body: 'Send invoices sooner and get paid sooner.',
      },
      {
        title: 'Accurate invoices',
        body: 'Bill from real project data—fewer errors and fewer disputes.',
      },
      {
        title: 'Full revenue visibility',
        body: 'Track billable work, invoices, and outstanding payments in one place.',
      },
      {
        title: 'Less admin work',
        body: 'Reduce repetitive billing tasks so teams stay focused on delivery.',
      },
    ],
  },

  features: {
    eyebrow: 'What you can do',
    heading: 'Invoices from work already done',
    supporting: 'Build billing from approved hours and live project budgets.',
    items: [
      {
        icon: TimerReset,
        title: 'From approved hours',
        body: 'Create invoices from approved billable timesheets.',
      },
      {
        icon: Wallet,
        title: 'Billable & non-billable',
        body: 'Track both so finance and PMs see the full effort picture.',
      },
      {
        icon: FileSpreadsheet,
        title: 'Accurate client invoices',
        body: 'Generate clean invoices that match the work delivered.',
      },
      {
        icon: Send,
        title: 'Status & payment progress',
        body: 'Monitor invoice status and follow payment progress.',
      },
      {
        icon: Link2,
        title: 'Linked to projects & budgets',
        body: 'Keep billing connected to the same project record as time and fees.',
      },
      {
        icon: ReceiptText,
        title: 'Fewer rebuilds',
        body: 'Stop reconstructing the month from exports and email threads.',
      },
    ],
  },

  screenshot: {
    eyebrow: 'How it flows',
    heading: 'From work to revenue',
    body: 'Connect every billable hour to faster, more accurate revenue.',
    workflow: [
      'Approve Timesheets',
      'Generate Invoice',
      'Send to Client',
      'Track Payments',
      'Recognize Revenue',
    ],
    visual: {
      src: billingImage,
      alt: 'Avyro projects billing view with revenue, invoices, and payment status',
    },
  },

  finalCta: {
    heading: 'See approved hours become an invoice',
    supporting:
      'Bring a typical billing cycle. We’ll show how timesheets and budgets become accurate invoices—without rebuilding the month.',
    cta: { label: 'Book a demo', href: '/#contact-us' },
  },
}

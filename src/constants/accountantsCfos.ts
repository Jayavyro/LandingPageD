import {
  CircleDollarSign,
  Clock,
  FileSpreadsheet,
  Receipt,
  Wallet,
} from 'lucide-react'
import capabilitiesVisual from '../assets/use-case/accountants-cfos-capabilities.jpg'
import type { AfterCard, BeforeCard, CapabilitiesVisual, ProjectCapability } from './projectManagers'

export const ACCOUNTANTS_CFOS_EYEBROW = 'For accountants & CFOs'

export const ACCOUNTANTS_CFOS_HEADLINE =
  'Consolidate timesheets, invoices, and payments in one financial system'

export const ACCOUNTANTS_CFOS_SUBTITLE =
  'Avyro gives finance leaders a single source of truth for billing, profitability, and cash flow — without the spreadsheet chaos.'

export const CFO_BEFORE_CARD: BeforeCard = {
  title: 'Before Avyro',
  subtitle: 'Disconnected billing, manual reconciliation, and financial data you cannot trust.',
  imageAlt:
    'Manual finance workflow with spreadsheets, printed invoices, timesheets, and reconciliation notes',
  points: [
    'Timesheets and invoices in separate systems',
    'Hours spent on manual reconciliation',
    'Delayed visibility into project profitability',
    'Billing errors and payment follow-ups',
  ],
}

export const CFO_AFTER_CARD: AfterCard = {
  title: 'After Avyro',
  subtitle: 'Unified financial data, automated billing, and real-time profitability insights.',
  imageAlt:
    'Avyro finance dashboard showing consolidated timesheets, invoicing, payments, and project profitability',
}

export const CFO_CAPABILITIES_EYEBROW = 'Run finance with confidence'

export const CFO_CAPABILITIES_TITLE = 'Discover how Avyro empowers accountants & CFOs'

export const CFO_CAPABILITIES_VISUAL: CapabilitiesVisual = {
  src: capabilitiesVisual,
  alt: 'Finance professional reviewing accounts, invoices, and financial reports at a desk',
}

export const ACCOUNTANT_CAPABILITIES: ProjectCapability[] = [
  {
    icon: Clock,
    title: 'Timesheet Consolidation',
    description:
      'Collect approved timesheets from every project and employee automatically — ready for billing and payroll without manual exports.',
  },
  {
    icon: Receipt,
    title: 'Billing & Invoicing',
    description:
      'Generate accurate invoices from tracked time and expenses, reduce billing errors, and speed up your revenue cycle.',
  },
  {
    icon: Wallet,
    title: 'Payment Tracking',
    description:
      'Monitor outstanding invoices, payment status, and cash flow so you always know what is collected and what is due.',
  },
  {
    icon: CircleDollarSign,
    title: 'Project Profitability',
    description:
      'See real-time margins by project, client, and office with live cost, revenue, and budget variance reporting.',
  },
]

export const CFO_QUESTIONS_EYEBROW = 'For accountants & CFOs'

export const CFO_QUESTIONS_TITLE = 'Share Avyro with your firm'

export const ACCOUNTANT_CFO_QUESTIONS = [
  {
    question: 'How do I consolidate timesheets and invoices in one place?',
    answer:
      'Avyro connects time tracking, expense capture, and billing in one system — so approved hours flow directly into invoices without manual re-entry.',
  },
  {
    question: 'How do I track project profitability in real time?',
    answer:
      'Monitor budgets, actual costs, billable hours, and margins live by project, client, or office so you catch issues before they affect the bottom line.',
  },
  {
    question: 'How do I streamline billing and payment follow-ups?',
    answer:
      'Automate invoice generation, track payment status, and get visibility into outstanding receivables so your team spends less time chasing numbers.',
  },
] as const

export const ACCOUNTANTS_CFOS_PAGE = {
  headingId: 'accountants-cfos-heading',
  eyebrow: ACCOUNTANTS_CFOS_EYEBROW,
  headline: ACCOUNTANTS_CFOS_HEADLINE,
  subtitle: ACCOUNTANTS_CFOS_SUBTITLE,
  beforeCard: CFO_BEFORE_CARD,
  afterCard: CFO_AFTER_CARD,
  capabilitiesEyebrow: CFO_CAPABILITIES_EYEBROW,
  capabilitiesTitle: CFO_CAPABILITIES_TITLE,
  capabilitiesVisual: CFO_CAPABILITIES_VISUAL,
  capabilities: ACCOUNTANT_CAPABILITIES,
  questionsEyebrow: CFO_QUESTIONS_EYEBROW,
  questionsTitle: CFO_QUESTIONS_TITLE,
  questions: ACCOUNTANT_CFO_QUESTIONS,
} as const

export const ACCOUNTANT_CFO_FEATURES = [
  {
    icon: FileSpreadsheet,
    title: 'End spreadsheet chaos',
    description: 'One connected financial system',
  },
  {
    icon: Receipt,
    title: 'Bill faster',
    description: 'Automated invoice generation',
  },
  {
    icon: CircleDollarSign,
    title: 'Protect margins',
    description: 'Live profitability tracking',
  },
  {
    icon: Wallet,
    title: 'Improve cash flow',
    description: 'Clear payment visibility',
  },
] as const

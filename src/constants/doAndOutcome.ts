import type { LucideIcon } from 'lucide-react'
import {
  ClipboardList,
  Clock3,
  Handshake,
  Package,
  ReceiptText,
  UsersRound,
} from 'lucide-react'
import { OUTCOME_FOOTNOTE, OUTCOME_METRICS } from './outcomeMetrics'

export type DoOutcomeAccent = 'purple' | 'blue' | 'orange' | 'pink'

export const DO_OUTCOME_ACCENTS: Record<DoOutcomeAccent, string> = {
  purple: '#8b5cf6',
  blue: '#3b82f6',
  orange: '#f97316',
  pink: '#ec4899',
}

export interface DoAndOutcomeItem {
  id: string
  step: string
  label: string
  doTitle: string
  doDescription: string
  features: string[]
  outcomeMetric: string
  outcomeLabel: string
  outcomeCaption: string
  accent: DoOutcomeAccent
  icon: LucideIcon
}

export const DO_AND_OUTCOME_BADGE = 'Why firms run better with Avyro'

export const DO_AND_OUTCOME_HEADLINE = 'One platform built for how firms operate.'
export const DO_AND_OUTCOME_HEADLINE_ACCENT =
  'Visibility. Control. Better decisions.'

export const DO_AND_OUTCOME_SUBTITLE =
  'Most tools optimize a department. Avyro helps AEC firms run the whole business — so every team executes with clarity, every handoff stays intact, and leadership decides with full control. The capabilities below are proof of that one idea.'

export const DO_AND_OUTCOME_DO_LABEL = 'Avyro does this'
export const DO_AND_OUTCOME_GET_LABEL = 'You get this'

export const DO_AND_OUTCOME_ROLLUP =
  'Six capabilities. One operational foundation. Next: see it as a single record through the week.'

export const DO_AND_OUTCOME_FOOTNOTE = OUTCOME_FOOTNOTE

export const DO_AND_OUTCOME_PRIMARY_CTA = {
  label: 'See the one-record wedge',
  href: '#one-record-week',
} as const

export const DO_AND_OUTCOME_SECONDARY_CTA = {
  label: 'Book a walkthrough',
  href: '#contact-us',
} as const

export const DO_AND_OUTCOME_ITEMS: DoAndOutcomeItem[] = [
  {
    id: 'crm',
    step: OUTCOME_METRICS.winWork.step,
    label: OUTCOME_METRICS.winWork.label,
    doTitle: 'Win work without re-typing client data.',
    doDescription:
      'Opportunities, proposals, and client records stay linked. A signed deal opens the project — budget and contacts included.',
    features: [
      'AI-assisted client and opportunity forms',
      'Proposals built from live data',
      'Won deal → live project, automatically',
    ],
    outcomeMetric: OUTCOME_METRICS.winWork.metric,
    outcomeLabel: OUTCOME_METRICS.winWork.outcomeLabel,
    outcomeCaption: OUTCOME_METRICS.winWork.caption,
    accent: 'purple',
    icon: Handshake,
  },
  {
    id: 'resource',
    step: OUTCOME_METRICS.resourcing.step,
    label: OUTCOME_METRICS.resourcing.label,
    doTitle: 'Know who is free — and who is overbooked.',
    doDescription:
      'One view of your team across every project. Staff the right people before the week is wasted.',
    features: [
      'Live workload across all projects',
      'Assign by project and phase',
      'Catch double-bookings early',
    ],
    outcomeMetric: OUTCOME_METRICS.resourcing.metric,
    outcomeLabel: OUTCOME_METRICS.resourcing.outcomeLabel,
    outcomeCaption: OUTCOME_METRICS.resourcing.caption,
    accent: 'blue',
    icon: UsersRound,
  },
  {
    id: 'delivery',
    step: OUTCOME_METRICS.workPlans.step,
    label: OUTCOME_METRICS.workPlans.label,
    doTitle: 'One live plan — not five stale copies.',
    doDescription:
      'Schedule, budget, and files sit on the project everyone shares. Changes show up for the whole team.',
    features: [
      'Phases, milestones, and timelines',
      'Budget next to the work',
      'No exported spreadsheet copies',
    ],
    outcomeMetric: OUTCOME_METRICS.workPlans.metric,
    outcomeLabel: OUTCOME_METRICS.workPlans.outcomeLabel,
    outcomeCaption: OUTCOME_METRICS.workPlans.caption,
    accent: 'orange',
    icon: ClipboardList,
  },
  {
    id: 'time',
    step: OUTCOME_METRICS.timeCapture.step,
    label: OUTCOME_METRICS.timeCapture.label,
    doTitle: 'Review hours — don’t rebuild Friday from memory.',
    doDescription:
      'Work maps to the right project as it happens. Your team approves — they don’t invent.',
    features: [
      'Activity tracked during the day',
      'Smart project mapping',
      'Review and approve, not recall',
    ],
    outcomeMetric: OUTCOME_METRICS.timeCapture.metric,
    outcomeLabel: OUTCOME_METRICS.timeCapture.outcomeLabel,
    outcomeCaption: OUTCOME_METRICS.timeCapture.caption,
    accent: 'pink',
    icon: Clock3,
  },
  {
    id: 'billing',
    step: OUTCOME_METRICS.billing.step,
    label: OUTCOME_METRICS.billing.label,
    doTitle: 'Bill from approved work — not a month-end rebuild.',
    doDescription:
      'Approved timesheets flow into invoices. Finance stops chasing PMs and rebuilding spreadsheets.',
    features: [
      'Invoices from approved time',
      'Open balances and collections in one view',
      'Profitability by project, live',
    ],
    outcomeMetric: OUTCOME_METRICS.billing.metric,
    outcomeLabel: OUTCOME_METRICS.billing.outcomeLabel,
    outcomeCaption: OUTCOME_METRICS.billing.caption,
    accent: 'purple',
    icon: ReceiptText,
  },
  {
    id: 'assets',
    step: OUTCOME_METRICS.assets.step,
    label: OUTCOME_METRICS.assets.label,
    doTitle: 'Keep seats and licenses visible while the firm delivers.',
    doDescription:
      'While projects run, renewals and seat assignments stay on the firm record — so you stop paying for tools you cannot see.',
    features: [
      'Licenses and renewals in one register',
      'Assign the right seats to the right people',
      'Catch ghost seats before they renew',
    ],
    outcomeMetric: OUTCOME_METRICS.assets.metric,
    outcomeLabel: OUTCOME_METRICS.assets.outcomeLabel,
    outcomeCaption: OUTCOME_METRICS.assets.caption,
    accent: 'blue',
    icon: Package,
  },
]

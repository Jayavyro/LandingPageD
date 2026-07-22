import type { LucideIcon } from 'lucide-react'
import {
  ChartNoAxesCombined,
  ClipboardList,
  Clock3,
  Handshake,
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

export const DO_AND_OUTCOME_DO_LABEL = 'How this stage improves'
export const DO_AND_OUTCOME_GET_LABEL = 'What the firm gains'

export const DO_AND_OUTCOME_ROLLUP =
  'Every stage. One shared record. One operating system.'   
  export const DO_AND_OUTCOME_ROLLUP_ACCENT = 'See how the entire firm runs from a single connected workflow.'
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
    id: 'win-business',
    step: OUTCOME_METRICS.winWork.step,
    label: OUTCOME_METRICS.winWork.label,
    doTitle: 'Start every project ready to deliver.',
    doDescription:
      'Avyro keeps pursuits, proposals, and clients on one record. A signed deal becomes a live project with contacts and budget already in place.',
    features: [
      'No duplicate setup',
      'Connected proposals',
      'Live pipeline visibility',
    ],
    outcomeMetric: OUTCOME_METRICS.winWork.metric,
    outcomeLabel: OUTCOME_METRICS.winWork.outcomeLabel,
    outcomeCaption: OUTCOME_METRICS.winWork.caption,
    accent: 'purple',
    icon: Handshake,
  },
  {
    id: 'plan-team',
    step: OUTCOME_METRICS.resourcing.step,
    label: OUTCOME_METRICS.resourcing.label,
    doTitle: 'Put the right people on the right work.',
    doDescription:
      'Avyro shows live firm-wide availability. Assign the right team by skill and workload so utilization rises and idle time falls.',
    features: [
      'Live capacity across projects',
      'Assign by skill and load',
      'Catch overbooking early',
    ],
    outcomeMetric: OUTCOME_METRICS.resourcing.metric,
    outcomeLabel: OUTCOME_METRICS.resourcing.outcomeLabel,
    outcomeCaption: OUTCOME_METRICS.resourcing.caption,
    accent: 'blue',
    icon: UsersRound,
  },
  {
    id: 'deliver-project',
    step: OUTCOME_METRICS.workPlans.step,
    label: OUTCOME_METRICS.workPlans.label,
    doTitle: 'Deliver from one live plan shared by everyone.',
    doDescription:
      'Schedule, budget, and progress sit on the same project record. Teams execute with clarity; leadership spots risk while it can still be fixed.',
    features: [
      'Plan and budget together',
      'Scope updates stay live',
      'At-risk jobs surface early',
    ],
    outcomeMetric: OUTCOME_METRICS.workPlans.metric,
    outcomeLabel: OUTCOME_METRICS.workPlans.outcomeLabel,
    outcomeCaption: OUTCOME_METRICS.workPlans.caption,
    accent: 'orange',
    icon: ClipboardList,
  },
  {
    id: 'capture-hours',
    step: OUTCOME_METRICS.timeCapture.step,
    label: OUTCOME_METRICS.timeCapture.label,
    doTitle: 'Capture billable work as the day happens.',
    doDescription:
      'Avyro maps activity to the right project in real time. Teams review and approve hours — they don’t rebuild the week from memory.',
    features: [
      'Hours map to projects',
      'Review instead of recall',
      'Clean effort for finance',
    ],
    outcomeMetric: OUTCOME_METRICS.timeCapture.metric,
    outcomeLabel: OUTCOME_METRICS.timeCapture.outcomeLabel,
    outcomeCaption: OUTCOME_METRICS.timeCapture.caption,
    accent: 'pink',
    icon: Clock3,
  },
  {
    id: 'turn-revenue',
    step: OUTCOME_METRICS.billing.step,
    label: OUTCOME_METRICS.billing.label,
    doTitle: 'Turn completed work into revenue faster.',
    doDescription:
      'Approved time and scope flow straight into billing. Finance invoices faster, collections stay visible, and revenue follows the work already delivered.',
    features: [
      'Invoice from approved work',
      'Collections stay visible',
      'Live project profitability',
    ],
    outcomeMetric: OUTCOME_METRICS.billing.metric,
    outcomeLabel: OUTCOME_METRICS.billing.outcomeLabel,
    outcomeCaption: OUTCOME_METRICS.billing.caption,
    accent: 'purple',
    icon: ReceiptText,
  },
  {
    id: 'measure-performance',
    step: OUTCOME_METRICS.assets.step,
    label: OUTCOME_METRICS.assets.label,
    doTitle: 'See the whole business in real time.',
    doDescription:
      'Utilization, delivery, and revenue live in one leadership view. Owners decide from how the firm is running now — not last month’s report.',
    features: [
      'One leadership performance view',
      'Overhead stays visible',
      'Decide on live data',
    ],
    outcomeMetric: OUTCOME_METRICS.assets.metric,
    outcomeLabel: OUTCOME_METRICS.assets.outcomeLabel,
    outcomeCaption: OUTCOME_METRICS.assets.caption,
    accent: 'blue',
    icon: ChartNoAxesCombined,
  },
]

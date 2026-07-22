import type { LucideIcon } from 'lucide-react'
import {
  ClipboardList,
  Clock3,
  Handshake,
  Package,
  ReceiptText,
  UsersRound,
} from 'lucide-react'

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

export const DO_AND_OUTCOME_BADGE = 'How it works'

export const DO_AND_OUTCOME_HEADLINE = 'What Avyro runs.'
export const DO_AND_OUTCOME_HEADLINE_ACCENT = 'What your firm gains.'

export const DO_AND_OUTCOME_SUBTITLE =
  'Six steps, one record — from first call to final invoice. Tap a step to see the work and the payoff.'

export const DO_AND_OUTCOME_DO_LABEL = 'Avyro does this'
export const DO_AND_OUTCOME_GET_LABEL = 'You get this'

export const DO_AND_OUTCOME_ROLLUP =
  'One platform. Six steps. Less rework, more billed hours, faster cash.'

export const DO_AND_OUTCOME_FOOTNOTE =
  '*Based on measured results at AEC firms using Avyro — your firm’s numbers may vary.'

export const DO_AND_OUTCOME_ITEMS: DoAndOutcomeItem[] = [
  {
    id: 'crm',
    step: '01',
    label: 'Win Work',
    doTitle: 'Win work without re-typing client data.',
    doDescription:
      'Opportunities, proposals, and client records stay linked. A signed deal opens the project — budget and contacts included.',
    features: [
      'AI-assisted client and opportunity forms',
      'Proposals built from live data',
      'Won deal → live project, automatically',
    ],
    outcomeMetric: '50%',
    outcomeLabel: 'Less manual data entry',
    outcomeCaption: 'Half the setup work when a deal becomes a project.',
    accent: 'purple',
    icon: Handshake,
  },
  {
    id: 'resource',
    step: '02',
    label: 'Resourcing',
    doTitle: 'Know who is free — and who is overbooked.',
    doDescription:
      'One view of your team across every project. Staff the right people before the week is wasted.',
    features: [
      'Live workload across all projects',
      'Assign by project and phase',
      'Catch double-bookings early',
    ],
    outcomeMetric: '15%+',
    outcomeLabel: 'Higher utilization',
    outcomeCaption: 'More billable time on real work, less bench time.',
    accent: 'blue',
    icon: UsersRound,
  },
  {
    id: 'delivery',
    step: '03',
    label: 'Work Plans',
    doTitle: 'One live plan — not five stale copies.',
    doDescription:
      'Schedule, budget, and files sit on the project everyone shares. Changes show up for the whole team.',
    features: [
      'Phases, milestones, and timelines',
      'Budget next to the work',
      'No exported spreadsheet copies',
    ],
    outcomeMetric: '−34%',
    outcomeLabel: 'Fewer overruns',
    outcomeCaption: 'Spot slipping jobs early — while you can still fix them.',
    accent: 'orange',
    icon: ClipboardList,
  },
  {
    id: 'time',
    step: '04',
    label: 'Time Capture',
    doTitle: 'Review hours — don’t rebuild Friday from memory.',
    doDescription:
      'Work maps to the right project as it happens. Your team approves — they don’t invent.',
    features: [
      'Activity tracked during the day',
      'Smart project mapping',
      'Review and approve, not recall',
    ],
    outcomeMetric: '10+ hrs',
    outcomeLabel: 'Billable hours back weekly',
    outcomeCaption: 'Hours worked get billed — not forgotten at week’s end.',
    accent: 'pink',
    icon: Clock3,
  },
  {
    id: 'billing',
    step: '05',
    label: 'Billing',
    doTitle: 'Bill from approved work — not a month-end rebuild.',
    doDescription:
      'Approved timesheets flow into invoices. Finance stops chasing PMs and rebuilding spreadsheets.',
    features: [
      'Invoices from approved time',
      'Open balances and collections in one view',
      'Profitability by project, live',
    ],
    outcomeMetric: '1.8×',
    outcomeLabel: 'Faster payment',
    outcomeCaption: 'Invoices out the day work is approved — cash in sooner.',
    accent: 'purple',
    icon: ReceiptText,
  },
  {
    id: 'assets',
    step: '06',
    label: 'Asset Management',
    doTitle: 'Manage your software assets.',
    doDescription:
      'Licenses, renewals, and seat assignments in one register — so you buy what you need and never miss a due date.',
    features: [
      'Never miss a due — and save money',
      'Assign the correct amount of licenses',
      'Get complete visibility',
    ],
    outcomeMetric: '100%',
    outcomeLabel: 'License visibility',
    outcomeCaption: 'Know every seat, every renewal, every assignment.',
    accent: 'blue',
    icon: Package,
  },
]

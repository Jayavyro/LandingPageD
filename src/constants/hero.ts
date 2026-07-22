import type { LucideIcon } from 'lucide-react'
import {
  BarChart3,
  ClipboardList,
  Clock3,
  Handshake,
  ReceiptText,
  UsersRound,
} from 'lucide-react'

export const HERO_BADGE = 'THE OPERATING SYSTEM FOR AEC FIRMS'

export const HERO_HEADLINE_LINE = 'Built for the Way Modern'

export const HERO_HEADLINE_ACCENT_LINE = 'AEC Firms Actually Operate.'

export const HERO_HEADLINE_ACCENT = HERO_HEADLINE_ACCENT_LINE

export const HERO_SUBHEAD =
  'One AI-native platform to win work, plan resources, manage projects, capture time, bill accurately, and run your entire AEC firm with complete visibility.'

export const HERO_CALCULATOR_CTA = 'Or calculate your firm’s uncaptured revenue'

export const HERO_CALCULATOR_HREF = '#financial-calculator'

/** @deprecated Use HERO_SUBHEAD — kept for any external references */
export const HERO_DESCRIPTION = HERO_SUBHEAD

/** @deprecated Merged into HERO_SUBHEAD */
export const HERO_OUTCOME_LINE = HERO_SUBHEAD

/** @deprecated Shown in Industry section */
export const HERO_DISCIPLINES = 'Architecture · Engineering · Construction'

export const HERO_POSITION_HINT = 'Hover a name to see details'

export interface HeroPositionAxis {
  id: 'crm' | 'ra' | 'timesheets'
  label: string
}

export interface HeroPositionMarker {
  id: string
  name: string
  category: string
  detail: string
  axis?: 'crm' | 'ra' | 'timesheets'
  /** Distance along its axis, 0 = center, 100 = outer edge */
  axisPosition?: number
  isAvyro?: boolean
}

export const HERO_POSITION_AXES: HeroPositionAxis[] = [
  { id: 'crm', label: 'CRM' },
  { id: 'timesheets', label: 'TIME' },
  { id: 'ra', label: 'RA' },
]

/** Axis order: CRM top, RA bottom-right, TIME bottom-left */
export const HERO_POSITION_AXIS_ANGLES: Record<HeroPositionAxis['id'], number> = {
  crm: -90,
  ra: 30,
  timesheets: 150,
}

export const HERO_POSITION_MARKERS: HeroPositionMarker[] = [
  {
    id: 'cosential',
    name: 'Cosential',
    category: 'Best CRM for AEC',
    axis: 'crm',
    axisPosition: 38,
    detail:
      'Industry-leading AEC CRM for pursuits and proposals. Strong at winning work — but projects, time, and billing still live elsewhere.',
  },
  {
    id: 'deltek',
    name: 'Deltek',
    category: 'Best resource allocation for AEC',
    axis: 'ra',
    axisPosition: 38,
    detail:
      'Trusted for resourcing and project financials in AEC. Built for staffing plans — not a full CRM or smart timesheet stack on one record.',
  },
  {
    id: 'bqe',
    name: 'BQE CORE',
    category: 'Best timesheets for AEC',
    axis: 'timesheets',
    axisPosition: 38,
    detail:
      'Known for time and billing in professional services. Captures hours well — but the deal and resourcing data still sit in other tools.',
  },
  {
    id: 'avyro',
    name: 'Avyro',
    category: 'CRM + RA + Timesheets — one platform',
    isAvyro: true,
    detail:
      'Built for AEC firms that want all three on one record. Win work, staff projects, capture time, and invoice without switching tools or re-typing data.',
  },
]

/** Avyro coverage on the chart — strong on all three axes */
export const HERO_POSITION_AVYRO_SCORES = {
  crm: 92,
  ra: 90,
  timesheets: 91,
} as const

export const HERO_EXPLORER_LABEL = 'What Avyro runs for you'
export const HERO_EXPLORER_HINT = 'Tap a step — each one connects to the next.'

export type HeroStageAccent = 'purple' | 'blue' | 'orange' | 'pink'

export const HERO_STAGE_ACCENT_COLORS: Record<HeroStageAccent, string> = {
  purple: '#8b5cf6',
  blue: '#3b82f6',
  orange: '#f97316',
  pink: '#ec4899',
}

export interface HeroWorkflowStage {
  id: string
  step: string
  label: string
  title: string
  description: string
  metric: string
  accent: HeroStageAccent
  icon: LucideIcon
}

export const HERO_WORKFLOW_STAGES: HeroWorkflowStage[] = [
  {
    id: 'win-work',
    step: '01',
    label: 'Win work',
    title: 'AI CRM that closes, not types.',
    description:
      'AI fills opportunity forms and builds proposals from captured client data. Won deals open projects automatically.',
    metric: 'Won deals become projects instantly',
    accent: 'purple',
    icon: Handshake,
  },
  {
    id: 'plan-people',
    step: '02',
    label: 'Plan people',
    title: 'Always know who works on what.',
    description:
      'One live capacity view across every project. Overbooking and idle bench time show up before they cost you.',
    metric: '15%+ utilization gained',
    accent: 'blue',
    icon: UsersRound,
  },
  {
    id: 'deliver',
    step: '03',
    label: 'Deliver',
    title: 'Deliver on the record that won the job.',
    description:
      'Schedules, documents, progress, and budgets stay together from kickoff to closeout. Nothing gets rebuilt.',
    metric: 'One record, kickoff to closeout',
    accent: 'orange',
    icon: ClipboardList,
  },
  {
    id: 'capture-time',
    step: '04',
    label: 'Capture time',
    title: 'Timesheets people review, not invent.',
    description:
      'Daily work maps itself to the right project and phase. Hours that used to vanish now land on invoices.',
    metric: '10+ hrs/week recovered per person',
    accent: 'pink',
    icon: Clock3,
  },
  {
    id: 'get-paid',
    step: '05',
    label: 'Get paid',
    title: 'Invoice the day work is approved.',
    description:
      'Approved hours flow straight into invoices. No month-end rebuilds and no chasing project managers.',
    metric: 'Firms get paid 1.8× faster',
    accent: 'purple',
    icon: ReceiptText,
  },
  {
    id: 'see-numbers',
    step: '06',
    label: 'See numbers',
    title: 'Lead from live numbers.',
    description:
      'Profitability, utilization, and risk — fed by real work as it happens, not last month’s PDF export.',
    metric: 'Cut software spend up to 40%',
    accent: 'blue',
    icon: BarChart3,
  },
]

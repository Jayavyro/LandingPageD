import { OUTCOME_FOOTNOTE, OUTCOME_METRICS } from './outcomeMetrics'

export interface CaseStudyTextBlock {
  label: string
  copy: string
}

export interface CaseStudyQuote {
  quote: string
  name: string
  role: string
  company: string
}

export interface CaseStudyMetric {
  id: string
  value: string
  title: string
  caption: string
}

export const CASE_STUDY_BADGE = 'A firm like yours'

/** [primary line, accent line] */
export const CASE_STUDY_HEADLINE_LINES: [string, string] = [
  'They ran the same leak.',
  'Then they ran one record.',
]

export const CASE_STUDY_SUBTITLE =
  'One AEC firm. A few of the outcomes from What we do — measured after they connected win → time → bill on Avyro.'

export const CASE_STUDY_META = 'fivD Architecture · ~mid-size AEC · Flagship partner'

export const CASE_STUDY_PROBLEM: CaseStudyTextBlock = {
  label: 'Before',
  copy:
    'CRM, time, and billing lived in separate tools. Capacity and invoices drifted — the same leak pattern as a typical 50-person firm.',
}

export const CASE_STUDY_SOLUTION: CaseStudyTextBlock = {
  label: 'After',
  copy:
    'fivD put win, delivery, timesheets, and billing on one connected record — so principal, PM, and finance work from the same truth.',
}

export const CASE_STUDY_WHO: CaseStudyTextBlock = {
  label: 'Who',
  copy:
    'fivD Architecture — a mid-size architecture practice (~30–50 people), the same size band as the leak math and calculator defaults.',
}

export const CASE_STUDY_QUOTE: CaseStudyQuote = {
  quote:
    'Friday stopped being a rebuild. Hours map as work happens, and invoices go out from approved time — not from chasing spreadsheets.',
  name: 'Gaurav Chopra',
  role: 'Co-Founder',
  company: 'fivD',
}

/** Only 2–3 locked outcomes — ties §1 money + §4 calculator. */
export const CASE_STUDY_METRICS: CaseStudyMetric[] = [
  {
    id: OUTCOME_METRICS.resourcing.id,
    value: OUTCOME_METRICS.resourcing.metric,
    title: OUTCOME_METRICS.resourcing.outcomeLabel,
    caption: OUTCOME_METRICS.resourcing.caption,
  },
  {
    id: OUTCOME_METRICS.timeCapture.id,
    value: OUTCOME_METRICS.timeCapture.metric,
    title: OUTCOME_METRICS.timeCapture.outcomeLabel,
    caption: OUTCOME_METRICS.timeCapture.caption,
  },
  {
    id: OUTCOME_METRICS.billing.id,
    value: OUTCOME_METRICS.billing.metric,
    title: OUTCOME_METRICS.billing.outcomeLabel,
    caption: OUTCOME_METRICS.billing.caption,
  },
]

export const CASE_STUDY_FOOTNOTE = OUTCOME_FOOTNOTE

export const CASE_STUDY_PRIMARY_CTA = {
  label: 'Book a walkthrough',
  href: '#contact-us',
} as const

export const CASE_STUDY_SECONDARY_CTA = {
  label: 'See pricing',
  href: '#pricing',
} as const

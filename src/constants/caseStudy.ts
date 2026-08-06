export const CASE_STUDY_BADGE = 'Case study'

/** [primary line, accent line] */
export const CASE_STUDY_HEADLINE_LINES: [string, string] = [
  'Case study: fivD,',
  'a 150-person AE firm.',
]

export const CASE_STUDY_SUBTITLE =
  "fivD is running Avyro's proof of concept across CRM, resourcing, and billing. Verified utilization and cycle-time results will be published here once the PoC concludes."

export const CASE_STUDY_META = 'fivD · 150-person AE firm · PoC through Nov 2026'

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

export const CASE_STUDY_PROBLEM: CaseStudyTextBlock = {
  label: 'Engagement',
  copy:
    'fivD is running Avyro across CRM, resourcing, and billing in a live proof of concept — not a slide-deck pilot.',
}

export const CASE_STUDY_SOLUTION: CaseStudyTextBlock = {
  label: 'Status',
  copy:
    'Outcome metrics and quote — pending PoC completion. Not fabricated for launch.',
}

export const CASE_STUDY_WHO: CaseStudyTextBlock = {
  label: 'Who',
  copy: 'fivD — a 150-person architecture and engineering firm evaluating Avyro as a front-office operating layer.',
}

export const CASE_STUDY_QUOTE: CaseStudyQuote = {
  quote:
    'Verified utilization and cycle-time results will be published here once the PoC concludes.',
  name: 'fivD',
  role: 'Proof of concept',
  company: 'Pending completion',
}

export const CASE_STUDY_METRICS: CaseStudyMetric[] = [
  {
    id: 'headcount',
    value: '150',
    title: 'People on the team',
    caption: 'Mid-market AE firm running the PoC.',
  },
  {
    id: 'poc-window',
    value: 'Nov 2026',
    title: 'Proof-of-concept runs through',
    caption: 'Results publish after the window closes.',
  },
  {
    id: 'scope',
    value: '3',
    title: 'Modules in scope',
    caption: 'CRM, resourcing, and billing on one record.',
  },
]

export const CASE_STUDY_FOOTNOTE =
  'Outcome metrics and quote — pending PoC completion. Not fabricated for launch.'

export const CASE_STUDY_PRIMARY_CTA = {
  label: 'Book a walkthrough',
  href: '#contact-us',
} as const

export const CASE_STUDY_SECONDARY_CTA = {
  label: 'See pricing',
  href: '#pricing',
} as const

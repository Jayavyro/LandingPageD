import { OUTCOME_METRICS } from './outcomeMetrics'

export const ONE_RECORD_BADGE = 'The wedge'

export const ONE_RECORD_HEADLINE = 'Six outcomes. One record.'
export const ONE_RECORD_HEADLINE_ACCENT = 'That is the product.'

export const ONE_RECORD_SUBTITLE =
  'You already saw what each step does. Here is the only point that matters: they share one firm record — so the ~$1.5M leak stops stacking.'

/** Compact flow — labels only. No second tour of do/get/outcome. */
export const ONE_RECORD_FLOW = [
  OUTCOME_METRICS.winWork.label,
  OUTCOME_METRICS.resourcing.label,
  OUTCOME_METRICS.workPlans.label,
  OUTCOME_METRICS.timeCapture.label,
  OUTCOME_METRICS.billing.label,
  OUTCOME_METRICS.assets.label,
] as const

export const ONE_RECORD_WEDGE =
  'Win, staff, plan, time, bill, and assets stay connected on one record — so every handoff stays in sync for the principal, PM, and finance.'

export const ONE_RECORD_PROOF_NOTE =
  'Outcomes above are from measured AEC firms using Avyro — your numbers will differ. Next: run yours.'

export const ONE_RECORD_PRIMARY_CTA = {
  label: 'See what this costs your firm',
  href: '#financial-calculator',
} as const

export const ONE_RECORD_SECONDARY_CTA = {
  label: 'Book a walkthrough',
  href: '#contact-us',
} as const

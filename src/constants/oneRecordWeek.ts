import { OUTCOME_METRICS } from './outcomeMetrics'

export const ONE_RECORD_BADGE = 'What Makes Avyro Different'

export const ONE_RECORD_HEADLINE = 'Six business stages. One shared record.'
export const ONE_RECORD_HEADLINE_ACCENT = 'That\'s what makes Avyro different.'

export const ONE_RECORD_SUBTITLE =
  'Every stage shares the same business record, so information never has to be recreated or reconciled.'

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
  'Every team works from the same business record, so handoffs stay connected from pursuit to payment.'

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

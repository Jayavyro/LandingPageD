/** Canonical outcome chips — shared by Do & Outcome and One Record Week. */

export interface OutcomeMetric {
  id: string
  step: string
  label: string
  metric: string
  outcomeLabel: string
  caption: string
}

export const OUTCOME_FOOTNOTE =
  '*Based on measured results at AEC firms using Avyro — your firm’s numbers may vary.'

export const OUTCOME_METRICS = {
  winWork: {
    id: 'win-work',
    step: '01',
    label: 'Win Work',
    metric: '50%',
    outcomeLabel: 'Less manual data entry',
    caption: 'Half the setup work when a deal becomes a project.',
  },
  resourcing: {
    id: 'resourcing',
    step: '02',
    label: 'Resourcing',
    metric: '15%+',
    outcomeLabel: 'Higher utilization',
    caption: 'More billable time on real work, less bench time.',
  },
  workPlans: {
    id: 'work-plans',
    step: '03',
    label: 'Work Plans',
    metric: '−34%',
    outcomeLabel: 'Fewer overruns',
    caption: 'Spot slipping jobs early — while you can still fix them.',
  },
  timeCapture: {
    id: 'time-capture',
    step: '04',
    label: 'Time Capture',
    metric: '10+ hrs',
    outcomeLabel: 'Billable hours back weekly',
    caption: 'Hours worked get billed — not forgotten at week’s end.',
  },
  billing: {
    id: 'billing',
    step: '05',
    label: 'Billing',
    metric: '1.8×',
    outcomeLabel: 'Faster payment',
    caption: 'Invoices out the day work is approved — cash in sooner.',
  },
  assets: {
    id: 'assets',
    step: '06',
    label: 'Asset Management',
    metric: '100%',
    outcomeLabel: 'License visibility',
    caption: 'Know every seat, every renewal, every assignment.',
  },
} as const satisfies Record<string, OutcomeMetric>

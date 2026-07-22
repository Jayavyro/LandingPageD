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
    label: 'Win New Business',
    metric: '50%',
    outcomeLabel: 'Less pursuit admin',
    caption: 'Half the admin when a win becomes a live job.',
  },
  resourcing: {
    id: 'resourcing',
    step: '02',
    label: 'Plan the Right Team',
    metric: '15%+',
    outcomeLabel: 'Higher utilization',
    caption: 'More payroll on billable work — less idle capacity.',
  },
  workPlans: {
    id: 'work-plans',
    step: '03',
    label: 'Deliver Every Project',
    metric: '−34%',
    outcomeLabel: 'Fewer overruns',
    caption: 'Spot slipping jobs early — while margin can recover.',
  },
  timeCapture: {
    id: 'time-capture',
    step: '04',
    label: 'Capture Every Hour',
    metric: '10+ hrs',
    outcomeLabel: 'Billable hours recovered weekly',
    caption: 'Hours worked get recorded — and can be billed.',
  },
  billing: {
    id: 'billing',
    step: '05',
    label: 'Turn Work Into Revenue',
    metric: '1.8×',
    outcomeLabel: 'Faster payment',
    caption: 'Invoice on approval — cash comes back sooner.',
  },
  assets: {
    id: 'assets',
    step: '06',
    label: 'Measure Firm Performance',
    metric: '100%',
    outcomeLabel: 'Operational visibility',
    caption: 'See utilization, delivery, and cost in one live view.',
  },
} as const satisfies Record<string, OutcomeMetric>

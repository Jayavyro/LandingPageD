export interface CalculatorInputs {
  billableStaff: number
  billableRate: number
  weeklyBillableHours: number
  uncapturedPercent: number
}

/** HTML formula: team × 2000 × 0.12 × rate (12-point utilization gap). */
export const CALCULATOR_DEFAULTS: CalculatorInputs = {
  billableStaff: 150,
  billableRate: 150,
  weeklyBillableHours: 40,
  uncapturedPercent: 12,
}

export const BILLABLE_HOURS_PER_YEAR = 2000
export const AVYRO_RECOVERY_RATE = 1

export const CALCULATOR_LIMITS = {
  billableStaff: { min: 15, max: 500, step: 1 },
  billableRate: { min: 80, max: 300, step: 5 },
  weeklyBillableHours: { min: 20, max: 45, step: 1 },
  uncapturedPercent: { min: 3, max: 30, step: 1 },
} as const

export const CALCULATOR_BADGE = 'Estimate the leak'

export const CALCULATOR_HEADLINE = 'Estimate the leak at your firm size'
export const CALCULATOR_HEADLINE_ACCENT = 'Close a 12-point utilization gap.'

export const CALCULATOR_SUBTITLE =
  'Average studio utilization sits near 60%. High performers clear 72%. Use your team size and billable rate to estimate the annual value of closing that gap.'

export const CALCULATOR_BRIDGE =
  'Same 12-point gap math from the industry utilization story — sized to your headcount.'

export const CALCULATOR_INPUT_LABELS = {
  billableStaff: 'Team size',
  billableRate: 'Avg. billable rate ($/hr)',
  weeklyBillableHours: 'Weekly billable hours (target)',
  uncapturedPercent: 'Utilization gap %',
} as const

export const CALCULATOR_RESULTS_LABEL = 'Estimated annual value'

export const CALCULATOR_PRIMARY_LABEL =
  'Estimated annual value of closing a 12-point utilization gap'

export const CALCULATOR_PRIMARY_SUB =
  'Directional estimate — team × 2,000 hours × gap % × rate'

export const CALCULATOR_MONTHLY_LABEL = 'Monthly value'

export const CALCULATOR_HOURS_LABEL = 'Hours represented by the gap / year'

export const CALCULATOR_CURRENT_LABEL = 'Baseline utilization value'

export const CALCULATOR_PROJECTED_LABEL = 'Value after closing the gap'

export const CALCULATOR_TRUST_NOTE =
  'Estimate based on a 12-point utilization gap at 2,000 hours per person per year — not a quote. A walkthrough will refine it.'

export const CALCULATOR_CTA_LABEL = 'Book a walkthrough'
export const CALCULATOR_CTA_HREF = '#contact-us'

export interface CalculatorResults {
  annualBillableHours: number
  uncapturedHours: number
  recoveredHours: number
  additionalAnnualRevenue: number
  monthlyRevenueGain: number
  currentCapturedRevenue: number
  projectedCapturedRevenue: number
}

export function calculateAvyroSavings(
  inputs: CalculatorInputs,
): CalculatorResults {
  const { billableStaff, billableRate, uncapturedPercent } = inputs

  const annualBillableHours = billableStaff * BILLABLE_HOURS_PER_YEAR
  const uncapturedHours = annualBillableHours * (uncapturedPercent / 100)
  const recoveredHours = uncapturedHours * AVYRO_RECOVERY_RATE
  const additionalAnnualRevenue = recoveredHours * billableRate
  const monthlyRevenueGain = additionalAnnualRevenue / 12
  const currentCapturedRevenue =
    annualBillableHours * (1 - uncapturedPercent / 100) * billableRate
  const projectedCapturedRevenue = currentCapturedRevenue + additionalAnnualRevenue

  return {
    annualBillableHours,
    uncapturedHours,
    recoveredHours,
    additionalAnnualRevenue,
    monthlyRevenueGain,
    currentCapturedRevenue,
    projectedCapturedRevenue,
  }
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
  }).format(value)
}

export interface CalculatorInputs {
  billableStaff: number
  billableRate: number
  weeklyBillableHours: number
  uncapturedPercent: number
}

export const CALCULATOR_DEFAULTS: CalculatorInputs = {
  billableStaff: 30,
  billableRate: 145,
  weeklyBillableHours: 32,
  uncapturedPercent: 12,
}

export const BILLABLE_WEEKS_PER_YEAR = 48
export const AVYRO_RECOVERY_RATE = 0.7

export const CALCULATOR_LIMITS = {
  billableStaff: { min: 5, max: 250, step: 1 },
  billableRate: { min: 75, max: 350, step: 5 },
  weeklyBillableHours: { min: 20, max: 45, step: 1 },
  uncapturedPercent: { min: 3, max: 30, step: 1 },
} as const

export const CALCULATOR_SUBTITLE =
  'Estimate how much revenue your firm could recover by capturing billable time and accelerating billing with Avyro.'

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
  const { billableStaff, billableRate, weeklyBillableHours, uncapturedPercent } =
    inputs

  const annualBillableHours =
    billableStaff * weeklyBillableHours * BILLABLE_WEEKS_PER_YEAR

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

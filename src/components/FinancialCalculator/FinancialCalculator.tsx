import { useMemo, useState } from 'react'
import { ArrowRight, Calculator } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import LandingHashLink from '../LandingHashLink/LandingHashLink'
import {
  AVYRO_RECOVERY_RATE,
  CALCULATOR_BADGE,
  CALCULATOR_BRIDGE,
  CALCULATOR_CTA_HREF,
  CALCULATOR_CTA_LABEL,
  CALCULATOR_CURRENT_LABEL,
  CALCULATOR_DEFAULTS,
  CALCULATOR_HEADLINE,
  CALCULATOR_HEADLINE_ACCENT,
  CALCULATOR_HOURS_LABEL,
  CALCULATOR_INPUT_LABELS,
  CALCULATOR_LIMITS,
  CALCULATOR_MONTHLY_LABEL,
  CALCULATOR_PRIMARY_LABEL,
  CALCULATOR_PRIMARY_SUB,
  CALCULATOR_PROJECTED_LABEL,
  CALCULATOR_RESULTS_LABEL,
  CALCULATOR_SUBTITLE,
  CALCULATOR_TRUST_NOTE,
  calculateAvyroSavings,
  formatCurrency,
  formatNumber,
  type CalculatorInputs,
} from '../../constants/financialCalculator'
import './FinancialCalculator.css'

const EASE = [0.22, 1, 0.36, 1] as const

interface SliderFieldProps {
  id: string
  label: string
  value: number
  min: number
  max: number
  step: number
  formatValue: (value: number) => string
  onChange: (value: number) => void
}

function SliderField({
  id,
  label,
  value,
  min,
  max,
  step,
  formatValue,
  onChange,
}: SliderFieldProps) {
  return (
    <div className="financial-calculator__field">
      <div className="financial-calculator__field-head">
        <label htmlFor={id} className="financial-calculator__label">
          {label}
        </label>
        <span className="financial-calculator__value">{formatValue(value)}</span>
      </div>
      <input
        id={id}
        className="financial-calculator__slider"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </div>
  )
}

function FinancialCalculator() {
  const prefersReducedMotion = useReducedMotion()
  const [inputs, setInputs] = useState<CalculatorInputs>(CALCULATOR_DEFAULTS)

  const results = useMemo(() => calculateAvyroSavings(inputs), [inputs])

  const updateInput = <K extends keyof CalculatorInputs>(
    key: K,
    value: CalculatorInputs[K],
  ) => {
    setInputs((current) => ({ ...current, [key]: value }))
  }

  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-72px' },
          transition: { duration: 0.4, delay, ease: EASE },
        }

  return (
    <section
      id="financial-calculator"
      className="financial-calculator"
      aria-labelledby="financial-calculator-heading"
    >
      <div className="financial-calculator__ambient" aria-hidden="true">
        <div className="financial-calculator__grid-pattern" />
        <div className="financial-calculator__glow financial-calculator__glow--center" />
      </div>

      <div className="financial-calculator__container">
        <header className="financial-calculator__intro">
          <motion.p className="financial-calculator__badge" {...fadeUp(0)}>
            <Calculator
              className="financial-calculator__badge-icon"
              aria-hidden="true"
            />
            {CALCULATOR_BADGE}
          </motion.p>

          <motion.h2
            id="financial-calculator-heading"
            className="financial-calculator__title"
            {...fadeUp(0.05)}
          >
            <span className="financial-calculator__title-line">
              {CALCULATOR_HEADLINE}
            </span>
            <span className="financial-calculator__title-line financial-calculator__title-line--accent">
              {CALCULATOR_HEADLINE_ACCENT}
            </span>
          </motion.h2>

          <motion.p className="financial-calculator__description" {...fadeUp(0.08)}>
            {CALCULATOR_SUBTITLE}
          </motion.p>
        </header>

        <motion.p className="financial-calculator__bridge" {...fadeUp(0.1)}>
          {CALCULATOR_BRIDGE}
        </motion.p>

        <motion.div className="financial-calculator__panel" {...fadeUp(0.12)}>
          <div className="financial-calculator__inputs">
            <p className="financial-calculator__panel-label">Your firm</p>

            <SliderField
              id="billable-staff"
              label={CALCULATOR_INPUT_LABELS.billableStaff}
              value={inputs.billableStaff}
              min={CALCULATOR_LIMITS.billableStaff.min}
              max={CALCULATOR_LIMITS.billableStaff.max}
              step={CALCULATOR_LIMITS.billableStaff.step}
              formatValue={(value) => `${formatNumber(value)} people`}
              onChange={(value) => updateInput('billableStaff', value)}
            />

            <SliderField
              id="billable-rate"
              label={CALCULATOR_INPUT_LABELS.billableRate}
              value={inputs.billableRate}
              min={CALCULATOR_LIMITS.billableRate.min}
              max={CALCULATOR_LIMITS.billableRate.max}
              step={CALCULATOR_LIMITS.billableRate.step}
              formatValue={(value) => `${formatCurrency(value)}/hr`}
              onChange={(value) => updateInput('billableRate', value)}
            />

            <SliderField
              id="weekly-hours"
              label={CALCULATOR_INPUT_LABELS.weeklyBillableHours}
              value={inputs.weeklyBillableHours}
              min={CALCULATOR_LIMITS.weeklyBillableHours.min}
              max={CALCULATOR_LIMITS.weeklyBillableHours.max}
              step={CALCULATOR_LIMITS.weeklyBillableHours.step}
              formatValue={(value) => `${formatNumber(value)} hrs`}
              onChange={(value) => updateInput('weeklyBillableHours', value)}
            />

            <SliderField
              id="uncaptured-percent"
              label={CALCULATOR_INPUT_LABELS.uncapturedPercent}
              value={inputs.uncapturedPercent}
              min={CALCULATOR_LIMITS.uncapturedPercent.min}
              max={CALCULATOR_LIMITS.uncapturedPercent.max}
              step={CALCULATOR_LIMITS.uncapturedPercent.step}
              formatValue={(value) => `${value}%`}
              onChange={(value) => updateInput('uncapturedPercent', value)}
            />
          </div>

          <div className="financial-calculator__results" aria-live="polite">
            <p className="financial-calculator__results-label">
              {CALCULATOR_RESULTS_LABEL}
            </p>

            <p className="financial-calculator__results-primary">
              {formatCurrency(results.additionalAnnualRevenue)}
              <span className="financial-calculator__results-primary-sub">
                {CALCULATOR_PRIMARY_LABEL}
              </span>
            </p>
            <p className="financial-calculator__results-primary-note">
              {CALCULATOR_PRIMARY_SUB}
            </p>

            <div className="financial-calculator__results-grid">
              <div className="financial-calculator__result-card">
                <span className="financial-calculator__result-value">
                  {formatCurrency(results.monthlyRevenueGain)}
                </span>
                <span className="financial-calculator__result-caption">
                  {CALCULATOR_MONTHLY_LABEL}
                </span>
              </div>

              <div className="financial-calculator__result-card">
                <span className="financial-calculator__result-value">
                  {formatNumber(results.recoveredHours)}
                </span>
                <span className="financial-calculator__result-caption">
                  {CALCULATOR_HOURS_LABEL}
                </span>
              </div>

              <div className="financial-calculator__result-card">
                <span className="financial-calculator__result-value">
                  {formatCurrency(results.currentCapturedRevenue)}
                </span>
                <span className="financial-calculator__result-caption">
                  {CALCULATOR_CURRENT_LABEL}
                </span>
              </div>

              <div className="financial-calculator__result-card financial-calculator__result-card--highlight">
                <span className="financial-calculator__result-value">
                  {formatCurrency(results.projectedCapturedRevenue)}
                </span>
                <span className="financial-calculator__result-caption">
                  {CALCULATOR_PROJECTED_LABEL}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.footer className="financial-calculator__footer" {...fadeUp(0.16)}>
          <p className="financial-calculator__note">
            {CALCULATOR_TRUST_NOTE} Firms typically recover{' '}
            <strong>{Math.round(AVYRO_RECOVERY_RATE * 100)}%</strong> of leaked
            billable time.
          </p>
          <LandingHashLink
            to={CALCULATOR_CTA_HREF}
            className="financial-calculator__cta"
          >
            {CALCULATOR_CTA_LABEL}
            <ArrowRight
              className="financial-calculator__cta-icon"
              aria-hidden="true"
            />
          </LandingHashLink>
        </motion.footer>
      </div>
    </section>
  )
}

export default FinancialCalculator

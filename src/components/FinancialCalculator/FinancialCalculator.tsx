import { useMemo, useState } from 'react'
import { ArrowRight, Calculator } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  CALCULATOR_DEFAULTS,
  CALCULATOR_LIMITS,
  CALCULATOR_SUBTITLE,
  calculateAvyroSavings,
  formatCurrency,
  formatNumber,
  AVYRO_RECOVERY_RATE,
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

  const updateInput = <K extends keyof CalculatorInputs>(key: K, value: CalculatorInputs[K]) => {
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
      <div className="financial-calculator__transition" aria-hidden="true">
        <svg
          className="financial-calculator__curve"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 L1440,0 L1440,40 C1080,120 360,120 0,40 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="financial-calculator__ambient" aria-hidden="true">
        <div className="financial-calculator__grid-pattern" />
        <div className="financial-calculator__glow financial-calculator__glow--center" />
      </div>

      <div className="financial-calculator__container">
        <div className="financial-calculator__layout">
          <motion.div className="financial-calculator__panel" {...fadeUp(0.14)}>
            <div className="financial-calculator__inputs">
              <SliderField
                id="billable-staff"
                label="Billable staff"
                value={inputs.billableStaff}
                min={CALCULATOR_LIMITS.billableStaff.min}
                max={CALCULATOR_LIMITS.billableStaff.max}
                step={CALCULATOR_LIMITS.billableStaff.step}
                formatValue={(value) => `${formatNumber(value)} people`}
                onChange={(value) => updateInput('billableStaff', value)}
              />

              <SliderField
                id="billable-rate"
                label="Average billable rate"
                value={inputs.billableRate}
                min={CALCULATOR_LIMITS.billableRate.min}
                max={CALCULATOR_LIMITS.billableRate.max}
                step={CALCULATOR_LIMITS.billableRate.step}
                formatValue={(value) => `${formatCurrency(value)}/hr`}
                onChange={(value) => updateInput('billableRate', value)}
              />

              <SliderField
                id="weekly-hours"
                label="Billable hours per person / week"
                value={inputs.weeklyBillableHours}
                min={CALCULATOR_LIMITS.weeklyBillableHours.min}
                max={CALCULATOR_LIMITS.weeklyBillableHours.max}
                step={CALCULATOR_LIMITS.weeklyBillableHours.step}
                formatValue={(value) => `${formatNumber(value)} hrs`}
                onChange={(value) => updateInput('weeklyBillableHours', value)}
              />

              <SliderField
                id="uncaptured-percent"
                label="Uncaptured billable time today"
                value={inputs.uncapturedPercent}
                min={CALCULATOR_LIMITS.uncapturedPercent.min}
                max={CALCULATOR_LIMITS.uncapturedPercent.max}
                step={CALCULATOR_LIMITS.uncapturedPercent.step}
                formatValue={(value) => `${value}%`}
                onChange={(value) => updateInput('uncapturedPercent', value)}
              />
            </div>

            <div className="financial-calculator__results" aria-live="polite">
              <p className="financial-calculator__results-label">Projected with Avyro</p>

              <p className="financial-calculator__results-primary">
                {formatCurrency(results.additionalAnnualRevenue)}
                <span className="financial-calculator__results-primary-sub">
                  additional annual revenue
                </span>
              </p>

              <div className="financial-calculator__results-grid">
                <div className="financial-calculator__result-card">
                  <span className="financial-calculator__result-value">
                    {formatCurrency(results.monthlyRevenueGain)}
                  </span>
                  <span className="financial-calculator__result-caption">
                    Monthly revenue gain
                  </span>
                </div>

                <div className="financial-calculator__result-card">
                  <span className="financial-calculator__result-value">
                    {formatNumber(results.recoveredHours)}
                  </span>
                  <span className="financial-calculator__result-caption">
                    Billable hours recovered / year
                  </span>
                </div>

                <div className="financial-calculator__result-card">
                  <span className="financial-calculator__result-value">
                    {formatCurrency(results.currentCapturedRevenue)}
                  </span>
                  <span className="financial-calculator__result-caption">
                    Revenue captured today
                  </span>
                </div>

                <div className="financial-calculator__result-card financial-calculator__result-card--highlight">
                  <span className="financial-calculator__result-value">
                    {formatCurrency(results.projectedCapturedRevenue)}
                  </span>
                  <span className="financial-calculator__result-caption">
                    Projected captured revenue
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <header className="financial-calculator__intro">
            <motion.div {...fadeUp(0)}>
              <span className="financial-calculator__badge">
                <Calculator
                  className="financial-calculator__badge-icon"
                  aria-hidden="true"
                />
                Financial Calculator
              </span>
            </motion.div>

            <motion.h2
              id="financial-calculator-heading"
              className="financial-calculator__title"
              {...fadeUp(0.06)}
            >
              See the revenue impact of capturing every billable hour
            </motion.h2>

            <motion.p className="financial-calculator__description" {...fadeUp(0.12)}>
              {CALCULATOR_SUBTITLE}
            </motion.p>

            <motion.p className="financial-calculator__note" {...fadeUp(0.16)}>
              Based on Avyro&apos;s activity tracking, smart timesheets, and faster
              billing workflows — firms typically recover{' '}
              <strong>{Math.round(AVYRO_RECOVERY_RATE * 100)}%</strong> of leaked
              billable time.
            </motion.p>

            <motion.a
              href="#contact-us"
              className="financial-calculator__cta"
              {...fadeUp(0.2)}
            >
              Talk to our team
              <ArrowRight className="financial-calculator__cta-icon" aria-hidden="true" />
            </motion.a>
          </header>
        </div>
      </div>
    </section>
  )
}

export default FinancialCalculator

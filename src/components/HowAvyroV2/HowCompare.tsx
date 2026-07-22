import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDown,
  Check,
  Sparkles,
  X,
} from 'lucide-react'
import {
  HOW_COMPARE_SUBTITLE,
  HOW_COMPARE_SUMMARY,
  HOW_COMPARE_SUMMARY_METRICS,
  HOW_COMPARE_TITLE,
  HOW_COMPARE_WITH,
  HOW_COMPARE_WITH_BENEFITS,
  HOW_COMPARE_WITH_LABEL,
  HOW_COMPARE_WITHOUT,
  HOW_COMPARE_WITHOUT_FRICTION,
  HOW_COMPARE_WITHOUT_LABEL,
} from '../../constants/howAvyroV2'
import './HowCompare.css'

const EASE = [0.22, 1, 0.36, 1] as const

function HowCompare() {
  const prefersReducedMotion = useReducedMotion()

  const fade = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-48px' },
        transition: { duration: 0.4, ease: EASE },
      }

  return (
    <motion.div className="how-compare-wrap" {...fade}>
      <header className="how-compare-wrap__intro">
        <h3 id="how-compare-heading" className="how-compare-wrap__title">
          {HOW_COMPARE_TITLE}
        </h3>
        <p className="how-compare-wrap__subtitle">{HOW_COMPARE_SUBTITLE}</p>
      </header>

      <div className="how-compare">
        <div className="how-compare__col how-compare__col--without">
          <span className="how-compare__pill how-compare__pill--bad">
            {HOW_COMPARE_WITHOUT_LABEL}
          </span>

          <ul className="how-compare__stack">
            {HOW_COMPARE_WITHOUT.map((step, index) => {
              const StepIcon = step.icon

              return (
                <li key={step.id} className="how-compare__step">
                  <div className="how-compare__row how-compare__row--bad">
                    <span className="how-compare__row-icon how-compare__row-icon--muted">
                      <StepIcon size={16} strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="how-compare__row-label">{step.label}</span>
                    <span className="how-compare__row-tag">{step.friction}</span>
                  </div>
                  {index < HOW_COMPARE_WITHOUT.length - 1 ? (
                    <span className="how-compare__arrow how-compare__arrow--bad" aria-hidden="true">
                      <ArrowDown size={14} strokeWidth={2} />
                    </span>
                  ) : null}
                </li>
              )
            })}
          </ul>

          <div className="how-compare__footer how-compare__footer--bad">
            <span className="how-compare__footer-icon how-compare__footer-icon--bad">
              <X size={12} strokeWidth={2.5} aria-hidden="true" />
            </span>
            <p className="how-compare__footer-copy">
              {HOW_COMPARE_WITHOUT_FRICTION.join(' · ')}
            </p>
          </div>
        </div>

        <div className="how-compare__vs-wrap" aria-hidden="true">
          <span className="how-compare__vs-line how-compare__vs-line--bad" />
          <span className="how-compare__vs">VS</span>
          <span className="how-compare__vs-line how-compare__vs-line--good" />
        </div>

        <div className="how-compare__col how-compare__col--with">
          <span className="how-compare__pill how-compare__pill--good">
            <Sparkles size={12} strokeWidth={2} aria-hidden="true" />
            {HOW_COMPARE_WITH_LABEL}
          </span>

          <ul className="how-compare__stack">
            {HOW_COMPARE_WITH.map((step, index) => {
              const StepIcon = step.icon

              return (
                <li key={step.id} className="how-compare__step">
                  <div className="how-compare__row how-compare__row--good">
                    <span className="how-compare__row-icon how-compare__row-icon--brand">
                      <StepIcon size={14} strokeWidth={2} aria-hidden="true" />
                    </span>
                    <span className="how-compare__row-label">{step.label}</span>
                  </div>
                  {index < HOW_COMPARE_WITH.length - 1 ? (
                    <span className="how-compare__arrow how-compare__arrow--good" aria-hidden="true">
                      <ArrowDown size={14} strokeWidth={2} />
                    </span>
                  ) : null}
                </li>
              )
            })}
          </ul>

          <div className="how-compare__footer how-compare__footer--good">
            <span className="how-compare__footer-icon how-compare__footer-icon--good">
              <Check size={12} strokeWidth={2.5} aria-hidden="true" />
            </span>
            <p className="how-compare__footer-copy">
              {HOW_COMPARE_WITH_BENEFITS.join(' · ')}
            </p>
          </div>
        </div>
      </div>

      <div className="how-compare-summary">
        <div className="how-compare-summary__brand" aria-hidden="true">
          <Sparkles size={18} strokeWidth={2} />
        </div>

        <div className="how-compare-summary__copy">
          <p className="how-compare-summary__title">{HOW_COMPARE_SUMMARY.title}</p>
          <p className="how-compare-summary__subtitle">{HOW_COMPARE_SUMMARY.subtitle}</p>
        </div>

        {HOW_COMPARE_SUMMARY_METRICS.map((metric) => {
          const MetricIcon = metric.icon

          return (
            <div key={metric.id} className="how-compare-summary__metric">
              <span
                className={`how-compare-summary__metric-icon how-compare-summary__metric-icon--${metric.tone}`}
              >
                <MetricIcon size={15} strokeWidth={2} aria-hidden="true" />
              </span>
              <p className="how-compare-summary__metric-copy">
                {metric.prefix ? (
                  <>
                    {metric.prefix}{' '}
                    <strong>{metric.highlight}</strong> {metric.suffix}
                  </>
                ) : (
                  <>
                    <strong>{metric.highlight}</strong> {metric.suffix}
                  </>
                )}
              </p>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default HowCompare

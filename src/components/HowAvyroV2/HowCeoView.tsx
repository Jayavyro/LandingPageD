import { motion, useReducedMotion } from 'framer-motion'
import {
  HOW_CEO_BODY,
  HOW_CEO_METRICS,
  HOW_CEO_TITLE,
} from '../../constants/howAvyroV2'
import './HowCeoView.css'

const EASE = [0.22, 1, 0.36, 1] as const

function HowCeoView() {
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
    <motion.aside className="how-ceo" {...fade} aria-labelledby="how-ceo-heading">
      <div className="how-ceo__copy">
        <p className="how-ceo__eyebrow">Leadership</p>
        <h3 id="how-ceo-heading" className="how-ceo__title">
          {HOW_CEO_TITLE}
        </h3>
        <p className="how-ceo__body">{HOW_CEO_BODY}</p>
      </div>

      <div className="how-ceo__dashboard">
        {HOW_CEO_METRICS.map((metric) => (
          <div key={metric.id} className="how-ceo__metric">
            <span className="how-ceo__live">
              <span className="how-ceo__pulse" aria-hidden="true" />
              Live
            </span>
            <span className="how-ceo__metric-label">{metric.label}</span>
            <span className="how-ceo__metric-hint">{metric.hint}</span>
          </div>
        ))}
      </div>
    </motion.aside>
  )
}

export default HowCeoView

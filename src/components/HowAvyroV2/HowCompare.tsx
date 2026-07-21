import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import {
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
    <motion.div className="how-compare" {...fade}>
      <div className="how-compare__col how-compare__col--without">
        <h3 className="how-compare__heading">{HOW_COMPARE_WITHOUT_LABEL}</h3>
        <ul className="how-compare__stack">
          {HOW_COMPARE_WITHOUT.map((step, index) => (
            <li key={step.id} className="how-compare__step">
              <span className="how-compare__chip how-compare__chip--muted">
                {step.label}
              </span>
              {index < HOW_COMPARE_WITHOUT.length - 1 ? (
                <span className="how-compare__arrow" aria-hidden="true">
                  <ArrowDown strokeWidth={2} />
                  <span className="how-compare__friction-inline">
                    {
                      HOW_COMPARE_WITHOUT_FRICTION[
                        index % HOW_COMPARE_WITHOUT_FRICTION.length
                      ]
                    }
                  </span>
                </span>
              ) : null}
            </li>
          ))}
        </ul>
        <ul className="how-compare__tags how-compare__tags--bad">
          {HOW_COMPARE_WITHOUT_FRICTION.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="how-compare__vs" aria-hidden="true">
        <span>vs</span>
      </div>

      <div className="how-compare__col how-compare__col--with">
        <h3 className="how-compare__heading how-compare__heading--brand">
          {HOW_COMPARE_WITH_LABEL}
        </h3>
        <ul className="how-compare__stack">
          {HOW_COMPARE_WITH.map((step, index) => (
            <li key={step.id} className="how-compare__step">
              <span className="how-compare__chip how-compare__chip--brand">
                {step.label}
              </span>
              {index < HOW_COMPARE_WITH.length - 1 ? (
                <span
                  className="how-compare__arrow how-compare__arrow--smooth"
                  aria-hidden="true"
                >
                  <ArrowDown strokeWidth={2} />
                </span>
              ) : null}
            </li>
          ))}
        </ul>
        <ul className="how-compare__tags how-compare__tags--good">
          {HOW_COMPARE_WITH_BENEFITS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default HowCompare

import { motion, useReducedMotion } from 'framer-motion'
import {
  ONE_RECORD_ACCENT_CHIPS,
  ONE_RECORD_BADGE,
  ONE_RECORD_CARD_LABEL,
  ONE_RECORD_FLOW,
  ONE_RECORD_HEADLINE,
  ONE_RECORD_PROOF_NOTE,
  ONE_RECORD_SUBTITLE,
  ONE_RECORD_WEDGE,
} from '../../constants/oneRecordWeek'
import './OneRecordWeek.css'

const EASE = [0.22, 1, 0.36, 1] as const

const CONVERGENCE_PATHS = [
  'M5,0 C5,25 50,15 50,38',
  'M25,0 C25,20 50,15 50,38',
  'M50,0 L50,38',
  'M75,0 C75,20 50,15 50,38',
  'M95,0 C95,25 50,15 50,38',
] as const

function OneRecordWeek() {
  const prefersReducedMotion = useReducedMotion()

  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-72px' },
          transition: { duration: 0.4, delay, ease: EASE },
        }

  return (
    <section
      id="one-record-week"
      className="one-record"
      aria-labelledby="one-record-heading"
    >
      <div className="one-record__ambient" aria-hidden="true">
        <div className="one-record__grid" />
        <div className="one-record__glow" />
      </div>

      <div className="one-record__container">
        <header className="one-record__intro">
          <motion.p className="one-record__badge" {...fadeUp(0)}>
            {ONE_RECORD_BADGE}
          </motion.p>

          <motion.h2
            id="one-record-heading"
            className="one-record__title"
            {...fadeUp(0.04)}
          >
            {ONE_RECORD_HEADLINE}
          </motion.h2>

          <motion.p className="one-record__subtitle" {...fadeUp(0.07)}>
            {ONE_RECORD_SUBTITLE}
          </motion.p>
        </header>

        <motion.ul
          className="one-record__chips"
          aria-label="Modules on one record"
          {...fadeUp(0.1)}
        >
          {ONE_RECORD_FLOW.map((label) => (
            <li
              key={label}
              className={`one-record__chip${
                ONE_RECORD_ACCENT_CHIPS.has(label)
                  ? ' one-record__chip--accent'
                  : ''
              }`}
            >
              {label}
            </li>
          ))}
        </motion.ul>

        <motion.div
          className="one-record__convergence"
          aria-hidden="true"
          {...fadeUp(0.14)}
        >
          <svg
            className="one-record__lines"
            viewBox="0 0 100 40"
            preserveAspectRatio="none"
          >
            {CONVERGENCE_PATHS.map((d) => (
              <path key={d} d={d} />
            ))}
          </svg>
        </motion.div>

        <motion.div className="one-record__card" {...fadeUp(0.18)}>
          <p className="one-record__card-label">{ONE_RECORD_CARD_LABEL}</p>
          <p className="one-record__card-text">{ONE_RECORD_WEDGE}</p>
        </motion.div>

        <motion.p className="one-record__footnote" {...fadeUp(0.22)}>
          {ONE_RECORD_PROOF_NOTE}
        </motion.p>
      </div>
    </section>
  )
}

export default OneRecordWeek

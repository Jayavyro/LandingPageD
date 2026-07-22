import { motion, useReducedMotion } from 'framer-motion'
import {
  ONE_RECORD_BADGE,
  ONE_RECORD_FLOW,
  ONE_RECORD_HEADLINE,
  ONE_RECORD_HEADLINE_ACCENT,
  ONE_RECORD_PROOF_NOTE,
  ONE_RECORD_SUBTITLE,
  ONE_RECORD_WEDGE,
} from '../../constants/oneRecordWeek'
import './OneRecordWeek.css'

const EASE = [0.22, 1, 0.36, 1] as const

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
            <span className="one-record__title-line">{ONE_RECORD_HEADLINE}</span>
            <span className="one-record__title-line one-record__title-line--accent">
              {ONE_RECORD_HEADLINE_ACCENT}
            </span>
          </motion.h2>

          <motion.p className="one-record__subtitle" {...fadeUp(0.07)}>
            {ONE_RECORD_SUBTITLE}
          </motion.p>
        </header>

        <motion.ol
          className="one-record__flow"
          aria-label="Connected firm record"
          {...fadeUp(0.1)}
        >
          {ONE_RECORD_FLOW.map((label, index) => (
            <li key={label} className="one-record__flow-item">
              {index > 0 && (
                <span className="one-record__flow-join" aria-hidden="true">
                  →
                </span>
              )}
              <span className="one-record__flow-chip">
                <span className="one-record__flow-num" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {label}
              </span>
            </li>
          ))}
        </motion.ol>

        <motion.p className="one-record__wedge" {...fadeUp(0.12)}>
          {ONE_RECORD_WEDGE}
        </motion.p>



        <motion.p className="one-record__footnote" {...fadeUp(0.16)}>
          {ONE_RECORD_PROOF_NOTE}
        </motion.p>
      </div>
    </section>
  )
}

export default OneRecordWeek

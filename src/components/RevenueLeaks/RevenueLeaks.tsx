import { motion, useReducedMotion } from 'framer-motion'
import {
  REVENUE_LEAKS_BADGE,
  REVENUE_LEAKS_CLOSING_HREF,
  REVENUE_LEAKS_CLOSING_TEXT,
  REVENUE_LEAKS_HEADLINE,
  REVENUE_LEAKS_ITEMS,
  REVENUE_LEAKS_SUBTITLE,
  REVENUE_LEAKS_TOTAL,
} from '../../constants/revenueLeaks'
import LeakRow from './LeakRow'
import './RevenueLeaks.css'

const EASE = [0.22, 1, 0.36, 1] as const

function RevenueLeaks() {
  const prefersReducedMotion = useReducedMotion()

  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-72px' },
          transition: { duration: 0.45, delay, ease: EASE },
        }

  return (
    <section
      id="revenue-leaks"
      className="revenue-leaks"
      aria-labelledby="revenue-leaks-heading"
    >
      <div className="revenue-leaks__container">
        <header className="revenue-leaks__intro">
          <motion.p className="revenue-leaks__kicker" {...fadeUp(0)}>
            <span className="revenue-leaks__kicker-rule" aria-hidden="true" />
            {REVENUE_LEAKS_BADGE}
          </motion.p>

          <motion.h2
            id="revenue-leaks-heading"
            className="revenue-leaks__title"
            {...fadeUp(0.05)}
          >
            {REVENUE_LEAKS_HEADLINE}
          </motion.h2>

          <motion.p className="revenue-leaks__subtitle" {...fadeUp(0.08)}>
            {REVENUE_LEAKS_SUBTITLE}
          </motion.p>
        </header>

        <ol className="revenue-leaks__leak-list" aria-label="Where the revenue goes">
          {REVENUE_LEAKS_ITEMS.map((leak, index) => (
            <LeakRow key={leak.id} leak={leak} index={index} />
          ))}
        </ol>

        <motion.div className="revenue-leaks__footer" {...fadeUp(0.14)}>
          <p className="revenue-leaks__total">{REVENUE_LEAKS_TOTAL}</p>
          <a className="revenue-leaks__closing-link" href={REVENUE_LEAKS_CLOSING_HREF}>
            {REVENUE_LEAKS_CLOSING_TEXT}
            <span aria-hidden="true">&rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default RevenueLeaks

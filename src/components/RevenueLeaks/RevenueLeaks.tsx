import { motion, useReducedMotion } from 'framer-motion'
import {
  REVENUE_LEAKS_BADGE,
  REVENUE_LEAKS_CODE,
  REVENUE_LEAKS_HEADLINE,
  REVENUE_LEAKS_ITEMS,
  REVENUE_LEAKS_STAT,
  REVENUE_LEAKS_STAT_CAPTION_AFTER,
  REVENUE_LEAKS_STAT_CAPTION_BEFORE,
  REVENUE_LEAKS_STAT_CITE,
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
      id="why-avyro"
      className="revenue-leaks"
      aria-labelledby="revenue-leaks-heading"
    >
      <div className="revenue-leaks__container">
        <header className="revenue-leaks__intro">
          <motion.p className="revenue-leaks__tag" {...fadeUp(0)}>
            <span className="revenue-leaks__tag-code">{REVENUE_LEAKS_CODE}</span>
            <span className="revenue-leaks__tag-dot" aria-hidden="true" />
            {REVENUE_LEAKS_BADGE}
          </motion.p>

          <motion.h2
            id="revenue-leaks-heading"
            className="revenue-leaks__title"
            {...fadeUp(0.05)}
          >
            {REVENUE_LEAKS_HEADLINE}
          </motion.h2>
        </header>

        <motion.div className="revenue-leaks__bigstat" {...fadeUp(0.08)}>
          <p className="revenue-leaks__bigstat-num" aria-hidden="true">
            {REVENUE_LEAKS_STAT}
          </p>
          <p className="revenue-leaks__bigstat-caption">
            <span className="revenue-leaks__sr-only">{REVENUE_LEAKS_STAT}. </span>
            {REVENUE_LEAKS_STAT_CAPTION_BEFORE}
            <cite>{REVENUE_LEAKS_STAT_CITE}</cite>
            {REVENUE_LEAKS_STAT_CAPTION_AFTER}
          </p>
        </motion.div>

        <ol className="revenue-leaks__leak-list" aria-label="Where the revenue goes">
          {REVENUE_LEAKS_ITEMS.map((leak, index) => (
            <LeakRow key={leak.id} leak={leak} index={index} />
          ))}
        </ol>
      </div>
    </section>
  )
}

export default RevenueLeaks

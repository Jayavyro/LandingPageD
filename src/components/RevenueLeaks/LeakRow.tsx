import type { CSSProperties } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { RevenueLeakItem } from '../../constants/revenueLeaks'
import { REVENUE_LEAK_ACCENTS } from '../../constants/revenueLeaks'

const EASE = [0.22, 1, 0.36, 1] as const

interface LeakRowProps {
  leak: RevenueLeakItem
  index: number
}

function LeakRow({ leak, index }: LeakRowProps) {
  const prefersReducedMotion = useReducedMotion()
  const Icon = leak.icon
  const accentColor = REVENUE_LEAK_ACCENTS[leak.accent]

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 14 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-72px' },
        transition: { duration: 0.4, delay: 0.08 + index * 0.06, ease: EASE },
      }

  return (
    <motion.li
      className="revenue-leaks__leak-row"
      style={{ '--leak-accent': accentColor } as CSSProperties}
      {...motionProps}
    >
      <p className="revenue-leaks__leak-figure">{leak.number}</p>

      <div className="revenue-leaks__leak-copy">
        <div className="revenue-leaks__leak-heading">
          <Icon className="revenue-leaks__leak-icon" aria-hidden="true" />
          <h3 className="revenue-leaks__leak-title">{leak.title}</h3>
        </div>
        <p className="revenue-leaks__leak-description">{leak.description}</p>
        <p className="revenue-leaks__leak-why">
          <span className="revenue-leaks__leak-why-tag">Why</span>
          {leak.why}
        </p>
      </div>
    </motion.li>
  )
}

export default LeakRow

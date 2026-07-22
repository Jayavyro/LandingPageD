import { motion, useReducedMotion } from 'framer-motion'
import {
  INDUSTRY_HEADLINE,
  INDUSTRY_ITEMS,
  INDUSTRY_SUBTITLE,
} from '../../constants/industry'
import IndustryCard from './IndustryCard'
import './Industry.css'

const EASE = [0.22, 1, 0.36, 1] as const

function Industry() {
  const prefersReducedMotion = useReducedMotion()

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
      id="industry"
      className="industry"
      aria-labelledby="industry-heading"
    >
      <div className="industry__container">
        <div className="industry__layout">
          <header className="industry__intro">
            <motion.h2
              id="industry-heading"
              className="industry__title"
              {...fadeUp(0)}
            >
              {INDUSTRY_HEADLINE}
            </motion.h2>
            <motion.p className="industry__subtitle" {...fadeUp(0.06)}>
              {INDUSTRY_SUBTITLE}
            </motion.p>
          </header>

          <div className="industry__cards">
            {INDUSTRY_ITEMS.map((item, index) => (
              <IndustryCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Industry

import { motion, useReducedMotion } from 'framer-motion'
import { LayoutGrid } from 'lucide-react'
import {
  WHAT_WE_DO_SOLUTIONS,
  WHAT_WE_DO_BADGE,
  WHAT_WE_DO_HEADLINE,
  WHAT_WE_DO_HEADLINE_ACCENT,
  WHAT_WE_DO_SUBTITLE,
} from '../../constants/whatWeDo'
import WhatWeDoCard from './WhatWeDoCard'
import './WhatWeDo.css'

const EASE = [0.22, 1, 0.36, 1] as const

function WhatWeDo() {
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
      id="solutions"
      className="workflow-solutions"
      aria-labelledby="workflow-solutions-heading"
    >
      <div className="workflow-solutions__ambient" aria-hidden="true">
        <div className="workflow-solutions__grid-pattern" />
        <div className="workflow-solutions__glow workflow-solutions__glow--center" />
        <div className="workflow-solutions__glow workflow-solutions__glow--left" />
        <div className="workflow-solutions__glow workflow-solutions__glow--right" />
      </div>

      <div className="workflow-solutions__container">
        <header className="workflow-solutions__intro">
          <motion.div {...fadeUp(0)}>
            <span className="workflow-solutions__badge">
              <LayoutGrid className="workflow-solutions__badge-icon" aria-hidden="true" />
              {WHAT_WE_DO_BADGE}
            </span>
          </motion.div>

          <motion.h2
            id="workflow-solutions-heading"
            className="workflow-solutions__title"
            {...fadeUp(0.06)}
          >
            <span className="workflow-solutions__title-line">{WHAT_WE_DO_HEADLINE}</span>
            <span className="workflow-solutions__title-line">
              <span className="workflow-solutions__gradient">{WHAT_WE_DO_HEADLINE_ACCENT}</span>
            </span>
          </motion.h2>

          <motion.p className="workflow-solutions__subtitle" {...fadeUp(0.12)}>
            {WHAT_WE_DO_SUBTITLE}
          </motion.p>
        </header>

        <div className="workflow-solutions__grid">
          {WHAT_WE_DO_SOLUTIONS.map((solution, index) => (
            <WhatWeDoCard key={solution.id} solution={solution} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo

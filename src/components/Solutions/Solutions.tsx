import { motion, useReducedMotion } from 'framer-motion'
import { LayoutGrid } from 'lucide-react'
import { SOLUTION_STORIES, SOLUTIONS_SUBTITLE } from '../../constants/solutions'
import SolutionStoryRow from './SolutionStoryRow'
import './Solutions.css'

const EASE = [0.22, 1, 0.36, 1] as const

function Solutions() {
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
      className="solutions"
      aria-labelledby="solutions-heading"
    >
      <div className="solutions__ambient" aria-hidden="true">
        <div className="solutions__grid-pattern" />
        <div className="solutions__glow solutions__glow--center" />
        <div className="solutions__glow solutions__glow--left" />
        <div className="solutions__glow solutions__glow--right" />
      </div>

      <div className="solutions__container">
        <header className="solutions__intro">
          <motion.div {...fadeUp(0)}>
            <span className="solutions__badge">
              <LayoutGrid className="solutions__badge-icon" aria-hidden="true" />
              Solutions
            </span>
          </motion.div>

          <motion.h2
            id="solutions-heading"
            className="solutions__title"
            {...fadeUp(0.06)}
          >
            <span className="solutions__title-line">
              Solve what matters.{' '}
              <span className="solutions__gradient">Deliver what counts.</span>
            </span>
          </motion.h2>

          <motion.p className="solutions__subtitle" {...fadeUp(0.12)}>
            {SOLUTIONS_SUBTITLE}
          </motion.p>
        </header>

        <div className="solutions__stories">
          {SOLUTION_STORIES.map((story, index) => (
            <SolutionStoryRow
              key={story.id}
              story={story}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions

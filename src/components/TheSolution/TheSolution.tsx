import { motion, useReducedMotion } from 'framer-motion'
import {
  THE_SOLUTION_HEADLINE,
  THE_SOLUTION_JOURNEY,
  THE_SOLUTION_JOURNEY_INTRO,
} from '../../constants/theSolution'
import './TheSolution.css'

const EASE = [0.22, 1, 0.36, 1] as const

function TheSolution() {
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
      id="the-solution"
      className="the-solution"
      aria-labelledby="the-solution-heading"
    >
      <div className="the-solution__container">
        <header className="the-solution__intro">
          <motion.h2
            id="the-solution-heading"
            className="the-solution__title"
            {...fadeUp(0)}
          >
            {THE_SOLUTION_HEADLINE}
          </motion.h2>

          <motion.p className="the-solution__lede" {...fadeUp(0.05)}>
            {THE_SOLUTION_JOURNEY_INTRO}
          </motion.p>
        </header>

        <motion.ol
          className="the-solution__flow"
          aria-label="Project journey"
          {...fadeUp(0.1)}
        >
          {THE_SOLUTION_JOURNEY.map((step, index) => (
            <li key={step.id} className="the-solution__flow-item">
              {index > 0 ? (
                <span className="the-solution__flow-arrow" aria-hidden="true">
                  ›
                </span>
              ) : null}
              <div className="the-solution__flow-step">
                <span
                  className="the-solution__flow-icon"
                  style={{ background: step.color }}
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <h3 className="the-solution__flow-action">{step.action}</h3>
                <p className="the-solution__flow-role">{step.role}</p>
              </div>
            </li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}

export default TheSolution

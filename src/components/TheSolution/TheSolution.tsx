import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import {
  THE_SOLUTION_BADGE,
  THE_SOLUTION_BRIDGE,
  THE_SOLUTION_CLOSING,
  THE_SOLUTION_CONSEQUENCES,
  THE_SOLUTION_CTA,
  THE_SOLUTION_GAP_BODY,
  THE_SOLUTION_GAP_LEAD,
  THE_SOLUTION_HEADLINE,
  THE_SOLUTION_HEADLINE_ACCENT,
  THE_SOLUTION_JOURNEY,
  THE_SOLUTION_JOURNEY_INTRO,
} from '../../constants/theSolution'
import LandingHashLink from '../LandingHashLink/LandingHashLink'
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
          <motion.p className="the-solution__kicker" {...fadeUp(0)}>
            <span className="the-solution__kicker-rule" aria-hidden="true" />
            {THE_SOLUTION_BADGE}
          </motion.p>

          <motion.h2
            id="the-solution-heading"
            className="the-solution__title"
            {...fadeUp(0.05)}
          >
            <span className="the-solution__title-line">{THE_SOLUTION_HEADLINE}</span>
            <span className="the-solution__title-accent">
              {THE_SOLUTION_HEADLINE_ACCENT}
            </span>
          </motion.h2>
        </header>

        <motion.div className="the-solution__journey-block" {...fadeUp(0.1)}>
          <p className="the-solution__journey-intro">{THE_SOLUTION_JOURNEY_INTRO}</p>

          <ol className="the-solution__journey" aria-label="Project journey">
            {THE_SOLUTION_JOURNEY.map((step, index) => {
              const Icon = step.icon
              return (
                <li key={step.id} className="the-solution__journey-step">
                  {index > 0 ? (
                    <span className="the-solution__journey-connector" aria-hidden="true" />
                  ) : null}
                  <span className="the-solution__journey-icon" aria-hidden="true">
                    <Icon size={18} strokeWidth={2} />
                  </span>
                  <p className="the-solution__journey-role">{step.role}</p>
                  <p className="the-solution__journey-action">{step.action}</p>
                </li>
              )
            })}
          </ol>
        </motion.div>

        <motion.div className="the-solution__gap" {...fadeUp(0.16)}>
          <p className="the-solution__gap-lead">{THE_SOLUTION_GAP_LEAD}</p>
          <p className="the-solution__gap-body">{THE_SOLUTION_GAP_BODY}</p>
        </motion.div>

        <motion.ul
          className="the-solution__consequences"
          aria-label="Where the gaps show up"
          {...fadeUp(0.2)}
        >
          {THE_SOLUTION_CONSEQUENCES.map((line) => (
            <li key={line} className="the-solution__consequence">
              {line}
            </li>
          ))}
        </motion.ul>

        <motion.div className="the-solution__footer" {...fadeUp(0.26)}>
          <p className="the-solution__closing">{THE_SOLUTION_CLOSING}</p>
          
          <LandingHashLink
            to={THE_SOLUTION_CTA.href}
            className="the-solution__cta"
          >
            {THE_SOLUTION_CTA.label}
            <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </LandingHashLink>
        </motion.div>
      </div>
    </section>
  )
}

export default TheSolution

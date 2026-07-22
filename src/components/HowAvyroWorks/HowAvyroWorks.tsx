import { motion, useReducedMotion } from 'framer-motion'
import {
  HOW_AVYRO_WORKS_BADGE,
  HOW_AVYRO_WORKS_HEADLINE,
  HOW_AVYRO_WORKS_STEPS,
  HOW_AVYRO_WORKS_SUBTITLE,
} from '../../constants/howAvyroWorks'
import './HowAvyroWorks.css'

const EASE = [0.22, 1, 0.36, 1] as const

function HowAvyroWorks() {
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
      id="how-avyro-works"
      className="how-avyro-works"
      aria-labelledby="how-avyro-works-heading"
    >
      <div className="how-avyro-works__ambient" aria-hidden="true">
        <div className="how-avyro-works__grid" />
        <div className="how-avyro-works__glow how-avyro-works__glow--center" />
        <div className="how-avyro-works__glow how-avyro-works__glow--left" />
      </div>

      <div className="how-avyro-works__container">
        <header className="how-avyro-works__intro">
          <motion.p className="how-avyro-works__kicker" {...fadeUp(0)}>
            <span className="how-avyro-works__kicker-rule" aria-hidden="true" />
            {HOW_AVYRO_WORKS_BADGE}
          </motion.p>

          <motion.h2
            id="how-avyro-works-heading"
            className="how-avyro-works__title"
            {...fadeUp(0.05)}
          >
            {HOW_AVYRO_WORKS_HEADLINE}
          </motion.h2>

          <motion.p className="how-avyro-works__subtitle" {...fadeUp(0.1)}>
            {HOW_AVYRO_WORKS_SUBTITLE}
          </motion.p>
        </header>

        <motion.div className="how-avyro-works__flow" {...fadeUp(0.15)}>
          <div className="how-avyro-works__line" aria-hidden="true" />

          <ol className="how-avyro-works__steps">
            {HOW_AVYRO_WORKS_STEPS.map((step) => (
              <li key={step.id} className="how-avyro-works__step">
                <span className="how-avyro-works__num">{step.step}</span>
                <h3 className="how-avyro-works__step-title">{step.title}</h3>
                <p className="how-avyro-works__step-copy">{step.description}</p>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  )
}

export default HowAvyroWorks

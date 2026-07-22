import { motion, useReducedMotion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import {
  HOW_AVYRO_V2_BADGE,
  HOW_AVYRO_V2_HEADLINE_LINES,
  HOW_AVYRO_V2_SUBTITLE,
  HOW_CLOSING_EMPHASIS,
  HOW_CLOSING_LINES,
} from '../../constants/howAvyroV2'
import HowCompare from './HowCompare'
import './HowAvyroV2.css'

const EASE = [0.22, 1, 0.36, 1] as const

function HowAvyroV2() {
  const prefersReducedMotion = useReducedMotion()

  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-72px' },
          transition: { duration: 0.4, delay, ease: EASE },
        }

  return (
    <section
      id="how-avyro-v2"
      className="how-avyro-v2"
      aria-labelledby="how-avyro-v2-heading"
    >
      <div className="how-avyro-v2__ambient" aria-hidden="true">
        <div className="how-avyro-v2__grid-pattern" />
        <div className="how-avyro-v2__glow how-avyro-v2__glow--center" />
        <div className="how-avyro-v2__glow how-avyro-v2__glow--left" />
        <div className="how-avyro-v2__glow how-avyro-v2__glow--right" />
      </div>

      <div className="how-avyro-v2__container">
        <header className="how-avyro-v2__intro">
          <motion.div {...fadeUp(0)}>
            <span className="how-avyro-v2__badge">
              <Sparkles className="how-avyro-v2__badge-icon" aria-hidden="true" />
              {HOW_AVYRO_V2_BADGE}
            </span>
          </motion.div>

          <motion.h2
            id="how-avyro-v2-heading"
            className="how-avyro-v2__title"
            {...fadeUp(0.05)}
          >
            <span className="how-avyro-v2__title-line">
              {HOW_AVYRO_V2_HEADLINE_LINES[0]}
            </span>
            <span className="how-avyro-v2__title-line how-avyro-v2__title-accent">
              {HOW_AVYRO_V2_HEADLINE_LINES[1]}
            </span>
          </motion.h2>

          <motion.p className="how-avyro-v2__subtitle" {...fadeUp(0.1)}>
            {HOW_AVYRO_V2_SUBTITLE}
          </motion.p>
        </header>

        <section
          className="how-avyro-v2__block how-avyro-v2__block--compare"
          aria-labelledby="how-compare-heading"
        >
          <HowCompare />
        </section>



        <motion.footer className="how-avyro-v2__closing" {...fadeUp(0.05)}>
          <ul className="how-avyro-v2__closing-list">
            {HOW_CLOSING_LINES.map((line) => (
              <li key={line} className="how-avyro-v2__closing-line">
                {line}
              </li>
            ))}
          </ul>
          <p className="how-avyro-v2__closing-emphasis">{HOW_CLOSING_EMPHASIS}</p>
        </motion.footer>
      </div>
    </section>
  )
}

export default HowAvyroV2

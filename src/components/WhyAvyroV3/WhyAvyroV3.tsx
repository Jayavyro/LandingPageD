import { motion, useReducedMotion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import {
  WHY_AVYRO_V3_NOTE,
  WHY_AVYRO_V3_RESULTS,
  WHY_AVYRO_V3_SUBTITLE,
} from '../../constants/whyAvyroV3'
import WhyAvyroResultCard from './WhyAvyroResultCard'
import './WhyAvyroV3.css'

const EASE = [0.22, 1, 0.36, 1] as const

function WhyAvyroV3() {
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
      id="why-avyro"
      className="why-avyro-v3"
      aria-labelledby="why-avyro-heading"
    >
      <div className="why-avyro-v3__ambient" aria-hidden="true">
        <div className="why-avyro-v3__grid-pattern" />
        <div className="why-avyro-v3__glow why-avyro-v3__glow--center" />
        <div className="why-avyro-v3__glow why-avyro-v3__glow--left" />
        <div className="why-avyro-v3__glow why-avyro-v3__glow--right" />
      </div>

      <div className="why-avyro-v3__container">
        <header className="why-avyro-v3__intro">
          <motion.div {...fadeUp(0)}>
            <span className="why-avyro-v3__badge">
              <Sparkles className="why-avyro-v3__badge-icon" aria-hidden="true" />
              Why AVYRO
            </span>
          </motion.div>

          <motion.h2
            id="why-avyro-heading"
            className="why-avyro-v3__title"
            {...fadeUp(0.06)}
          >
            <span className="why-avyro-v3__title-line">
              Why Choose <span className="why-avyro-v3__gradient">Avyro</span>?
            </span>
            <span className="why-avyro-v3__title-line why-avyro-v3__title-line--soft">
              {WHY_AVYRO_V3_SUBTITLE}
            </span>
          </motion.h2>

          <motion.p className="why-avyro-v3__note" {...fadeUp(0.12)}>
            {WHY_AVYRO_V3_NOTE}
          </motion.p>
        </header>

        <div className="why-avyro-v3__grid">
          {WHY_AVYRO_V3_RESULTS.map((result, index) => (
            <WhyAvyroResultCard key={result.id} result={result} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyAvyroV3

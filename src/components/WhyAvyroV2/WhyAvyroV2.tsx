import { motion, useReducedMotion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import {
  WHY_AVYRO_V2_FEATURES,
  WHY_AVYRO_V2_SUBTITLE,
} from '../../constants/whyAvyroV2'
import WhyAvyroFeatureCard from './WhyAvyroFeatureCard'
import './WhyAvyroV2.css'

const EASE = [0.22, 1, 0.36, 1] as const

function WhyAvyroV2() {
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
      className="why-avyro-v2"
      aria-labelledby="why-avyro-v2-heading"
    >
      <div className="why-avyro-v2__ambient" aria-hidden="true">
        <div className="why-avyro-v2__grid-pattern" />
        <div className="why-avyro-v2__glow why-avyro-v2__glow--center" />
        <div className="why-avyro-v2__glow why-avyro-v2__glow--left" />
        <div className="why-avyro-v2__glow why-avyro-v2__glow--right" />
      </div>

      <div className="why-avyro-v2__container">
        <header className="why-avyro-v2__intro">
          <motion.div {...fadeUp(0)}>
            <span className="why-avyro-v2__badge">
              <Sparkles className="why-avyro-v2__badge-icon" aria-hidden="true" />
              Why AVYRO
            </span>
          </motion.div>

          <motion.h2
            id="why-avyro-v2-heading"
            className="why-avyro-v2__title"
            {...fadeUp(0.06)}
          >
            <span className="why-avyro-v2__title-line">
              Built for <span className="why-avyro-v2__gradient">AEC</span>. Purpose-driven.
            </span>
            <span className="why-avyro-v2__title-line">
              Every workflow connected — not complicated.
            </span>
          </motion.h2>

          <motion.p className="why-avyro-v2__subtitle" {...fadeUp(0.12)}>
            {WHY_AVYRO_V2_SUBTITLE}
          </motion.p>
        </header>

        <div className="why-avyro-v2__grid">
          {WHY_AVYRO_V2_FEATURES.map((feature, index) => (
            <WhyAvyroFeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyAvyroV2

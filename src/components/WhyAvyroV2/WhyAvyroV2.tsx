import { motion, useReducedMotion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import {
  WHY_AVYRO_V2_BADGE,
  WHY_AVYRO_V2_CLOSING,
  WHY_AVYRO_V2_FEATURES,
  WHY_AVYRO_V2_HEADLINE_LINES,
  WHY_AVYRO_V2_INTRO,
  WHY_AVYRO_V2_OUTCOMES_LABEL,
} from '../../constants/whyAvyroV2'
import WhyAvyroPillar from './WhyAvyroPillar'
import WhyAvyroStory from './WhyAvyroStory'
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
              {WHY_AVYRO_V2_BADGE}
            </span>
          </motion.div>

          <motion.h2
            id="why-avyro-v2-heading"
            className="why-avyro-v2__title"
            {...fadeUp(0.06)}
          >
            {WHY_AVYRO_V2_HEADLINE_LINES.map((line) => (
              <span key={line} className="why-avyro-v2__title-line">
                {line}
              </span>
            ))}
          </motion.h2>

          <motion.p className="why-avyro-v2__subtitle" {...fadeUp(0.12)}>
            {WHY_AVYRO_V2_INTRO}
          </motion.p>
        </header>


        <motion.div className="why-avyro-v2__outcomes" {...fadeUp(0.2)}>
          <p className="why-avyro-v2__outcomes-label">{WHY_AVYRO_V2_OUTCOMES_LABEL}</p>

          <div className="why-avyro-v2__pillars">
            {WHY_AVYRO_V2_FEATURES.map((feature, index) => (
              <WhyAvyroPillar key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyAvyroV2

import { motion, useReducedMotion } from 'framer-motion'
import {
  WHY_AVYRO_V2_BADGE,
  WHY_AVYRO_V2_FEATURES,
  WHY_AVYRO_V2_HEADLINE_ACCENT,
  WHY_AVYRO_V2_HEADLINE_LINES,
  WHY_AVYRO_V2_SUBTITLE_PARAS,
} from '../../constants/whyAvyroV2'
import WhyAvyroPillar from './WhyAvyroPillar'
import './WhyAvyroV2.css'

const EASE = [0.22, 1, 0.36, 1] as const

function WhyAvyroV2() {
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
      id="why-avyro"
      className="why-avyro-v2"
      aria-labelledby="why-avyro-v2-heading"
    >
      <div className="why-avyro-v2__ambient" aria-hidden="true">
        <div className="why-avyro-v2__glow why-avyro-v2__glow--top" />
      
      </div>

      <div className="why-avyro-v2__container">
        <header className="why-avyro-v2__intro">
          <motion.p className="why-avyro-v2__badge" {...fadeUp(0)}>
            {WHY_AVYRO_V2_BADGE}
          </motion.p>

          <motion.h2
            id="why-avyro-v2-heading"
            className="why-avyro-v2__title"
            {...fadeUp(0.05)}
          >
            <span className="why-avyro-v2__title-line">
              {WHY_AVYRO_V2_HEADLINE_LINES[0]}
            </span>
            <span className="why-avyro-v2__title-line">
              {WHY_AVYRO_V2_HEADLINE_LINES[1]}
            </span>
            <span className="why-avyro-v2__title-line why-avyro-v2__title-line--gradient">
              {WHY_AVYRO_V2_HEADLINE_ACCENT}
            </span>
          </motion.h2>

          <motion.div className="why-avyro-v2__subtitle" {...fadeUp(0.1)}>
            {WHY_AVYRO_V2_SUBTITLE_PARAS.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </motion.div>
        </header>

        <div className="why-avyro-v2__grid">
          {WHY_AVYRO_V2_FEATURES.map((feature, index) => (
            <WhyAvyroPillar key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyAvyroV2

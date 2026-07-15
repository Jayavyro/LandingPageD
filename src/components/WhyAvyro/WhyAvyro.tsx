import { motion, useReducedMotion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { WHY_AVYRO_TIMELINE } from '../../constants/whyAvyro'
import WhyAvyroTimelineItem from './WhyAvyroTimelineItem'
import './WhyAvyro.css'

const EASE = [0.22, 1, 0.36, 1] as const

function WhyAvyro() {
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
      className="why-avyro"
      aria-labelledby="why-avyro-heading"
    >
      <div className="why-avyro__ambient" aria-hidden="true">
        <div className="why-avyro__grid-pattern" />
        <div className="why-avyro__glow why-avyro__glow--center" />
        <div className="why-avyro__glow why-avyro__glow--left" />
        <div className="why-avyro__glow why-avyro__glow--right" />
      </div>

      <div className="why-avyro__container">
        <div className="why-avyro__intro">
          <motion.div {...fadeUp(0)}>
            <span className="why-avyro__badge">
              <Sparkles className="why-avyro__badge-icon" aria-hidden="true" />
              Why AVYRO
            </span>
          </motion.div>

          <motion.h2 id="why-avyro-heading" className="why-avyro__title" {...fadeUp(0.06)}>
            <span className="why-avyro__title-line">
              Built for <span className="why-avyro__gradient">AEC</span>.
            </span>
            <span className="why-avyro__title-line">
              Designed for <span className="why-avyro__gradient">Growth</span>.
            </span>
          </motion.h2>

          <motion.p className="why-avyro__subtitle" {...fadeUp(0.12)}>
            Everything your firm needs to manage clients, projects, people, and
            business operations from one connected platform.
          </motion.p>
        </div>

        <div className="why-avyro__flow">
          {WHY_AVYRO_TIMELINE.map((item, index) => (
            <WhyAvyroTimelineItem
              key={item.title}
              item={item}
              index={index}
              isLast={index === WHY_AVYRO_TIMELINE.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyAvyro

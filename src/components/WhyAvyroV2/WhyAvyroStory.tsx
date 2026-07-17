import { ArrowRight, X } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  WHY_AVYRO_V2_AFTER_LABEL,
  WHY_AVYRO_V2_BEFORE_LABEL,
  WHY_AVYRO_V2_FRAGMENTS,
  WHY_AVYRO_V2_OUTCOME,
  WHY_AVYRO_V2_PAIN_POINTS,
  WHY_AVYRO_V2_PLATFORM_NAME,
} from '../../constants/whyAvyroV2'
import './WhyAvyroStory.css'

const EASE = [0.22, 1, 0.36, 1] as const

function WhyAvyroStory() {
  const prefersReducedMotion = useReducedMotion()

  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-48px' },
          transition: { duration: 0.42, delay, ease: EASE },
        }

  return (
    <motion.div className="why-v2-story" {...fadeUp(0.1)}>
      <div className="why-v2-story__panel why-v2-story__panel--before">
        <p className="why-v2-story__label">{WHY_AVYRO_V2_BEFORE_LABEL}</p>

        <div className="why-v2-story__tools" role="list" aria-label="Disconnected tools">
          {WHY_AVYRO_V2_FRAGMENTS.map((fragment) => {
            const Icon = fragment.icon

            return (
              <div key={fragment.label} className="why-v2-story__tool" role="listitem">
                <span className="why-v2-story__tool-icon" aria-hidden="true">
                  <Icon />
                </span>
                <span>{fragment.label}</span>
              </div>
            )
          })}
        </div>

        <ul className="why-v2-story__pains">
          {WHY_AVYRO_V2_PAIN_POINTS.map((point) => (
            <li key={point} className="why-v2-story__pain">
              <X className="why-v2-story__pain-icon" aria-hidden="true" strokeWidth={2.5} />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="why-v2-story__bridge" aria-hidden="true">
        <span className="why-v2-story__bridge-line" />
        <span className="why-v2-story__bridge-arrow">
          <ArrowRight strokeWidth={2} />
        </span>
      </div>

      <div className="why-v2-story__panel why-v2-story__panel--after">
        <p className="why-v2-story__label">{WHY_AVYRO_V2_AFTER_LABEL}</p>

        <div className="why-v2-story__hub">
          <div className="why-v2-story__platform">{WHY_AVYRO_V2_PLATFORM_NAME}</div>
          <p className="why-v2-story__outcome">{WHY_AVYRO_V2_OUTCOME}</p>
        </div>

        <ul className="why-v2-story__wins">
          {WHY_AVYRO_V2_FRAGMENTS.map((fragment) => (
            <li key={fragment.label} className="why-v2-story__win">
              {fragment.label}
            </li>
          ))}
        </ul>
        <p className="why-v2-story__connected">All connected in one place</p>
      </div>
    </motion.div>
  )
}

export default WhyAvyroStory

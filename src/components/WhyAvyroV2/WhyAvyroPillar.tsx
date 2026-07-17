import { motion, useReducedMotion } from 'framer-motion'
import type { WhyAvyroV2Feature } from '../../constants/whyAvyroV2'
import './WhyAvyroPillar.css'

const EASE = [0.22, 1, 0.36, 1] as const

interface WhyAvyroPillarProps {
  feature: WhyAvyroV2Feature
  index: number
}

function WhyAvyroPillar({ feature, index }: WhyAvyroPillarProps) {
  const prefersReducedMotion = useReducedMotion()
  const Icon = feature.icon

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 22 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-48px' },
        transition: { duration: 0.45, delay: 0.08 + index * 0.1, ease: EASE },
      }

  return (
    <motion.article
      className={`why-v2-pillar why-v2-pillar--${feature.accent}`}
      {...motionProps}
    >
      <div className="why-v2-pillar__head">
        <span className="why-v2-pillar__step" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="why-v2-pillar__icon-wrap" aria-hidden="true">
          <Icon className="why-v2-pillar__icon" />
        </span>
      </div>

      <h3 className="why-v2-pillar__title">{feature.title}</h3>

      <p className="why-v2-pillar__description">{feature.description}</p>

      <ul className="why-v2-pillar__points">
        {feature.bullets.map((bullet) => (
          <li key={bullet} className="why-v2-pillar__point">
            <span className="why-v2-pillar__marker" aria-hidden="true" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  )
}

export default WhyAvyroPillar

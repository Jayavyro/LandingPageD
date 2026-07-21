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
  const step = String(index + 1).padStart(2, '0')

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-48px' },
        transition: { duration: 0.4, delay: 0.06 + index * 0.08, ease: EASE },
      }

  return (
    <motion.article className="why-v2-pillar" {...motionProps}>
      <header className="why-v2-pillar__header">
        <div className="why-v2-pillar__meta">
          <span className="why-v2-pillar__step">{step}</span>
          <span className="why-v2-pillar__icon" aria-hidden="true">
            <Icon strokeWidth={1.75} />
          </span>
        </div>

        <h3 className="why-v2-pillar__title">{feature.title}</h3>
        <p className="why-v2-pillar__metric">{feature.metric}</p>
        <p className="why-v2-pillar__metric-label">{feature.metricLabel}</p>
      </header>

      
    </motion.article>
  )
}

export default WhyAvyroPillar

import { motion, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'
import type { WhyAvyroV2Feature } from '../../constants/whyAvyroV2'
import './WhyAvyroFeatureCard.css'

const EASE = [0.22, 1, 0.36, 1] as const

interface WhyAvyroFeatureCardProps {
  feature: WhyAvyroV2Feature
  index: number
}

function WhyAvyroFeatureCard({ feature, index }: WhyAvyroFeatureCardProps) {
  const prefersReducedMotion = useReducedMotion()

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-48px' },
        transition: { duration: 0.42, delay: 0.12 + index * 0.1, ease: EASE },
      }

  return (
    <motion.article
      className={`why-v2-card why-v2-card--${feature.accent}`}
      {...motionProps}
    >
      <h3 className="why-v2-card__title">{feature.title}</h3>
      <p className="why-v2-card__description">{feature.description}</p>

      <ul className="why-v2-card__list">
        {feature.bullets.map((bullet) => (
          <li key={bullet} className="why-v2-card__item">
            <span className="why-v2-card__check" aria-hidden="true">
              <Check strokeWidth={2.5} />
            </span>
            <span className="why-v2-card__bullet">{bullet}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  )
}

export default WhyAvyroFeatureCard

import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { WorkflowSolution } from '../../constants/whatWeDo'
import './WhatWeDoCard.css'

const EASE = [0.22, 1, 0.36, 1] as const

interface WhatWeDoCardProps {
  solution: WorkflowSolution
  index: number
}

function WhatWeDoCard({ solution, index }: WhatWeDoCardProps) {
  const prefersReducedMotion = useReducedMotion()

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 22 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-56px' },
        transition: { duration: 0.45, delay: 0.06 + index * 0.08, ease: EASE },
      }

  return (
    <div className="workflow-solutions__cell">
      <motion.article
        className={`workflow-card workflow-card--${solution.accent}`}
        aria-labelledby={`workflow-card-title-${solution.id}`}
        {...motionProps}
      >
      <div className="workflow-card__media">
        <img
          className="workflow-card__image"
          src={solution.imageSrc}
          alt={solution.imageAlt}
          loading="lazy"
          decoding="async"
        />
        <div className="workflow-card__media-overlay" aria-hidden="true" />
        <span className="workflow-card__step" aria-hidden="true">
          {solution.step}
        </span>
      </div>

      <div className="workflow-card__body">
        <span className="workflow-card__quality">{solution.quality}</span>

        <h3 id={`workflow-card-title-${solution.id}`} className="workflow-card__title">
          {solution.title}
        </h3>

        <p className="workflow-card__description">{solution.description}</p>

        <ul className="workflow-card__features">
          {solution.features.map((feature) => (
            <li key={feature} className="workflow-card__feature">
              {feature}
            </li>
          ))}
        </ul>

        <Link to={solution.href} className="workflow-card__cta">
          {solution.ctaLabel}
          <ArrowRight className="workflow-card__cta-icon" strokeWidth={2} aria-hidden="true" />
        </Link>
      </div>
      </motion.article>
    </div>
  )
}

export default WhatWeDoCard

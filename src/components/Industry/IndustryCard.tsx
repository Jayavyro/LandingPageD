import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { IndustryItem } from '../../constants/industry'
import './IndustryCard.css'

const EASE = [0.22, 1, 0.36, 1] as const

interface IndustryCardProps {
  item: IndustryItem
  index: number
}

function IndustryCard({ item, index }: IndustryCardProps) {
  const prefersReducedMotion = useReducedMotion()
  const Icon = item.icon

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-48px' },
        transition: { duration: 0.45, delay: 0.08 + index * 0.08, ease: EASE },
      }

  return (
    <motion.div {...motionProps}>
      <Link
        to={item.href}
        className="industry-card"
        aria-label={`${item.title}: ${item.tagline}`}
      >
      <img
        className="industry-card__image"
        src={item.imageSrc}
        alt={item.imageAlt}
        loading="lazy"
        decoding="async"
      />

      <div className="industry-card__overlay" aria-hidden="true" />

      <span className="industry-card__icon-wrap" aria-hidden="true">
        <Icon className="industry-card__icon" strokeWidth={1.75} />
      </span>

      <div className="industry-card__content">
        <h3 className="industry-card__title">{item.title}</h3>
        <p className="industry-card__tagline">{item.tagline}</p>
      </div>

      <span className="industry-card__arrow" aria-hidden="true">
        <ArrowRight strokeWidth={2} />
      </span>
      </Link>
    </motion.div>
  )
}

export default IndustryCard

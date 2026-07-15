import { motion, useReducedMotion } from 'framer-motion'
import type { WhyAvyroV3Result } from '../../constants/whyAvyroV3'
import './WhyAvyroResultCard.css'

const EASE = [0.22, 1, 0.36, 1] as const

type WhyAvyroResultAccent = 'purple' | 'blue'

interface WhyAvyroResultCardProps {
  result: WhyAvyroV3Result
  index: number
}

const ACCENTS: WhyAvyroResultAccent[] = ['purple', 'blue', 'purple']

function WhyAvyroResultCard({ result, index }: WhyAvyroResultCardProps) {
  const prefersReducedMotion = useReducedMotion()
  const accent = ACCENTS[index % ACCENTS.length]

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
      className={`why-avyro-result-card why-avyro-result-card--${accent}`}
      {...motionProps}
    >
      <h3 className="why-avyro-result-card__title">{result.title}</h3>
      <p className="why-avyro-result-card__metric">{result.metric}</p>
      <p className="why-avyro-result-card__caption">{result.caption}</p>
    </motion.article>
  )
}

export default WhyAvyroResultCard

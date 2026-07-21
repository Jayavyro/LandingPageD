import { motion, useReducedMotion } from 'framer-motion'
import { HOW_FRICTION_GONE, HOW_FRICTION_TITLE } from '../../constants/howAvyroV2'
import './HowFriction.css'

const EASE = [0.22, 1, 0.36, 1] as const

function HowFriction() {
  const prefersReducedMotion = useReducedMotion()

  const fade = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-40px' },
        transition: { duration: 0.35, ease: EASE },
      }

  return (
    <motion.div className="how-friction" {...fade}>
      <h3 className="how-friction__title">{HOW_FRICTION_TITLE}</h3>
      <ul className="how-friction__list">
        {HOW_FRICTION_GONE.map((item) => (
          <li key={item} className="how-friction__item">
            <span className="how-friction__strike">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default HowFriction

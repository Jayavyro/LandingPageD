import { motion, useReducedMotion } from 'framer-motion'
import {
  DELTEK_SUNSET_BADGE,
  DELTEK_SUNSET_CARDS,
  DELTEK_SUNSET_HEADLINE,
  DELTEK_SUNSET_SUBTITLE,
} from '../../constants/deltekSunset'
import './DeltekSunset.css'

const EASE = [0.22, 1, 0.36, 1] as const

function DeltekSunset() {
  const prefersReducedMotion = useReducedMotion()

  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-64px' },
          transition: { duration: 0.4, delay, ease: EASE },
        }

  return (
    <section
      id="resources"
      className="deltek-sunset"
      aria-labelledby="deltek-sunset-heading"
    >
      <div className="deltek-sunset__container">
        <header className="deltek-sunset__intro">
          <motion.p className="deltek-sunset__badge" {...fadeUp(0)}>
            {DELTEK_SUNSET_BADGE}
          </motion.p>
          <motion.h2
            id="deltek-sunset-heading"
            className="deltek-sunset__title"
            {...fadeUp(0.05)}
          >
            {DELTEK_SUNSET_HEADLINE}
          </motion.h2>
          <motion.p className="deltek-sunset__subtitle" {...fadeUp(0.1)}>
            {DELTEK_SUNSET_SUBTITLE}
          </motion.p>
        </header>

        <ul className="deltek-sunset__list">
          {DELTEK_SUNSET_CARDS.map((card, index) => (
            <motion.li
              key={card.id}
              className="deltek-sunset__card"
              {...fadeUp(0.12 + index * 0.05)}
            >
              <h3 className="deltek-sunset__card-title">{card.title}</h3>
              <p className="deltek-sunset__card-body">{card.body}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default DeltekSunset

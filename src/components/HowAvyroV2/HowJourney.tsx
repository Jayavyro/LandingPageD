import { motion, useReducedMotion } from 'framer-motion'
import type { HowJourneyStage } from '../../constants/howAvyroV2'
import './HowJourney.css'

const EASE = [0.22, 1, 0.36, 1] as const

interface HowJourneyProps {
  stages: HowJourneyStage[]
}

function HowJourney({ stages }: HowJourneyProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <ol className="how-journey">
      {stages.map((stage, index) => {
        const Icon = stage.icon
        const motionProps = prefersReducedMotion
          ? {}
          : {
              initial: { opacity: 0, y: 18 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: '-40px' },
              transition: {
                duration: 0.4,
                delay: 0.05 + index * 0.07,
                ease: EASE,
              },
            }

        return (
          <motion.li key={stage.id} className="how-journey__item" {...motionProps}>
            <div className="how-journey__rail" aria-hidden="true">
              <span className="how-journey__dot" />
              {index < stages.length - 1 ? (
                <span className="how-journey__line" />
              ) : null}
            </div>

            <article className="how-journey__card">
              <div className="how-journey__card-top">
                <span className="how-journey__icon" aria-hidden="true">
                  <Icon strokeWidth={1.75} />
                </span>
                <span className="how-journey__step">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="how-journey__title">{stage.title}</h3>
              <p className="how-journey__what">{stage.whatHappens}</p>
              <div className="how-journey__next">
                <span className="how-journey__next-label">Then</span>
                <p className="how-journey__next-text">{stage.whatNext}</p>
              </div>
            </article>
          </motion.li>
        )
      })}
    </ol>
  )
}

export default HowJourney

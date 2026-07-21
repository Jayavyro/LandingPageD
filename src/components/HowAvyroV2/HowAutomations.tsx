import { Check } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  HOW_AUTOMATIONS,
  HOW_AUTOMATIONS_SUBTITLE,
  HOW_AUTOMATIONS_TITLE,
} from '../../constants/howAvyroV2'
import './HowAutomations.css'

const EASE = [0.22, 1, 0.36, 1] as const

function HowAutomations() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="how-autos">
      <header className="how-autos__intro">
        <h3 className="how-autos__title">{HOW_AUTOMATIONS_TITLE}</h3>
        <p className="how-autos__subtitle">{HOW_AUTOMATIONS_SUBTITLE}</p>
      </header>

      <div className="how-autos__grid">
        {HOW_AUTOMATIONS.map((block, index) => {
          const motionProps = prefersReducedMotion
            ? {}
            : {
                initial: { opacity: 0, y: 14 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, margin: '-40px' },
                transition: {
                  duration: 0.35,
                  delay: 0.06 + index * 0.08,
                  ease: EASE,
                },
              }

          return (
            <motion.article
              key={block.id}
              className="how-autos__card"
              {...motionProps}
            >
              <p className="how-autos__trigger">{block.trigger}</p>
              <div className="how-autos__connector" aria-hidden="true">
                <span className="how-autos__connector-line" />
              </div>
              <p className="how-autos__action">{block.action}</p>
              <ul className="how-autos__outcomes">
                {block.outcomes.map((outcome) => (
                  <li key={outcome}>
                    <span className="how-autos__check" aria-hidden="true">
                      <Check strokeWidth={2.5} />
                    </span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </motion.article>
          )
        })}
      </div>
    </div>
  )
}

export default HowAutomations

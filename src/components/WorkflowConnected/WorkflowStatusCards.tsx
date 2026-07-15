import { motion, useReducedMotion } from 'framer-motion'
import { WORKFLOW_STATUS_STATS } from '../../constants/workflowConnected'
import './WorkflowStatusCards.css'

const EASE = [0.22, 1, 0.36, 1] as const

function WorkflowStatusCards() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="workflow-status-cards">
      {WORKFLOW_STATUS_STATS.map((stat, index) => {
        const motionProps = prefersReducedMotion
          ? {}
          : {
              initial: { opacity: 0, y: 18 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: '-32px' },
              transition: { duration: 0.42, delay: 0.55 + index * 0.08, ease: EASE },
            }

        return (
          <motion.div
            key={stat.label}
            className="workflow-status-card"
            {...motionProps}
          >
            <p className="workflow-status-card__value">{stat.value}</p>
            <p className="workflow-status-card__label">{stat.label}</p>
          </motion.div>
        )
      })}
    </div>
  )
}

export default WorkflowStatusCards

import { motion, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'
import type { WorkflowFeature } from '../../constants/workflowConnected'
import './WorkflowFeatureRow.css'

const EASE = [0.22, 1, 0.36, 1] as const

interface WorkflowFeatureRowProps {
  feature: WorkflowFeature
  index: number
}

function WorkflowFeatureRow({ feature, index }: WorkflowFeatureRowProps) {
  const prefersReducedMotion = useReducedMotion()
  const Icon = feature.icon

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, x: -14 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, margin: '-48px' },
        transition: { duration: 0.38, delay: 0.18 + index * 0.07, ease: EASE },
      }

  return (
    <motion.div
      className="workflow-feature-row"
      {...motionProps}
    >
      <span className="workflow-feature-row__check" aria-hidden="true">
        <Check strokeWidth={2.25} />
      </span>

      <div className="workflow-feature-row__body">
        <div className="workflow-feature-row__title-wrap">
          <Icon className="workflow-feature-row__icon" strokeWidth={1.75} aria-hidden="true" />
          <h3 className="workflow-feature-row__title">{feature.title}</h3>
        </div>
        <p className="workflow-feature-row__copy">{feature.description}</p>
      </div>
    </motion.div>
  )
}

export default WorkflowFeatureRow

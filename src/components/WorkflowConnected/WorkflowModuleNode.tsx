import { motion, useReducedMotion } from 'framer-motion'
import type { WorkflowModule } from '../../constants/workflowConnected'

const EASE = [0.22, 1, 0.36, 1] as const

interface WorkflowModuleNodeProps {
  module: WorkflowModule
  index: number
  isActive: boolean
  isNeighbor: boolean
  onHover: (id: string | null) => void
}

function WorkflowModuleNode({
  module,
  index,
  isActive,
  isNeighbor,
  onHover,
}: WorkflowModuleNodeProps) {
  const prefersReducedMotion = useReducedMotion()
  const Icon = module.icon

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-32px' },
        transition: { duration: 0.38, delay: 0.2 + index * 0.05, ease: EASE },
      }

  return (
    <motion.button
      type="button"
      className="workflow-module-node"
      onMouseEnter={() => onHover(module.id)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(module.id)}
      onBlur={() => onHover(null)}
      aria-label={module.label}
      {...motionProps}
    >
      {module.glow && <span className="workflow-module-node__glow" aria-hidden="true" />}

      <span
        className={[
          'workflow-module-node__icon-wrap',
          isActive && 'workflow-module-node__icon-wrap--active',
          isNeighbor && 'workflow-module-node__icon-wrap--neighbor',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <Icon
          className="workflow-module-node__icon"
          stroke="url(#workflow-icon-gradient)"
          strokeWidth={1.75}
          aria-hidden="true"
        />
      </span>

      <span className="workflow-module-node__label">{module.label}</span>
    </motion.button>
  )
}

export default WorkflowModuleNode

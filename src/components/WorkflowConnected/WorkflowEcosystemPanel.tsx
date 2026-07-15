import { Fragment } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  WORKFLOW_BOTTOM_MODULES,
  WORKFLOW_TOP_MODULES,
  getConnectedModuleIds,
} from '../../constants/workflowConnected'
import WorkflowModuleNode from './WorkflowModuleNode'
import WorkflowStatusCards from './WorkflowStatusCards'
import './WorkflowEcosystemPanel.css'

const EASE = [0.22, 1, 0.36, 1] as const

interface WorkflowEcosystemPanelProps {
  hoveredId: string | null
  onHover: (id: string | null) => void
}

interface FlowArrowProps {
  direction: 'right' | 'left'
  active: boolean
}

function FlowArrow({ direction, active }: FlowArrowProps) {
  return (
    <span
      className={[
        'workflow-flow-arrow',
        `workflow-flow-arrow--${direction}`,
        active && 'workflow-flow-arrow--active',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-hidden="true"
    >
      <span className="workflow-flow-arrow__line" />
      <span className="workflow-flow-arrow__head" />
    </span>
  )
}

function WorkflowEcosystemPanel({ hoveredId, onHover }: WorkflowEcosystemPanelProps) {
  const prefersReducedMotion = useReducedMotion()

  const isLinkActive = (from: string, to: string) => {
    if (!hoveredId) return false
    const connected = getConnectedModuleIds(hoveredId)
    return connected.includes(from) && connected.includes(to)
  }

  const panelMotion = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-64px' },
        transition: { duration: 0.45, delay: 0.16, ease: EASE },
      }

  const renderRow = (
    modules: typeof WORKFLOW_TOP_MODULES,
    direction: 'right' | 'left',
    startIndex: number,
  ) =>
    modules.map((module, index) => {
      const prev = modules[index - 1]
      const isActive = hoveredId === module.id
      const isNeighbor = hoveredId
        ? getConnectedModuleIds(hoveredId).includes(module.id) && !isActive
        : false

      return (
        <Fragment key={module.id}>
          {index > 0 && prev && (
            <FlowArrow
              direction={direction}
              active={isLinkActive(prev.id, module.id)}
            />
          )}
          <WorkflowModuleNode
            module={module}
            index={startIndex + index}
            isActive={isActive}
            isNeighbor={isNeighbor}
            onHover={onHover}
          />
        </Fragment>
      )
    })

  const bridgeActive = isLinkActive('timesheets', 'approvals')

  return (
    <motion.div className="workflow-ecosystem" {...panelMotion}>
      <div className="workflow-ecosystem__panel">
        <svg width="0" height="0" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="workflow-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4b6ef5" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <linearGradient id="workflow-bridge-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4b6ef5" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>

        <div className="workflow-ecosystem__panel-glow" aria-hidden="true" />

        <div className="workflow-ecosystem__flow">
          <div className="workflow-ecosystem__row workflow-ecosystem__row--top">
            {renderRow(WORKFLOW_TOP_MODULES, 'right', 0)}
          </div>

          <svg
            className="workflow-ecosystem__bridge"
            viewBox="0 0 100 200"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              d="M 22 8 C 88 50, 88 150, 22 192"
              fill="none"
              stroke="url(#workflow-bridge-grad)"
              strokeWidth={bridgeActive ? 3 : 2.5}
              strokeLinecap="round"
              opacity={bridgeActive ? 1 : 0.75}
              initial={prefersReducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.35, ease: EASE }}
            />
          </svg>

          <div className="workflow-ecosystem__row workflow-ecosystem__row--bottom">
            {renderRow(WORKFLOW_BOTTOM_MODULES, 'left', WORKFLOW_TOP_MODULES.length)}
          </div>
        </div>
      </div>

      <WorkflowStatusCards />
    </motion.div>
  )
}

export default WorkflowEcosystemPanel

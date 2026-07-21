import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import {
  WORKFLOW_CONNECTED_BADGE,
  WORKFLOW_CONNECTED_DESCRIPTION,
  WORKFLOW_CONNECTED_HEADLINE_LINES,
  WORKFLOW_CONNECTED_SUBTITLE,
  WORKFLOW_FEATURES,
} from '../../constants/workflowConnected'
import WorkflowEcosystemPanel from './WorkflowEcosystemPanel'
import WorkflowFeatureRow from './WorkflowFeatureRow'
import './WorkflowConnected.css'

const EASE = [0.22, 1, 0.36, 1] as const

function WorkflowConnected() {
  const prefersReducedMotion = useReducedMotion()
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-72px' },
          transition: { duration: 0.4, delay, ease: EASE },
        }

  return (
    <section
      id="workflow-connected"
      className="workflow-connected"
      aria-labelledby="workflow-connected-heading"
    >
      <div className="workflow-connected__transition" aria-hidden="true">
        <svg
          className="workflow-connected__curve workflow-connected__curve--white"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 H1440 V44 C1080,44 1080,108 720,108 C360,108 360,44 0,44 Z"
            fill="#ffffff"
          />
        </svg>

        <svg
          className="workflow-connected__curve workflow-connected__curve--dark"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="workflow-curve-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0a0f22" />
              <stop offset="100%" stopColor="#060816" />
            </linearGradient>
          </defs>
          <path
            d="M0,44 C360,44 360,108 720,108 C1080,108 1080,44 1440,44 V120 H0 Z"
            fill="url(#workflow-curve-fade)"
          />
        </svg>

        <div className="workflow-connected__curve-shine" />
      </div>

      <div className="workflow-connected__ambient" aria-hidden="true">
        <div className="workflow-connected__grid" />
        <div className="workflow-connected__glow workflow-connected__glow--blue" />
        <div className="workflow-connected__glow workflow-connected__glow--purple" />
      </div>

      <div className="workflow-connected__container">
        <div className="workflow-connected__layout">
          <div className="workflow-connected__content">
            <motion.div {...fadeUp(0)}>
              <span className="workflow-connected__badge">
                <Sparkles className="workflow-connected__badge-icon" aria-hidden="true" />
                {WORKFLOW_CONNECTED_BADGE}
              </span>
            </motion.div>

            <motion.h2
              id="workflow-connected-heading"
              className="workflow-connected__title"
              {...fadeUp(0.06)}
            >
              <span className="workflow-connected__title-line">
                {WORKFLOW_CONNECTED_HEADLINE_LINES[0]}
              </span>
              <span className="workflow-connected__title-line">
                <span className="workflow-connected__gradient">
                  {WORKFLOW_CONNECTED_HEADLINE_LINES[1]}
                </span>
              </span>
            </motion.h2>

            <motion.p className="workflow-connected__tagline" {...fadeUp(0.09)}>
              {WORKFLOW_CONNECTED_SUBTITLE}
            </motion.p>

            <motion.p className="workflow-connected__subtitle" {...fadeUp(0.12)}>
              {WORKFLOW_CONNECTED_DESCRIPTION}
            </motion.p>

            <div className="workflow-connected__features">
              {WORKFLOW_FEATURES.map((feature, index) => (
                <WorkflowFeatureRow key={feature.id} feature={feature} index={index} />
              ))}
            </div>
          </div>

          <div className="workflow-connected__visual">
            <WorkflowEcosystemPanel hoveredId={hoveredId} onHover={setHoveredId} />
          </div>
        </div>
      </div>

      <div className="workflow-connected__transition workflow-connected__transition--bottom" aria-hidden="true">
        <svg
          className="workflow-connected__curve workflow-connected__curve--dark-bottom"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 H1440 V82 C1120,82 1120,6 720,6 C320,6 320,82 0,82 Z"
            fill="#060816"
          />
        </svg>
      </div>
    </section>
  )
}

export default WorkflowConnected

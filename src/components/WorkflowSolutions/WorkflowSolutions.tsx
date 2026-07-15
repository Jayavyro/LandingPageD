import { motion, useReducedMotion } from 'framer-motion'
import { LayoutGrid } from 'lucide-react'
import {
  WORKFLOW_SOLUTIONS,
  WORKFLOW_SOLUTIONS_HEADLINE,
  WORKFLOW_SOLUTIONS_HEADLINE_ACCENT,
  WORKFLOW_SOLUTIONS_SUBTITLE,
} from '../../constants/workflowSolutions'
import WorkflowSolutionCard from './WorkflowSolutionCard'
import './WorkflowSolutions.css'

const EASE = [0.22, 1, 0.36, 1] as const

function WorkflowSolutions() {
  const prefersReducedMotion = useReducedMotion()

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
      id="solutions"
      className="workflow-solutions"
      aria-labelledby="workflow-solutions-heading"
    >
      <div className="workflow-solutions__ambient" aria-hidden="true">
        <div className="workflow-solutions__grid-pattern" />
        <div className="workflow-solutions__glow workflow-solutions__glow--center" />
        <div className="workflow-solutions__glow workflow-solutions__glow--left" />
        <div className="workflow-solutions__glow workflow-solutions__glow--right" />
      </div>

      <div className="workflow-solutions__container">
        <header className="workflow-solutions__intro">
          <motion.div {...fadeUp(0)}>
            <span className="workflow-solutions__badge">
              <LayoutGrid className="workflow-solutions__badge-icon" aria-hidden="true" />
              Solutions
            </span>
          </motion.div>

          <motion.h2
            id="workflow-solutions-heading"
            className="workflow-solutions__title"
            {...fadeUp(0.06)}
          >
            <span className="workflow-solutions__title-line">{WORKFLOW_SOLUTIONS_HEADLINE}</span>
            <span className="workflow-solutions__title-line">
              <span className="workflow-solutions__gradient">{WORKFLOW_SOLUTIONS_HEADLINE_ACCENT}</span>
            </span>
          </motion.h2>

          <motion.p className="workflow-solutions__subtitle" {...fadeUp(0.12)}>
            {WORKFLOW_SOLUTIONS_SUBTITLE}
          </motion.p>
        </header>

        <div className="workflow-solutions__grid">
          {WORKFLOW_SOLUTIONS.map((solution, index) => (
            <WorkflowSolutionCard key={solution.id} solution={solution} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkflowSolutions

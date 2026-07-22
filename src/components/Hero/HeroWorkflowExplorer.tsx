import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  HERO_EXPLORER_HINT,
  HERO_EXPLORER_LABEL,
  HERO_STAGE_ACCENT_COLORS,
  HERO_WORKFLOW_STAGES,
} from '../../constants/hero'
import './HeroWorkflowExplorer.css'

const AUTO_ADVANCE_MS = 4500
const EASE = [0.22, 1, 0.36, 1] as const

function HeroWorkflowExplorer() {
  const prefersReducedMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % HERO_WORKFLOW_STAGES.length)
    }, AUTO_ADVANCE_MS)

    return () => window.clearInterval(timer)
  }, [isPaused, prefersReducedMotion])

  const activeStage = HERO_WORKFLOW_STAGES[activeIndex]
  const accentColor = HERO_STAGE_ACCENT_COLORS[activeStage.accent]
  const ActiveIcon = activeStage.icon

  const selectStage = (index: number) => {
    setActiveIndex(index)
    setIsPaused(true)
  }

  return (
    <div
      className="hero-explorer"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <header className="hero-explorer__header">
        <p className="hero-explorer__label">{HERO_EXPLORER_LABEL}</p>
        <p className="hero-explorer__hint">{HERO_EXPLORER_HINT}</p>
      </header>

      <div className="hero-explorer__body">
        <div
          className="hero-explorer__nav"
          role="tablist"
          aria-label="Avyro workflow stages"
        >
          {HERO_WORKFLOW_STAGES.map((stage, index) => {
            const isActive = index === activeIndex
            const stageAccent = HERO_STAGE_ACCENT_COLORS[stage.accent]
            const StageIcon = stage.icon

            return (
              <button
                key={stage.id}
                type="button"
                role="tab"
                id={`hero-stage-tab-${stage.id}`}
                aria-selected={isActive}
                aria-controls={`hero-stage-panel-${stage.id}`}
                className={`hero-explorer__nav-item${
                  isActive ? ' hero-explorer__nav-item--active' : ''
                }`}
                style={
                  isActive
                    ? {
                        borderColor: stageAccent,
                        color: stageAccent,
                        backgroundColor: `${stageAccent}12`,
                      }
                    : undefined
                }
                onClick={() => selectStage(index)}
              >
                <span
                  className="hero-explorer__nav-icon"
                  style={
                    isActive
                      ? { backgroundColor: `${stageAccent}20`, color: stageAccent }
                      : undefined
                  }
                  aria-hidden="true"
                >
                  <StageIcon size={15} strokeWidth={2} />
                </span>
                <span className="hero-explorer__nav-text">
                  <span className="hero-explorer__nav-step">{stage.step}</span>
                  <span className="hero-explorer__nav-label">{stage.label}</span>
                </span>
              </button>
            )
          })}
        </div>

        <div className="hero-explorer__content">
          <div className="hero-explorer__panel-wrap">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeStage.id}
                role="tabpanel"
                id={`hero-stage-panel-${activeStage.id}`}
                aria-labelledby={`hero-stage-tab-${activeStage.id}`}
                className="hero-explorer__panel"
                style={{ borderColor: `${accentColor}44` }}
                initial={prefersReducedMotion ? false : { opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, x: -8 }}
                transition={{ duration: 0.28, ease: EASE }}
              >
                <span
                  className="hero-explorer__panel-accent"
                  style={{ backgroundColor: accentColor }}
                  aria-hidden="true"
                />

                <div className="hero-explorer__panel-head">
                  <span
                    className="hero-explorer__panel-icon"
                    style={{
                      backgroundColor: `${accentColor}18`,
                      color: accentColor,
                    }}
                    aria-hidden="true"
                  >
                    <ActiveIcon size={20} strokeWidth={1.85} />
                  </span>
                  <h3 className="hero-explorer__panel-title">{activeStage.title}</h3>
                </div>

                <p className="hero-explorer__panel-description">
                  {activeStage.description}
                </p>

                <p
                  className="hero-explorer__panel-metric"
                  style={{ color: accentColor }}
                >
                  {activeStage.metric}
                </p>

                <div className="hero-explorer__progress" aria-hidden="true">
                  {HERO_WORKFLOW_STAGES.map((stage, index) => {
                    const isActive = index === activeIndex
                    const dotAccent = HERO_STAGE_ACCENT_COLORS[stage.accent]

                    return (
                      <span
                        key={stage.id}
                        className={`hero-explorer__progress-dot${
                          isActive ? ' hero-explorer__progress-dot--active' : ''
                        }`}
                        style={isActive ? { backgroundColor: dotAccent } : undefined}
                      />
                    )
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroWorkflowExplorer

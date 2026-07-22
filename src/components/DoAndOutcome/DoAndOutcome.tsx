import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import {
  DO_AND_OUTCOME_BADGE,
  DO_AND_OUTCOME_DO_LABEL,
  DO_AND_OUTCOME_FOOTNOTE,
  DO_AND_OUTCOME_GET_LABEL,
  DO_AND_OUTCOME_HEADLINE,
  DO_AND_OUTCOME_HEADLINE_ACCENT,
  DO_AND_OUTCOME_ITEMS,
  DO_AND_OUTCOME_ROLLUP,
  DO_AND_OUTCOME_SUBTITLE,
  DO_OUTCOME_ACCENTS,
} from '../../constants/doAndOutcome'
import './DoAndOutcome.css'

const EASE = [0.22, 1, 0.36, 1] as const
const AUTO_ADVANCE_MS = 12_000
const STEP_COUNT = DO_AND_OUTCOME_ITEMS.length

function wrapIndex(index: number) {
  return ((index % STEP_COUNT) + STEP_COUNT) % STEP_COUNT
}

function DoAndOutcome() {
  const prefersReducedMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)
  const active = DO_AND_OUTCOME_ITEMS[activeIndex]
  const accent = DO_OUTCOME_ACCENTS[active.accent]
  const ActiveIcon = active.icon
  const progressRef = useRef<HTMLSpanElement>(null)
  const shouldFocusTabRef = useRef(false)
  const elapsedRef = useRef(0)
  const isPausedRef = useRef(false)
  const lastTickRef = useRef<number | null>(null)

  const resetAutoProgress = () => {
    elapsedRef.current = 0
    if (progressRef.current) {
      progressRef.current.style.transform = 'scaleX(0)'
    }
  }

  const goTo = (index: number, options?: { focusTab?: boolean }) => {
    shouldFocusTabRef.current = Boolean(options?.focusTab)
    resetAutoProgress()
    setActiveIndex(wrapIndex(index))
  }

  const goPrev = (focusTab = false) => {
    goTo(activeIndex - 1, { focusTab })
  }

  const goNext = (focusTab = false) => {
    goTo(activeIndex + 1, { focusTab })
  }

  const pauseAuto = () => {
    isPausedRef.current = true
  }

  const resumeAuto = () => {
    isPausedRef.current = false
    lastTickRef.current = null
  }

  useEffect(() => {
    if (!shouldFocusTabRef.current) return
    shouldFocusTabRef.current = false
    const tab = document.getElementById(`do-outcome-tab-${active.id}`)
    tab?.focus()
  }, [active.id])

  useEffect(() => {
    if (prefersReducedMotion) return

    let frameId = 0

    const tick = (now: number) => {
      if (lastTickRef.current == null) {
        lastTickRef.current = now
      }

      const delta = now - lastTickRef.current
      lastTickRef.current = now

      if (!isPausedRef.current) {
        elapsedRef.current = Math.min(
          AUTO_ADVANCE_MS,
          elapsedRef.current + delta,
        )

        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${
            elapsedRef.current / AUTO_ADVANCE_MS
          })`
        }

        if (elapsedRef.current >= AUTO_ADVANCE_MS) {
          elapsedRef.current = 0
          if (progressRef.current) {
            progressRef.current.style.transform = 'scaleX(0)'
          }
          setActiveIndex((current) => wrapIndex(current + 1))
        }
      }

      frameId = window.requestAnimationFrame(tick)
    }

    frameId = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(frameId)
  }, [prefersReducedMotion])

  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-72px' },
          transition: { duration: 0.45, delay, ease: EASE },
        }

  return (
    <section
      id="do-and-outcome"
      className="do-outcome"
      aria-labelledby="do-outcome-heading"
    >
      <div className="do-outcome__ambient" aria-hidden="true">
        <div className="do-outcome__glow do-outcome__glow--top" />
        <div className="do-outcome__grid" />
      </div>

      <div className="do-outcome__container">
        <header className="do-outcome__intro">
          <motion.p className="do-outcome__badge" {...fadeUp(0)}>
            {DO_AND_OUTCOME_BADGE}
          </motion.p>

          <motion.h2
            id="do-outcome-heading"
            className="do-outcome__title"
            {...fadeUp(0.05)}
          >
            <span className="do-outcome__title-line">{DO_AND_OUTCOME_HEADLINE}</span>
            <span className="do-outcome__title-line do-outcome__title-line--gradient">
              {DO_AND_OUTCOME_HEADLINE_ACCENT}
            </span>
          </motion.h2>

          <motion.p className="do-outcome__subtitle" {...fadeUp(0.08)}>
            {DO_AND_OUTCOME_SUBTITLE}
          </motion.p>
        </header>

        <motion.div className="do-outcome__stage" {...fadeUp(0.15)}>
          <div
            className="do-outcome__nav"
            role="tablist"
            aria-label="Capabilities"
            aria-orientation="vertical"
          >
            {DO_AND_OUTCOME_ITEMS.map((item, index) => {
              const isActive = index === activeIndex
              const ItemIcon = item.icon
              const itemAccent = DO_OUTCOME_ACCENTS[item.accent]

              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`do-outcome-tab-${item.id}`}
                  aria-selected={isActive}
                  aria-controls={`do-outcome-panel-${item.id}`}
                  tabIndex={isActive ? 0 : -1}
                  className={`do-outcome__nav-item${isActive ? ' do-outcome__nav-item--active' : ''}`}
                  style={
                    isActive
                      ? {
                          borderColor: itemAccent,
                          boxShadow: `0 0 0 1px ${itemAccent}22, 0 12px 28px -16px ${itemAccent}66`,
                        }
                      : undefined
                  }
                  onClick={() => goTo(index)}
                  onKeyDown={(event) => {
                    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
                      event.preventDefault()
                      goNext(true)
                    }
                    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
                      event.preventDefault()
                      goPrev(true)
                    }
                    if (event.key === 'Home') {
                      event.preventDefault()
                      goTo(0, { focusTab: true })
                    }
                    if (event.key === 'End') {
                      event.preventDefault()
                      goTo(STEP_COUNT - 1, { focusTab: true })
                    }
                  }}
                >
                  <span
                    className="do-outcome__nav-icon"
                    style={
                      isActive
                        ? { backgroundColor: `${itemAccent}18`, color: itemAccent }
                        : undefined
                    }
                    aria-hidden="true"
                  >
                    <ItemIcon size={18} strokeWidth={1.75} />
                  </span>
                  <span className="do-outcome__nav-text">
                    <span className="do-outcome__nav-step">{item.step}</span>
                    <span className="do-outcome__nav-label">{item.label}</span>
                  </span>
                </button>
              )
            })}
          </div>

          <div className="do-outcome__panel-wrap">
            <div
              className="do-outcome__panel-shell"
              onMouseEnter={pauseAuto}
              onMouseLeave={resumeAuto}
              onFocusCapture={pauseAuto}
              onBlurCapture={(event) => {
                if (
                  !event.currentTarget.contains(
                    event.relatedTarget as Node | null,
                  )
                ) {
                  resumeAuto()
                }
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active.id}
                  role="tabpanel"
                  id={`do-outcome-panel-${active.id}`}
                  aria-labelledby={`do-outcome-tab-${active.id}`}
                  className="do-outcome__panel"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.28, ease: EASE }}
                >
                  <div className="do-outcome__do">
                    <div className="do-outcome__column-head">
                      <span
                        className="do-outcome__column-badge"
                        style={{ color: accent, backgroundColor: `${accent}14` }}
                      >
                        {DO_AND_OUTCOME_DO_LABEL}
                      </span>
                      <span
                        className="do-outcome__column-icon"
                        style={{ backgroundColor: `${accent}14`, color: accent }}
                        aria-hidden="true"
                      >
                        <ActiveIcon size={20} strokeWidth={1.75} />
                      </span>
                    </div>

                    <h3 className="do-outcome__do-title">{active.doTitle}</h3>
                    <p className="do-outcome__do-copy">{active.doDescription}</p>

                    <ul className="do-outcome__features">
                      {active.features.map((feature) => (
                        <li key={feature} className="do-outcome__feature">
                          <span
                            className="do-outcome__feature-dot"
                            style={{ backgroundColor: accent }}
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="do-outcome__bridge" aria-hidden="true">
                    <span className="do-outcome__bridge-line" />
                    <span
                      className="do-outcome__bridge-icon"
                      style={{ color: accent, borderColor: `${accent}44` }}
                    >
                      <ArrowRight size={16} strokeWidth={2.25} />
                    </span>
                    <span className="do-outcome__bridge-line" />
                  </div>

                  <div
                    className="do-outcome__get"
                    style={{
                      background: `linear-gradient(160deg, ${accent}12 0%, rgb(255 255 255 / 0.92) 48%, #fff 100%)`,
                      borderColor: `${accent}33`,
                    }}
                  >
                    <span
                      className="do-outcome__column-badge"
                      style={{ color: accent, backgroundColor: `${accent}18` }}
                    >
                      {DO_AND_OUTCOME_GET_LABEL}
                    </span>

                    <p className="do-outcome__metric" style={{ color: accent }}>
                      {active.outcomeMetric}
                    </p>
                    <p className="do-outcome__metric-label">{active.outcomeLabel}</p>
                    <p className="do-outcome__metric-caption">{active.outcomeCaption}</p>

                    <div className="do-outcome__card-nav">
                      <button
                        type="button"
                        className="do-outcome__arrow"
                        onClick={() => goPrev()}
                        aria-label="Previous capability"
                      >
                        <ChevronLeft size={18} strokeWidth={2.25} aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        className="do-outcome__arrow"
                        onClick={() => goNext()}
                        aria-label="Next capability"
                      >
                        <ChevronRight size={18} strokeWidth={2.25} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {!prefersReducedMotion ? (
                <div
                  className="do-outcome__auto"
                  aria-hidden="true"
                  title="Advances every 12 seconds — pauses while you hover the card"
                >
                  <span className="do-outcome__auto-track">
                    <span
                      ref={progressRef}
                      className="do-outcome__auto-progress"
                      style={{ backgroundColor: accent }}
                    />
                  </span>
                </div>
              ) : null}
            </div>
          </div>
        </motion.div>

        <motion.footer className="do-outcome__rollup" {...fadeUp(0.2)}>
          <p className="do-outcome__rollup-text">{DO_AND_OUTCOME_ROLLUP}</p>

          <p className="do-outcome__footnote">{DO_AND_OUTCOME_FOOTNOTE}</p>
        </motion.footer>
      </div>
    </section>
  )
}

export default DoAndOutcome

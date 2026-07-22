import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
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

function DoAndOutcome() {
  const prefersReducedMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)
  const active = DO_AND_OUTCOME_ITEMS[activeIndex]
  const accent = DO_OUTCOME_ACCENTS[active.accent]
  const ActiveIcon = active.icon

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
                  className={`do-outcome__nav-item${isActive ? ' do-outcome__nav-item--active' : ''}`}
                  style={
                    isActive
                      ? {
                          borderColor: itemAccent,
                          boxShadow: `0 0 0 1px ${itemAccent}22, 0 12px 28px -16px ${itemAccent}66`,
                        }
                      : undefined
                  }
                  onClick={() => setActiveIndex(index)}
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
                </div>
              </motion.div>
            </AnimatePresence>
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

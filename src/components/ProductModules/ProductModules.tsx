import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'
import {
  PRODUCT_MODULE_ACCENTS,
  PRODUCT_MODULES,
  PRODUCT_MODULES_BADGE,
  PRODUCT_MODULES_HEADLINE,
  PRODUCT_MODULES_HEADLINE_ACCENT,
  PRODUCT_MODULES_SUBTITLE,
} from '../../constants/productModules'
import './ProductModules.css'

const EASE = [0.22, 1, 0.36, 1] as const
const STEP_COUNT = PRODUCT_MODULES.length

function wrapIndex(index: number) {
  return ((index % STEP_COUNT) + STEP_COUNT) % STEP_COUNT
}

function ProductModules() {
  const prefersReducedMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)
  const shouldFocusTabRef = useRef(false)
  const active = PRODUCT_MODULES[activeIndex]
  const accent = PRODUCT_MODULE_ACCENTS[active.accent]
  const ActiveIcon = active.icon

  const goTo = (index: number, options?: { focusTab?: boolean }) => {
    shouldFocusTabRef.current = Boolean(options?.focusTab)
    setActiveIndex(wrapIndex(index))
  }

  useEffect(() => {
    if (!shouldFocusTabRef.current) return
    shouldFocusTabRef.current = false
    document.getElementById(`product-module-tab-${active.id}`)?.focus()
  }, [active.id])

  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-64px' },
          transition: { duration: 0.4, delay, ease: EASE },
        }

  return (
    <section
      id="product-modules"
      className="product-modules"
      aria-labelledby="product-modules-heading"
      style={{ '--pm-accent': accent } as CSSProperties}
    >
      <div className="product-modules__container">
        <header className="product-modules__intro">
          <motion.p className="product-modules__badge" {...fadeUp(0)}>
            {PRODUCT_MODULES_BADGE}
          </motion.p>
          <motion.h2
            id="product-modules-heading"
            className="product-modules__title"
            {...fadeUp(0.05)}
          >
            <span className="product-modules__title-line">
              {PRODUCT_MODULES_HEADLINE}
            </span>
            <span className="product-modules__title-accent">
              {PRODUCT_MODULES_HEADLINE_ACCENT}
            </span>
          </motion.h2>
          <motion.p className="product-modules__subtitle" {...fadeUp(0.1)}>
            {PRODUCT_MODULES_SUBTITLE}
          </motion.p>
        </header>

        <motion.div className="product-modules__stage" {...fadeUp(0.12)}>
          <div
            className="product-modules__tabs"
            role="tablist"
            aria-label="Avyro product modules"
          >
            {PRODUCT_MODULES.map((module, index) => {
              const Icon = module.icon
              const isActive = index === activeIndex
              return (
                <button
                  key={module.id}
                  id={`product-module-tab-${module.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="product-module-panel"
                  tabIndex={isActive ? 0 : -1}
                  className={`product-modules__tab${isActive ? ' is-active' : ''}`}
                  onClick={() => goTo(index)}
                  onKeyDown={(event) => {
                    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
                      event.preventDefault()
                      goTo(index + 1, { focusTab: true })
                    }
                    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
                      event.preventDefault()
                      goTo(index - 1, { focusTab: true })
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
                  <span className="product-modules__tab-step">{module.step}</span>
                  <Icon className="product-modules__tab-icon" aria-hidden="true" />
                  <span className="product-modules__tab-label">{module.label}</span>
                </button>
              )
            })}
          </div>

          <div
            id="product-module-panel"
            className="product-modules__panel"
            role="tabpanel"
            aria-labelledby={`product-module-tab-${active.id}`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                className="product-modules__panel-inner"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: EASE }}
              >
                <div className="product-modules__copy">
                  <p className="product-modules__module-label">
                    <ActiveIcon size={16} aria-hidden="true" />
                    {active.label}
                    <span className="product-modules__module-short">
                      {active.shortLabel}
                    </span>
                  </p>
                  <h3 className="product-modules__module-title">{active.title}</h3>
                  <p className="product-modules__module-desc">{active.description}</p>

                  <p className="product-modules__does-label">{active.doesLabel}</p>
                  <ul className="product-modules__does">
                    {active.does.map((item) => (
                      <li key={item}>
                        <Check size={14} strokeWidth={2.5} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="product-modules__chips" aria-label="Highlights">
                    {active.highlights.map((chip) => (
                      <li key={chip}>{chip}</li>
                    ))}
                  </ul>

                  <div className="product-modules__nav">
                    <button
                      type="button"
                      className="product-modules__nav-btn"
                      onClick={() => goTo(activeIndex - 1)}
                      aria-label="Previous module"
                    >
                      <ChevronLeft size={18} aria-hidden="true" />
                    </button>
                    <span className="product-modules__nav-count">
                      {active.step} / 0{STEP_COUNT}
                    </span>
                    <button
                      type="button"
                      className="product-modules__nav-btn"
                      onClick={() => goTo(activeIndex + 1)}
                      aria-label="Next module"
                    >
                      <ChevronRight size={18} aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <figure className="product-modules__media">
                  <img
                    src={active.image}
                    alt={active.imageAlt}
                    className="product-modules__image"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductModules

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import {
  WHY_AVYRO_BADGE,
  WHY_AVYRO_HEADLINE_ACCENT,
  WHY_AVYRO_HEADLINE_LINES,
  WHY_AVYRO_SUBTITLE,
  WHY_AVYRO_TIMELINE,
} from '../../constants/whyAvyro'
import './WhyAvyro.css'

const EASE = [0.22, 1, 0.36, 1] as const
const STEP_COUNT = WHY_AVYRO_TIMELINE.length

/** Text advances slightly before the next image fully centers. */
const TEXT_LEAD = 0.18

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value))
}

function WhyAvyro() {
  const prefersReducedMotion = useReducedMotion()
  const runwayRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [textIndex, setTextIndex] = useState(0)
  const [slideStride, setSlideStride] = useState(0)
  const textIndexRef = useRef(0)

  useEffect(() => {
    const runway = runwayRef.current
    const frame = frameRef.current
    if (!runway || prefersReducedMotion) return

    const measureStride = () => {
      if (!frame) return
      const shots = frame.querySelectorAll<HTMLElement>('.why-avyro__shot')
      if (shots.length >= 2) {
        setSlideStride(shots[1].offsetTop - shots[0].offsetTop)
        return
      }
      if (shots.length === 1) {
        setSlideStride(shots[0].offsetHeight)
      }
    }

    const update = () => {
      measureStride()
      const rect = runway.getBoundingClientRect()
      const scrollable = runway.offsetHeight - window.innerHeight
      if (scrollable <= 0) return

      const nextProgress = clamp(-rect.top / scrollable)
      setProgress(nextProgress)

      const continuous = nextProgress * Math.max(1, STEP_COUNT - 1)
      const nextText = Math.min(
        STEP_COUNT - 1,
        Math.floor(continuous + TEXT_LEAD),
      )

      if (nextText !== textIndexRef.current) {
        textIndexRef.current = nextText
        setTextIndex(nextText)
      }
    }

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        update()
        ticking = false
      })
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [prefersReducedMotion])

  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-72px' },
          transition: { duration: 0.4, delay, ease: EASE },
        }

  const active = WHY_AVYRO_TIMELINE[textIndex] ?? WHY_AVYRO_TIMELINE[0]
  const continuous = progress * Math.max(1, STEP_COUNT - 1)
  const localProgress = continuous - textIndex

  return (
    <section
      id="why-avyro-v1"
      className="why-avyro"
      aria-labelledby="why-avyro-heading"
    >
      <div className="why-avyro__ambient" aria-hidden="true">
        <div className="why-avyro__grid-pattern" />
        <div className="why-avyro__glow why-avyro__glow--center" />
        <div className="why-avyro__glow why-avyro__glow--left" />
        <div className="why-avyro__glow why-avyro__glow--right" />
      </div>

      <div className="why-avyro__container why-avyro__container--intro">
        <header className="why-avyro__intro">
          <motion.div {...fadeUp(0)}>
            <span className="why-avyro__badge">
              <Sparkles className="why-avyro__badge-icon" aria-hidden="true" />
              {WHY_AVYRO_BADGE}
            </span>
          </motion.div>

          <motion.h2
            id="why-avyro-heading"
            className="why-avyro__title"
            {...fadeUp(0.06)}
          >
            <span className="why-avyro__title-line">
              {WHY_AVYRO_HEADLINE_LINES[0]}
            </span>
            <span className="why-avyro__title-line">
              {WHY_AVYRO_HEADLINE_LINES[1]}
            </span>
            <span className="why-avyro__title-line">
              <span className="why-avyro__gradient">
                {WHY_AVYRO_HEADLINE_ACCENT}
              </span>
            </span>
          </motion.h2>

          <motion.p className="why-avyro__subtitle" {...fadeUp(0.12)}>
            {WHY_AVYRO_SUBTITLE}
          </motion.p>
        </header>
      </div>

      <div
        ref={runwayRef}
        className="why-avyro__runway"
        style={{ '--why-steps': STEP_COUNT } as CSSProperties}
      >
        <div className="why-avyro__pin">
          <div className="why-avyro__stage">
            <aside className="why-avyro__copy-col" aria-live="polite">
              <div className="why-avyro__copy-card">
                <div
                  className="why-avyro__copy-progress"
                  style={{
                    transform: `scaleX(${clamp(localProgress * 0.92 + 0.08)})`,
                  }}
                  aria-hidden="true"
                />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    className="why-avyro__copy"
                    initial={
                      prefersReducedMotion ? false : { opacity: 0, y: 12 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    exit={
                      prefersReducedMotion
                        ? undefined
                        : { opacity: 0, y: -10 }
                    }
                    transition={{ duration: 0.28, ease: EASE }}
                  >
                    <p className="why-avyro__module">
                      <span className="why-avyro__module-label">Module</span>
                      <span className="why-avyro__module-name">
                        {active.module}
                      </span>
                    </p>
                    <h3 className="why-avyro__item-title">{active.title}</h3>
                    <p className="why-avyro__item-copy">{active.description}</p>
                    <ul className="why-avyro__highlights">
                      {active.highlights.map((point) => (
                        <li key={point} className="why-avyro__highlight">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            </aside>

            <div className="why-avyro__media">
              <div ref={frameRef} className="why-avyro__media-frame">
                {/* Continuous vertical stack with large gaps — no fade */}
                <div
                  className="why-avyro__track"
                  style={{
                    transform: prefersReducedMotion
                      ? `translate3d(0, ${-textIndex * (slideStride || 0)}px, 0)`
                      : `translate3d(0, ${-continuous * (slideStride || 0)}px, 0)`,
                  }}
                >
                  {WHY_AVYRO_TIMELINE.map((item) => (
                    <figure key={item.id} className="why-avyro__shot">
                      <img
                        src={item.image}
                        alt=""
                        width={item.imageWidth}
                        height={item.imageHeight}
                        className="why-avyro__image"
                        loading="eager"
                        draggable={false}
                      />
                    </figure>
                  ))}
                </div>
              </div>
              <div className="why-avyro__media-glow" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyAvyro

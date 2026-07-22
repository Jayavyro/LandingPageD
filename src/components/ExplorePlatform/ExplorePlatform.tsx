import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  EXPLORE_PLATFORM_BADGE,
  EXPLORE_PLATFORM_CTA_LABEL,
  EXPLORE_PLATFORM_HEADLINE,
  EXPLORE_PLATFORM_HEADLINE_ACCENT,
  EXPLORE_PLATFORM_MODULES,
  EXPLORE_PLATFORM_SUBTITLE,
} from '../../constants/explorePlatform'
import './ExplorePlatform.css'

const EASE = [0.22, 1, 0.36, 1] as const

function ExplorePlatform() {
  const prefersReducedMotion = useReducedMotion()

  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-64px' },
          transition: { duration: 0.45, delay, ease: EASE },
        }

  return (
    <section
      id="explore-platform"
      className="explore-platform"
      aria-labelledby="explore-platform-heading"
    >
      <div className="explore-platform__ambient" aria-hidden="true">
        <div className="explore-platform__glow" />
        <div className="explore-platform__grid" />
      </div>

      <div className="explore-platform__container">
        <header className="explore-platform__intro">
          <motion.p className="explore-platform__badge" {...fadeUp(0)}>
            {EXPLORE_PLATFORM_BADGE}
          </motion.p>

          <motion.h2
            id="explore-platform-heading"
            className="explore-platform__title"
            {...fadeUp(0.05)}
          >
            <span className="explore-platform__title-line">
              {EXPLORE_PLATFORM_HEADLINE}
            </span>
            <span className="explore-platform__title-accent">
              {EXPLORE_PLATFORM_HEADLINE_ACCENT}
            </span>
          </motion.h2>

          <motion.p className="explore-platform__subtitle" {...fadeUp(0.1)}>
            {EXPLORE_PLATFORM_SUBTITLE}
          </motion.p>
        </header>

        <ul className="explore-platform__grid-list">
          {EXPLORE_PLATFORM_MODULES.map((module, index) => {
            const Icon = module.icon
            return (
              <motion.li
                key={module.id}
                className="explore-platform__item"
                {...fadeUp(0.08 + index * 0.04)}
              >
                <Link
                  to={module.href}
                  className="explore-platform__card"
                  aria-label={`${module.name}: ${EXPLORE_PLATFORM_CTA_LABEL}`}
                >
                  <span className="explore-platform__icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>

                  <span className="explore-platform__card-body">
                    <span className="explore-platform__name">{module.name}</span>
                    <span className="explore-platform__description">
                      {module.description}
                    </span>
                  </span>

                  <span className="explore-platform__cta">
                    {EXPLORE_PLATFORM_CTA_LABEL}
                    <ArrowRight
                      className="explore-platform__cta-icon"
                      size={14}
                      strokeWidth={2.25}
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default ExplorePlatform

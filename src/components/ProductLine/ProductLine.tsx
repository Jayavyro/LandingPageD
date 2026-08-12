import { motion, useReducedMotion } from 'framer-motion'
import type { ProductModuleCard } from '../../constants/productDrive'
import LandingHashLink from '../LandingHashLink/LandingHashLink'
import './ProductLine.css'

const EASE = [0.22, 1, 0.36, 1] as const

interface ProductLineProps {
  id: string
  badge: string
  categoryTitle?: string
  headline: string
  subtitle: string
  modules: ProductModuleCard[]
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  tinted?: boolean
  fourCol?: boolean
}

function ProductLine({
  id,
  badge,
  categoryTitle = 'Avyro Project Management',
  headline,
  subtitle,
  modules,
  primaryCta,
  secondaryCta,
  tinted = false,
  fourCol = false,
}: ProductLineProps) {
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
      id={id}
      className={`product-line${tinted ? ' product-line--tint' : ''}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="product-line__ambient" aria-hidden="true">
        <div className="product-line__glow" />
      </div>

      <div className="product-line__container">
        <header className="product-line__intro">
          <motion.div className="product-line__badge-container" {...fadeUp(0)}>
            {categoryTitle && (
              <span className="product-line-project-module">
                {categoryTitle}
              </span>
            )}
            <span className="product-line__badge">{badge}</span>
          </motion.div>

          <motion.h2
            id={`${id}-heading`}
            className="product-line__title"
            {...fadeUp(0.05)}
          >
            {headline}
          </motion.h2>

          <motion.p className="product-line__subtitle" {...fadeUp(0.1)}>
            {subtitle}
          </motion.p>
        </header>

        <ul
          className={`product-line__grid${fourCol ? ' product-line__grid--four' : ''}`}
        >
          {modules.map((module, index) => (
            <motion.li key={module.id} {...fadeUp(0.08 + index * 0.04)}>
              <article className="product-line__card">
                <div className="product-line__head">
                  <p className="product-line__code">{module.code}</p>
                  <h3 className="product-line__card-title">{module.title}</h3>
                  <p className="product-line__card-desc">{module.description}</p>
                </div>
                <ul className="product-line__features">
                  {module.features.map((feature) => (
                    <li key={feature} className="product-line__feature">
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            </motion.li>
          ))}
        </ul>

        <motion.div className="product-line__actions" {...fadeUp(0.2)}>
          <LandingHashLink
            to={primaryCta.href}
            className="product-line__cta product-line__cta--primary"
          >
            {primaryCta.label}
          </LandingHashLink>
          <LandingHashLink
            to={secondaryCta.href}
            className="product-line__cta product-line__cta--ghost"
          >
            {secondaryCta.label}
          </LandingHashLink>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductLine

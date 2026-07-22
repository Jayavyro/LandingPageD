import { motion, useReducedMotion } from 'framer-motion'
import { Check, Sparkles, Tag } from 'lucide-react'
import LandingHashLink from '../../components/LandingHashLink/LandingHashLink'
import { PRICING_DISCLAIMER, PRICING_HERO, PRICING_TIERS } from '../../constants/pricingPage'
import './PricingSection.css'

const EASE = [0.22, 1, 0.36, 1] as const

function PricingSection() {
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
    <section id="pricing" className="pricing-section" aria-labelledby="pricing-section-heading">
      <div className="pricing-section__container">
        <header className="pricing-section__intro">
          <motion.span className="pricing-section__badge" {...fadeUp(0)}>
            <Tag className="pricing-section__badge-icon" aria-hidden="true" />
            {PRICING_HERO.eyebrow}
          </motion.span>

          <motion.h2
            id="pricing-section-heading"
            className="pricing-section__title"
            {...fadeUp(0.06)}
          >
            {PRICING_HERO.title}
          </motion.h2>

          <motion.p className="pricing-section__subtitle" {...fadeUp(0.12)}>
            {PRICING_HERO.subtitle}
          </motion.p>
        </header>

        <div className="pricing-section__grid">
          {PRICING_TIERS.map((tier, index) => (
            <motion.article
              key={tier.id}
              className={`pricing-section__card${
                tier.featured ? ' pricing-section__card--featured' : ''
              }`}
              aria-labelledby={`pricing-section-tier-${tier.id}`}
              {...fadeUp(0.06 + index * 0.06)}
            >
              {tier.featured ? (
                <span className="pricing-section__popular">
                  <Sparkles className="pricing-section__popular-icon" aria-hidden="true" />
                  Most popular
                </span>
              ) : null}

              <h3 id={`pricing-section-tier-${tier.id}`} className="pricing-section__tier-name">
                {tier.name}
              </h3>

              <p className="pricing-section__price">
                <span className="pricing-section__price-amount">{tier.price}</span>
                <span className="pricing-section__price-unit">{tier.priceUnit}</span>
              </p>

              <p className="pricing-section__tagline">{tier.tagline}</p>

              <ul className="pricing-section__features">
                {tier.modules.map((module) => (
                  <li key={module} className="pricing-section__feature">
                    <Check className="pricing-section__feature-icon" aria-hidden="true" />
                    {module}
                  </li>
                ))}
              </ul>

              <LandingHashLink to={tier.ctaHref} className="pricing-section__cta">
                {tier.ctaLabel}
              </LandingHashLink>
            </motion.article>
          ))}
        </div>

        <motion.p className="pricing-section__disclaimer" {...fadeUp(0.3)}>
          {PRICING_DISCLAIMER}
        </motion.p>
      </div>
    </section>
  )
}

export default PricingSection

import { Check } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Chatbot from '../../components/Chatbot/Chatbot'
import ContactUs from '../../components/ContactUs/ContactUs'
import {
  PRICING_ALL_MODULES,
  PRICING_DISCLAIMER,
  PRICING_FAQ,
  PRICING_HERO,
  PRICING_STARTER_MODULE_SET,
  PRICING_TIERS,
} from '../../constants/pricingPage'
import './PricingPage.css'

const EASE = [0.22, 1, 0.36, 1] as const

function PricingCta({ href, label, featured }: { href: string; label: string; featured?: boolean }) {
  const isExternalAnchor = href.startsWith('/#')

  if (isExternalAnchor) {
    return (
      <Link
        to={href}
        className={`pricing-card__cta${featured ? ' pricing-card__cta--featured' : ''}`}
      >
        {label}
      </Link>
    )
  }

  return (
    <Link
      to={href}
      className={`pricing-card__cta${featured ? ' pricing-card__cta--featured' : ''}`}
    >
      {label}
    </Link>
  )
}

function PricingPage() {
  const prefersReducedMotion = useReducedMotion()

  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-72px' },
          transition: { duration: 0.45, delay, ease: EASE },
        }

  return (
    <div className="app">
      <Navbar />
      <main className="app__main">
        <section className="pricing-page" aria-labelledby="pricing-heading">
          <div className="pricing-page__ambient" aria-hidden="true">
            <div className="pricing-page__grid-pattern" />
            <div className="pricing-page__glow pricing-page__glow--center" />
          </div>

          <div className="pricing-page__container">
            <header className="pricing-page__hero">
              <motion.p className="pricing-page__eyebrow" {...fadeUp(0)}>
                {PRICING_HERO.eyebrow}
              </motion.p>
              <motion.h1 id="pricing-heading" className="pricing-page__title" {...fadeUp(0.06)}>
                {PRICING_HERO.title}
              </motion.h1>
              <motion.p className="pricing-page__subtitle" {...fadeUp(0.12)}>
                {PRICING_HERO.subtitle}
              </motion.p>
            </header>

            <div className="pricing-page__cards">
              {PRICING_TIERS.map((tier, index) => (
                <motion.article
                  key={tier.id}
                  className={`pricing-card${tier.featured ? ' pricing-card--featured' : ''}`}
                  aria-labelledby={`pricing-tier-${tier.id}`}
                  {...fadeUp(0.1 + index * 0.06)}
                >
                  {tier.featured && (
                    <span className="pricing-card__badge">Most popular</span>
                  )}

                  <div className="pricing-card__head">
                    <h2 id={`pricing-tier-${tier.id}`} className="pricing-card__name">
                      {tier.name}
                    </h2>
                    <p className="pricing-card__price">
                      <span className="pricing-card__price-value">{tier.price}</span>
                      <span className="pricing-card__price-unit">{tier.priceUnit}</span>
                    </p>
                    <p className="pricing-card__tagline">{tier.tagline}</p>
                  </div>

                  <ul className="pricing-card__modules">
                    {tier.modules.map((module) => (
                      <li key={module} className="pricing-card__module-item">
                        <Check className="pricing-card__check" strokeWidth={2.5} aria-hidden="true" />
                        {module}
                      </li>
                    ))}
                  </ul>

                  <PricingCta href={tier.ctaHref} label={tier.ctaLabel} featured={tier.featured} />
                </motion.article>
              ))}
            </div>

            <motion.p className="pricing-page__disclaimer" {...fadeUp(0.16)}>
              {PRICING_DISCLAIMER}
            </motion.p>

            <motion.section
              className="pricing-page__matrix"
              aria-labelledby="pricing-matrix-heading"
              {...fadeUp(0.2)}
            >
              <header className="pricing-page__matrix-head">
                <h2 id="pricing-matrix-heading" className="pricing-page__matrix-title">
                  Compare modules
                </h2>
              </header>

              <div className="pricing-page__matrix-scroll">
                <table className="pricing-page__table">
                  <thead>
                    <tr>
                      <th scope="col">Module</th>
                      <th scope="col">Starter</th>
                      <th scope="col">Full Suite</th>
                      <th scope="col">Custom</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRICING_ALL_MODULES.map((module) => {
                      const inStarter = PRICING_STARTER_MODULE_SET.has(module)
                      const isPlatform =
                        module === 'Approval Workflows' ||
                        module === 'Bulk Uploader' ||
                        module === 'Analytics' ||
                        module === 'Integrations'

                      return (
                        <tr key={module}>
                          <th scope="row">{module}</th>
                          <td>{inStarter ? '✓' : '—'}</td>
                          <td>✓</td>
                          <td>{isPlatform ? 'Add-on' : 'Pick'}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </motion.section>

            <motion.section
              className="pricing-page__faq"
              aria-labelledby="pricing-faq-heading"
              {...fadeUp(0.24)}
            >
              <h2 id="pricing-faq-heading" className="pricing-page__faq-title">
                Common questions
              </h2>
              <div className="pricing-page__faq-list">
                {PRICING_FAQ.map((item) => (
                  <article key={item.question} className="pricing-page__faq-item">
                    <h3 className="pricing-page__faq-question">{item.question}</h3>
                    <p className="pricing-page__faq-answer">{item.answer}</p>
                  </article>
                ))}
              </div>
            </motion.section>
          </div>
        </section>

        <ContactUs />
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}

export default PricingPage

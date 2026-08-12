import { motion, useReducedMotion } from 'framer-motion'
import LandingHashLink from '../../components/LandingHashLink/LandingHashLink'
import { isLandingSectionHref } from '../../lib/landingSectionNav'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Chatbot from '../../components/Chatbot/Chatbot'
import ContactUs from '../../components/ContactUs/ContactUs'
import type { ShortFeaturePageContent } from '../../constants/shortFeaturePage'
import './FeaturePage.css'
import './ShortFeaturePage.css'

const EASE = [0.22, 1, 0.36, 1] as const

function DemoCta({ label, href }: { label: string; href: string }) {
  const className = 'feature-page__cta feature-page__cta--primary'

  if (isLandingSectionHref(href)) {
    return (
      <LandingHashLink to={href} className={className}>
        {label}
      </LandingHashLink>
    )
  }

  return (
    <a href={href} className={className}>
      {label}
    </a>
  )
}

interface ShortFeaturePageProps {
  content: ShortFeaturePageContent
  headingId?: string
}

function ShortFeaturePage({ content, headingId = 'short-feature-heading' }: ShortFeaturePageProps) {
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
    <div className="app">
      <Navbar />
      <main className="app__main">
        <article className="feature-page short-feature" aria-labelledby={headingId}>
          <div className="feature-page__ambient" aria-hidden="true">
            <div className="feature-page__grid-pattern" />
            <div className="feature-page__glow feature-page__glow--left" />
            <div className="feature-page__glow feature-page__glow--right" />
          </div>

          <div className="feature-page__container">
            <header className="feature-page__hero short-feature__hero">
              <motion.div className="feature-page__hero-copy" {...fadeUp(0)}>
                <p className="feature-page__eyebrow">{content.hero.eyebrow}</p>
                <h1 id={headingId} className="feature-page__title">
                  {content.hero.headlineBefore}{' '}
                  <span className="feature-page__title-accent">{content.hero.headlineAccent}</span>
                </h1>
                <p className="short-feature__tagline">{content.hero.tagline}</p>
                <p className="feature-page__subtitle">{content.hero.supporting}</p>
                <div className="feature-page__hero-actions">
                  <DemoCta label={content.hero.cta.label} href={content.hero.cta.href} />
                </div>
              </motion.div>

              <motion.figure className="feature-page__hero-visual" {...fadeUp(0.08)}>
                <div className="feature-page__hero-frame">
                  <img
                    className="feature-page__hero-image"
                    src={content.hero.visual.src}
                    alt={content.hero.visual.alt}
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </motion.figure>
            </header>
          </div>

          <section
            className="short-feature__band short-feature__band--soft"
            aria-labelledby={`${headingId}-overview`}
          >
            <div className="feature-page__container">
              <motion.div className="short-feature__overview" {...fadeUp(0)}>
                <p className="feature-page__section-eyebrow">{content.overview.eyebrow}</p>
                <h2 id={`${headingId}-overview`} className="feature-page__section-title">
                  {content.overview.heading}
                </h2>
                <p className="feature-page__section-intro">{content.overview.body}</p>
              </motion.div>

              <motion.div className="short-feature__audience-head" {...fadeUp(0.06)}>
                <p className="feature-page__section-eyebrow">{content.overview.audienceEyebrow}</p>
                <h3 className="short-feature__audience-title">{content.overview.audienceHeading}</h3>
              </motion.div>

              <div className="short-feature__audience-grid">
                {content.overview.audience.map((item, index) => (
                  <motion.article
                    key={item.title}
                    className="short-feature__audience"
                    {...fadeUp(0.06 + index * 0.04)}
                  >
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <section className="short-feature__band" aria-labelledby={`${headingId}-benefits`}>
            <div className="feature-page__container">
              <motion.header className="feature-page__section-head" {...fadeUp(0)}>
                <p className="feature-page__section-eyebrow">{content.benefits.eyebrow}</p>
                <h2 id={`${headingId}-benefits`} className="feature-page__section-title">
                  {content.benefits.heading}
                </h2>
                <p className="feature-page__section-intro">{content.benefits.supporting}</p>
              </motion.header>

              <div className="short-feature__benefit-grid">
                {content.benefits.items.map((item, index) => (
                  <motion.article
                    key={item.title}
                    className="short-feature__benefit"
                    {...fadeUp(0.04 + index * 0.04)}
                  >
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <section
            className="short-feature__band short-feature__band--soft"
            aria-labelledby={`${headingId}-features`}
          >
            <div className="feature-page__container">
              <motion.header className="feature-page__section-head" {...fadeUp(0)}>
                <p className="feature-page__section-eyebrow">{content.features.eyebrow}</p>
                <h2 id={`${headingId}-features`} className="feature-page__section-title">
                  {content.features.heading}
                </h2>
                <p className="feature-page__section-intro">{content.features.supporting}</p>
              </motion.header>

              <div className="short-feature__feature-grid">
                {content.features.items.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.article
                      key={item.title}
                      className="feature-page__capability-card"
                      {...fadeUp(0.04 + index * 0.03)}
                    >
                      <span className="feature-page__capability-icon" aria-hidden="true">
                        <Icon />
                      </span>
                      <h3 className="feature-page__capability-title">{item.title}</h3>
                      <p className="feature-page__capability-copy">{item.body}</p>
                    </motion.article>
                  )
                })}
              </div>
            </div>
          </section>

          <section
            className="feature-page__showcase-band short-feature__shot-band"
            aria-labelledby={`${headingId}-shot`}
          >
            <div className="feature-page__container short-feature__shot">
              <motion.div {...fadeUp(0)}>
                <p className="feature-page__section-eyebrow feature-page__section-eyebrow--light">
                  {content.screenshot.eyebrow}
                </p>
                <h2 id={`${headingId}-shot`} className="feature-page__showcase-title">
                  {content.screenshot.heading}
                </h2>
                <p className="feature-page__showcase-body">{content.screenshot.body}</p>
                <div
                  className="feature-page__workflow-flow short-feature__workflow"
                  aria-label="Connected workflow"
                >
                  {content.screenshot.workflow.map((step, index) => (
                    <span key={step} className="feature-page__workflow-item">
                      <span className="feature-page__workflow-pill">{step}</span>
                      {index < content.screenshot.workflow.length - 1 ? (
                        <span className="feature-page__workflow-arrow" aria-hidden="true">
                          →
                        </span>
                      ) : null}
                    </span>
                  ))}
                </div>
              </motion.div>


            </div>
          </section>

          <section
            className="feature-page__workflow-band short-feature__final"
            aria-labelledby={`${headingId}-final`}
          >
            <div className="feature-page__container">
              <motion.div className="short-feature__final-inner" {...fadeUp(0)}>
                <h2 id={`${headingId}-final`} className="feature-page__workflow-title">
                  {content.finalCta.heading}
                </h2>
                <p className="feature-page__workflow-body">{content.finalCta.supporting}</p>
                <div className="feature-page__hero-actions">
                  <DemoCta label={content.finalCta.cta.label} href={content.finalCta.cta.href} />
                </div>
              </motion.div>
            </div>
          </section>
        </article>

        <ContactUs />
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}

export default ShortFeaturePage

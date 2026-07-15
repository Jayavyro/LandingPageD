import { motion, useReducedMotion } from 'framer-motion'
import { Link, Navigate, useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Chatbot from '../../components/Chatbot/Chatbot'
import ContactUs from '../../components/ContactUs/ContactUs'
import {
  getIndustryPage,
  getIndustryRoute,
  INDUSTRY_PAGE_LABELS,
  type IndustryPageContent,
} from '../../constants/industryPages'
import './IndustryPage.css'

const EASE = [0.22, 1, 0.36, 1] as const

function IndustryRelated({ relatedIds }: { relatedIds: IndustryPageContent['relatedIds'] }) {
  return (
    <section className="industry-page__related" aria-labelledby="industry-related-heading">
      <h2 id="industry-related-heading" className="industry-page__related-title">
        Other AEC industries
      </h2>
      <ul className="industry-page__related-list">
        {relatedIds.map((id) => (
          <li key={id}>
            <Link to={getIndustryRoute(id)} className="industry-page__related-link">
              {INDUSTRY_PAGE_LABELS[id]}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

function IndustryPage() {
  const { industryId } = useParams()
  const content = getIndustryPage(industryId)
  const prefersReducedMotion = useReducedMotion()

  if (!content) {
    return <Navigate to="/" replace />
  }

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
        <article className="industry-page" aria-labelledby="industry-page-heading">
          <div className="industry-page__ambient" aria-hidden="true">
            <div className="industry-page__grid-pattern" />
            <div className="industry-page__glow industry-page__glow--left" />
            <div className="industry-page__glow industry-page__glow--right" />
          </div>

          <div className="industry-page__container">
            <header className="industry-page__hero">
              <motion.div className="industry-page__hero-copy" {...fadeUp(0)}>
                <p className="industry-page__eyebrow">{content.eyebrow}</p>
                <h1 id="industry-page-heading" className="industry-page__title">
                  {content.headline}
                </h1>
                <p className="industry-page__subtitle">{content.subtitle}</p>
                <nav className="industry-page__jump" aria-label="On this page">
                  <a href="#context" className="industry-page__jump-link">
                    Context
                  </a>
                  <a href="#capabilities" className="industry-page__jump-link">
                    Capabilities
                  </a>
                  <a href="#modules" className="industry-page__jump-link">
                    Modules
                  </a>
                  <a href="#faq" className="industry-page__jump-link">
                    FAQ
                  </a>
                </nav>
              </motion.div>

              <motion.figure className="industry-page__hero-visual" {...fadeUp(0.08)}>
                <img
                  className="industry-page__hero-image"
                  src={content.heroImage.src}
                  alt={content.heroImage.alt}
                  loading="eager"
                  decoding="async"
                />
              </motion.figure>
            </header>
          </div>

          <section id="context" className="industry-page__context-band">
            <div className="industry-page__container industry-page__context-layout">
              <motion.blockquote className="industry-page__quote" {...fadeUp(0)}>
                <p>{content.pullQuote}</p>
              </motion.blockquote>

              <motion.div className="industry-page__context-copy" {...fadeUp(0.08)}>
                <h2 className="industry-page__context-title">{content.contextTitle}</h2>
                <p className="industry-page__context-body">{content.contextBody}</p>
              </motion.div>
            </div>
          </section>

          <div className="industry-page__container">
            <section className="industry-page__pressures" aria-labelledby="industry-pressures-heading">
              <motion.header className="industry-page__section-head" {...fadeUp(0)}>
                <p className="industry-page__section-eyebrow">Where firms feel it</p>
                <h2 id="industry-pressures-heading" className="industry-page__section-title">
                  What breaks down without a connected platform
                </h2>
              </motion.header>

              <ul className="industry-page__pressure-list">
                {content.pressures.map((pressure, index) => (
                  <motion.li
                    key={pressure.title}
                    className="industry-page__pressure-item"
                    {...fadeUp(0.06 + index * 0.05)}
                  >
                    <span className="industry-page__pressure-index" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="industry-page__pressure-copy">
                      <h3 className="industry-page__pressure-title">{pressure.title}</h3>
                      <p className="industry-page__pressure-body">{pressure.body}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </section>
          </div>

          <section id="capabilities" className="industry-page__spine-band">
            <div className="industry-page__container">
              <div className="industry-page__spine-layout">
                <motion.header className="industry-page__spine-head" {...fadeUp(0)}>
                  <p className="industry-page__section-eyebrow">How Avyro fits</p>
                  <h2 className="industry-page__section-title">
                    The operating rhythm for {INDUSTRY_PAGE_LABELS[content.id].toLowerCase()} firms
                  </h2>
                  <p className="industry-page__spine-intro">
                    Three connected capabilities—each tied to the modules your team uses every week.
                  </p>
                </motion.header>

                <ol className="industry-page__spine-list">
                  {content.capabilities.map((capability, index) => (
                    <motion.li
                      key={capability.title}
                      className="industry-page__spine-item"
                      {...fadeUp(0.08 + index * 0.06)}
                    >
                      <span className="industry-page__spine-marker" aria-hidden="true">
                        {index + 1}
                      </span>
                      <div className="industry-page__spine-content">
                        <h3 className="industry-page__spine-title">{capability.title}</h3>
                        <p className="industry-page__spine-body">{capability.body}</p>
                        <ul className="industry-page__spine-modules" aria-label="Related modules">
                          {capability.modules.map((module) => (
                            <li key={module}>{module}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          <div className="industry-page__container">
            <section id="modules" className="industry-page__modules" aria-labelledby="industry-modules-heading">
              <motion.header className="industry-page__section-head" {...fadeUp(0)}>
                <p className="industry-page__section-eyebrow">Start here</p>
                <h2 id="industry-modules-heading" className="industry-page__section-title">
                  Modules that matter most
                </h2>
              </motion.header>

              <motion.ul className="industry-page__module-list" {...fadeUp(0.08)}>
                {content.moduleLinks.map((module) => (
                  <li key={module.href}>
                    <Link to={module.href} className="industry-page__module-link">
                      {module.label}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            </section>

            <section className="industry-page__outcomes" aria-labelledby="industry-outcomes-heading">
              <motion.header className="industry-page__section-head" {...fadeUp(0)}>
                <p className="industry-page__section-eyebrow">What changes</p>
                <h2 id="industry-outcomes-heading" className="industry-page__section-title">
                  Outcomes your firm can run on
                </h2>
              </motion.header>

              <ul className="industry-page__outcome-list">
                {content.outcomes.map((outcome, index) => (
                  <motion.li
                    key={outcome.label}
                    className="industry-page__outcome-item"
                    {...fadeUp(0.06 + index * 0.05)}
                  >
                    <h3 className="industry-page__outcome-label">{outcome.label}</h3>
                    <p className="industry-page__outcome-description">{outcome.description}</p>
                  </motion.li>
                ))}
              </ul>
            </section>

            <section id="faq" className="industry-page__faq" aria-labelledby="industry-faq-heading">
              <motion.header className="industry-page__section-head" {...fadeUp(0)}>
                <p className="industry-page__section-eyebrow">Quick answers</p>
                <h2 id="industry-faq-heading" className="industry-page__section-title">
                  Questions firms ask first
                </h2>
              </motion.header>

              <div className="industry-page__faq-list">
                {content.faqs.map((faq, index) => (
                  <motion.article
                    key={faq.question}
                    className="industry-page__faq-item"
                    {...fadeUp(0.06 + index * 0.04)}
                  >
                    <h3 className="industry-page__faq-question">{faq.question}</h3>
                    <p className="industry-page__faq-answer">{faq.answer}</p>
                  </motion.article>
                ))}
              </div>
            </section>

            <motion.div {...fadeUp(0.12)}>
              <IndustryRelated relatedIds={content.relatedIds} />
            </motion.div>
          </div>
        </article>

        <ContactUs />
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}

export default IndustryPage

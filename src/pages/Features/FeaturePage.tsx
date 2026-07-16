import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, CheckCircle2, GitBranch } from 'lucide-react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Chatbot from '../../components/Chatbot/Chatbot'
import ContactUs from '../../components/ContactUs/ContactUs'
import { getFeaturePage } from '../../constants/featurePages'
import './FeaturePage.css'

const EASE = [0.22, 1, 0.36, 1] as const

function FeaturePage() {
  const { pathname } = useLocation()
  const featureId = pathname.replace('/products/', '')
  const content = getFeaturePage(featureId)
  const prefersReducedMotion = useReducedMotion()

  if (!content) {
    return <Navigate to="/" replace />
  }

  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-64px' },
          transition: { duration: 0.48, delay, ease: EASE },
        }

  return (
    <div className="app">
      <Navbar />
      <main className="app__main">
        <article className="feature-page" aria-labelledby="feature-page-heading">
          <div className="feature-page__ambient" aria-hidden="true">
            <div className="feature-page__grid-pattern" />
            <div className="feature-page__glow feature-page__glow--left" />
            <div className="feature-page__glow feature-page__glow--right" />
          </div>

          <div className="feature-page__container">
            <header className="feature-page__hero">
              <motion.div className="feature-page__hero-copy" {...fadeUp(0)}>

                <p className="feature-page__eyebrow">{content.eyebrow}</p>
                <h1 id="feature-page-heading" className="feature-page__title">
                  {content.headline}{' '}
                  <span className="feature-page__title-accent">{content.headlineAccent}</span>
                </h1>
                <p className="feature-page__subtitle">{content.subtitle}</p>

                <div className="feature-page__hero-actions">
                  <a href={content.heroCta.href} className="feature-page__cta feature-page__cta--primary">
                    {content.heroCta.label}
                  </a>
                  <Link to={content.secondaryCta.href} className="feature-page__cta feature-page__cta--secondary">
                    {content.secondaryCta.label}
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </div>

                <nav className="feature-page__jump" aria-label="On this page">
                  <a href="#problem" className="feature-page__jump-link">
                    Problem
                  </a>
                  <a href="#steps" className="feature-page__jump-link">
                    How it works
                  </a>
                  <a href="#capabilities" className="feature-page__jump-link">
                    Capabilities
                  </a>
                  <a href="#showcase" className="feature-page__jump-link">
                    In action
                  </a>
                  <a href="#faq" className="feature-page__jump-link">
                    FAQ
                  </a>
                </nav>
              </motion.div>

              <motion.figure className="feature-page__hero-visual" {...fadeUp(0.08)}>
                <div className="feature-page__hero-frame">
                  <img
                    className="feature-page__hero-image"
                    src={content.heroImage.src}
                    alt={content.heroImage.alt}
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </motion.figure>
            </header>
          </div>

          <section id="problem" className="feature-page__problem-band">
            <div className="feature-page__container feature-page__problem-layout">
              <motion.blockquote className="feature-page__quote" {...fadeUp(0)}>
                <GitBranch className="feature-page__quote-icon" aria-hidden="true" />
                <p>{content.pullQuote}</p>
              </motion.blockquote>

              <motion.div className="feature-page__problem-copy" {...fadeUp(0.08)}>
                <h2 className="feature-page__section-title">{content.problemTitle}</h2>
                <p className="feature-page__section-intro">{content.problemIntro}</p>
                <ul className="feature-page__problem-list">
                  {content.problems.map((problem) => (
                    <li key={problem.title} className="feature-page__problem-card">
                      <h3 className="feature-page__problem-card-title">{problem.title}</h3>
                      <p className="feature-page__problem-card-copy">{problem.description}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>

          <div className="feature-page__container">
            <section id="steps" className="feature-page__steps" aria-labelledby="feature-steps-heading">
              <motion.header className="feature-page__section-head" {...fadeUp(0)}>
                <p className="feature-page__section-eyebrow">{content.stepsEyebrow}</p>
                <h2 id="feature-steps-heading" className="feature-page__section-title">
                  {content.stepsTitle}
                </h2>
              </motion.header>

              <ol className="feature-page__step-list">
                {content.steps.map((step, index) => (
                  <motion.li
                    key={step.title}
                    className="feature-page__step-card"
                    {...fadeUp(0.06 + index * 0.06)}
                  >
                    <span className="feature-page__step-index" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="feature-page__step-copy">
                      <h3 className="feature-page__step-title">{step.title}</h3>
                      <p className="feature-page__step-description">{step.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </section>

            <section
              id="capabilities"
              className="feature-page__capabilities"
              aria-labelledby="feature-capabilities-heading"
            >
              <motion.header className="feature-page__section-head" {...fadeUp(0)}>
                <p className="feature-page__section-eyebrow">{content.capabilitiesEyebrow}</p>
                <h2 id="feature-capabilities-heading" className="feature-page__section-title">
                  {content.capabilitiesTitle}
                </h2>
                <p className="feature-page__section-intro">{content.capabilitiesIntro}</p>
              </motion.header>

              <div className="feature-page__capability-grid">
                {content.capabilities.map((capability, index) => {
                  const Icon = capability.icon

                  return (
                    <motion.article
                      key={capability.title}
                      className="feature-page__capability-card"
                      {...fadeUp(0.06 + index * 0.05)}
                    >
                      <span className="feature-page__capability-icon" aria-hidden="true">
                        <Icon />
                      </span>
                      <h3 className="feature-page__capability-title">{capability.title}</h3>
                      <p className="feature-page__capability-copy">{capability.description}</p>
                    </motion.article>
                  )
                })}
              </div>
            </section>
          </div>

          <section id="showcase" className="feature-page__showcase-band">
            <div className="feature-page__container feature-page__showcase-layout">
              <motion.div className="feature-page__showcase-copy" {...fadeUp(0)}>
                <p className="feature-page__section-eyebrow feature-page__section-eyebrow--light">
                  In action
                </p>
                <h2 className="feature-page__showcase-title">{content.showcase.title}</h2>
                <p className="feature-page__showcase-body">{content.showcase.body}</p>

                <ul className="feature-page__outcome-list">
                  {content.outcomes.map((outcome) => (
                    <li key={outcome.title} className="feature-page__outcome-item">
                      <CheckCircle2 className="feature-page__outcome-icon" aria-hidden="true" />
                      <span>
                        <strong>{outcome.title}</strong> — {outcome.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.figure className="feature-page__showcase-media" {...fadeUp(0.1)}>
                <video
                  className="feature-page__showcase-video"
                  src={content.showcase.videoSrc}
                  poster={content.showcase.poster}
                  controls
                  playsInline
                  preload="metadata"
                >
                  <track kind="captions" />
                </video>
              </motion.figure>
            </div>
          </section>

          <section className="feature-page__workflow-band" aria-labelledby="feature-workflow-heading">
            <div className="feature-page__container">
              <motion.div className="feature-page__workflow" {...fadeUp(0)}>
                <p className="feature-page__section-eyebrow feature-page__section-eyebrow--light">
                  Connected workflow
                </p>
                <h2 id="feature-workflow-heading" className="feature-page__workflow-title">
                  {content.workflowTitle}
                </h2>
                <p className="feature-page__workflow-body">{content.workflowBody}</p>
                <div className="feature-page__workflow-flow" aria-label="Connected modules">
                  {content.workflowFlow.map((step, index) => (
                    <span key={step} className="feature-page__workflow-item">
                      <span className="feature-page__workflow-pill">{step}</span>
                      {index < content.workflowFlow.length - 1 && (
                        <span className="feature-page__workflow-arrow" aria-hidden="true">
                          →
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <div className="feature-page__container">
            <section id="faq" className="feature-page__faq" aria-labelledby="feature-faq-heading">
              <motion.header className="feature-page__section-head" {...fadeUp(0)}>
                <p className="feature-page__section-eyebrow">Questions</p>
                <h2 id="feature-faq-heading" className="feature-page__section-title">
                  Quick answers
                </h2>
              </motion.header>

              <dl className="feature-page__faq-list">
                {content.faqs.map((item, index) => (
                  <motion.div key={item.question} className="feature-page__faq-item" {...fadeUp(0.05 + index * 0.04)}>
                    <dt className="feature-page__faq-question">{item.question}</dt>
                    <dd className="feature-page__faq-answer">{item.answer}</dd>
                  </motion.div>
                ))}
              </dl>
            </section>

            <motion.section className="feature-page__related" aria-labelledby="feature-related-heading" {...fadeUp(0)}>
              <h2 id="feature-related-heading" className="feature-page__related-title">
                Explore related modules
              </h2>
              <ul className="feature-page__related-list">
                {content.related.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="feature-page__related-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>
        </article>

        <ContactUs />
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}

export default FeaturePage

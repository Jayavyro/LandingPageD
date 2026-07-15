import { motion, useReducedMotion } from 'framer-motion'

import { useEffect } from 'react'

import { Link, useLocation } from 'react-router-dom'

import Navbar from '../../components/Navbar/Navbar'

import Footer from '../../components/Footer/Footer'

import Chatbot from '../../components/Chatbot/Chatbot'

import ContactUs from '../../components/ContactUs/ContactUs'

import { PLATFORM_PAGE } from '../../constants/productPages'

import { getIntegrationPartners } from '../../constants/platformIntegrations'

import { PLATFORM_HERO_IMAGE, PLATFORM_MODULE_IMAGES } from '../../constants/productPageImages'

import './ProductPage.css'



const EASE = [0.22, 1, 0.36, 1] as const



function PlatformProductPage() {

  const prefersReducedMotion = useReducedMotion()

  const { hash } = useLocation()



  useEffect(() => {

    if (!hash) return



    const targetId = hash.replace('#', '')

    const target = document.getElementById(targetId)

    if (!target) return



    const scrollBehavior = prefersReducedMotion ? 'auto' : 'smooth'

    target.scrollIntoView({ behavior: scrollBehavior, block: 'start' })

  }, [hash, prefersReducedMotion])



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

        <article className="product-page product-page--platform" aria-labelledby="platform-page-heading">

          <div className="product-page__ambient" aria-hidden="true">

            <div className="product-page__grid-pattern" />

            <div className="product-page__glow product-page__glow--center" />

          </div>



          <div className="product-page__container">

            <header className="product-page__hero">

              <motion.div className="product-page__hero-copy" {...fadeUp(0)}>

                <p className="product-page__eyebrow">{PLATFORM_PAGE.category}</p>

                <h1 id="platform-page-heading" className="product-page__title">

                  {PLATFORM_PAGE.headline}

                </h1>

                <p className="product-page__subtitle">{PLATFORM_PAGE.subtitle}</p>

              </motion.div>



              <motion.figure className="product-page__hero-visual" {...fadeUp(0.08)}>

                <img

                  className="product-page__hero-image"

                  src={PLATFORM_HERO_IMAGE.src}

                  alt={PLATFORM_HERO_IMAGE.alt}

                  loading="eager"

                  decoding="async"

                />

              </motion.figure>

            </header>



            <nav className="product-page__platform-nav" aria-label="Platform modules">

              <ul className="product-page__platform-nav-list">

                {PLATFORM_PAGE.modules.map((module) => (

                  <li key={module.id}>

                    <a href={`#${module.id}`} className="product-page__platform-nav-link">

                      {module.title}

                    </a>

                  </li>

                ))}

              </ul>

            </nav>
          </div>

          <div className="product-page__strip">
            <div className="product-page__strip-inner">
              <div className="product-page__platform-modules">

              {PLATFORM_PAGE.modules.map((module, index) => {

                const moduleImage = PLATFORM_MODULE_IMAGES[module.id]
                const integrationPartners = module.partnerIds
                  ? getIntegrationPartners(module.partnerIds)
                  : []



                return (

                  <motion.section

                    key={module.id}

                    id={module.id}

                    className={`product-page__platform-module${index % 2 === 1 ? ' product-page__platform-module--alt' : ''}`}

                    aria-labelledby={`platform-module-${module.id}`}

                    {...fadeUp(0.08 + index * 0.04)}

                  >

                    <div className="product-page__platform-module-layout">
                      <div className="product-page__platform-module-head">
                        <div className="product-page__platform-module-meta">
                          <span className="product-page__platform-index" aria-hidden="true">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <p className="product-page__platform-tag">{module.tagline}</p>
                        </div>

                        <h2 id={`platform-module-${module.id}`} className="product-page__platform-title">
                          {module.title}
                        </h2>

                        <p className="product-page__platform-description">{module.description}</p>

                        {integrationPartners.length > 0 && (
                          <div className="product-page__integration-partners">
                            <p className="product-page__integration-partners-label">Works with</p>
                            <ul className="product-page__integration-partners-list">
                              {integrationPartners.map((partner) => (
                                <li key={partner.id} className="product-page__integration-partner">
                                  <img
                                    className="product-page__integration-partner-logo"
                                    src={partner.logo}
                                    alt=""
                                    width={40}
                                    height={40}
                                    loading="lazy"
                                    decoding="async"
                                  />
                                  <span className="product-page__integration-partner-copy">
                                    <span className="product-page__integration-partner-name">
                                      {partner.name}
                                    </span>
                                    <span className="product-page__integration-partner-category">
                                      {partner.category}
                                    </span>
                                  </span>
                                </li>
                              ))}
                              <li className="product-page__integration-partner product-page__integration-partner--more">
                                <span className="product-page__integration-partner-more-icon" aria-hidden="true">
                                  +
                                </span>
                                <span className="product-page__integration-partner-copy">
                                  <span className="product-page__integration-partner-name">And more</span>
                                  <span className="product-page__integration-partner-category">
                                    Accounting, files, and custom connectors
                                  </span>
                                </span>
                              </li>
                            </ul>
                          </div>
                        )}

                        {module.id !== 'integrations' && (
                          <ul className="product-page__platform-points">
                            {module.points.map((point) => (
                              <li key={point}>
                                <span className="product-page__platform-point-marker" aria-hidden="true" />
                                {point}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>



                      {moduleImage && (

                        <figure className="product-page__platform-visual">

                          <img

                            className="product-page__platform-image"

                            src={moduleImage.src}

                            alt={moduleImage.alt}

                            loading="lazy"

                            decoding="async"

                          />

                        </figure>

                      )}

                    </div>

                  </motion.section>

                )

              })}
              </div>
            </div>
          </div>

          <div className="product-page__container">
            <motion.aside className="product-page__workflow" {...fadeUp(0.24)}>
              <p className="product-page__workflow-eyebrow">{PLATFORM_PAGE.workflow.eyebrow}</p>
              <h2 className="product-page__workflow-title">{PLATFORM_PAGE.workflow.title}</h2>
              <p className="product-page__workflow-copy">{PLATFORM_PAGE.workflow.body}</p>
              <div className="product-page__workflow-flow" aria-label="Connected workflow">
                {PLATFORM_PAGE.workflow.flow.map((step, index) => (
                  <span key={step} className="product-page__workflow-flow-item">
                    <span className="product-page__workflow-step">{step}</span>
                    {index < PLATFORM_PAGE.workflow.flow.length - 1 && (
                      <span className="product-page__workflow-arrow" aria-hidden="true">
                        →
                      </span>
                    )}
                  </span>
                ))}
              </div>
              <Link to="/#solutions" className="product-page__workflow-cta">
                See the full workflow
              </Link>
            </motion.aside>

          </div>

        </article>



        <ContactUs />

      </main>

      <Footer />

      <Chatbot />

    </div>

  )

}



export default PlatformProductPage


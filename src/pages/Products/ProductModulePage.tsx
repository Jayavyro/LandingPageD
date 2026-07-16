import { motion, useReducedMotion } from 'framer-motion'

import { Link, Navigate, useParams } from 'react-router-dom'

import Navbar from '../../components/Navbar/Navbar'

import Footer from '../../components/Footer/Footer'

import Chatbot from '../../components/Chatbot/Chatbot'

import ContactUs from '../../components/ContactUs/ContactUs'

import {

  getProductPage,

  PRODUCT_PAGE_LABELS,

  type ProductPageContent,

} from '../../constants/productPages'

import { PRODUCT_HERO_IMAGES } from '../../constants/productPageImages'

import { PRODUCT_ROUTES } from '../../constants/productRoutes'

import './ProductPage.css'



const EASE = [0.22, 1, 0.36, 1] as const



function ProductRelated({ relatedIds }: { relatedIds: ProductPageContent['relatedIds'] }) {

  return (

    <section className="product-page__related" aria-labelledby="product-related-heading">

      <h2 id="product-related-heading" className="product-page__related-title">

        Works well with

      </h2>

      <ul className="product-page__related-list">

        {relatedIds.map((id) => (

          <li key={id}>

            <Link to={PRODUCT_ROUTES[id]} className="product-page__related-link">

              {PRODUCT_PAGE_LABELS[id]}

            </Link>

          </li>

        ))}

      </ul>

    </section>

  )

}



function ProductModulePage() {

  const { productId } = useParams()

  const content = getProductPage(productId)

  const prefersReducedMotion = useReducedMotion()



  if (!content) {

    return <Navigate to="/" replace />

  }



  const heroImage = PRODUCT_HERO_IMAGES[content.id]



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

        <article className="product-page" aria-labelledby="product-page-heading">

          <div className="product-page__ambient" aria-hidden="true">

            <div className="product-page__grid-pattern" />

            <div className="product-page__glow product-page__glow--center" />

          </div>



          <div className="product-page__container">

            <header className="product-page__hero">

              <motion.div className="product-page__hero-copy" {...fadeUp(0)}>

                <p className="product-page__eyebrow">{content.category}</p>

                <h1 id="product-page-heading" className="product-page__title">

                  {content.headline}

                </h1>

                <p className="product-page__subtitle">{content.subtitle}</p>

              </motion.div>



              <motion.figure className="product-page__hero-visual" {...fadeUp(0.08)}>

                <img

                  className="product-page__hero-image"

                  src={heroImage.src}

                  alt={heroImage.alt}

                  loading="eager"

                  decoding="async"

                />

              </motion.figure>

            </header>



            <motion.section className="product-page__pains" aria-label="Common challenges" {...fadeUp(0.16)}>

              <h2 className="product-page__section-label">Sound familiar?</h2>

              <ul className="product-page__pain-list">

                {content.pains.map((pain) => (

                  <li key={pain} className="product-page__pain-item">

                    {pain}

                  </li>

                ))}

              </ul>

            </motion.section>
          </div>

          <div className="product-page__strip">
            <div className="product-page__strip-inner">
              <motion.section
                className="product-page__features"
                aria-labelledby="product-features-heading"
                {...fadeUp(0.2)}
              >
                <header className="product-page__features-head">
                  <p className="product-page__features-eyebrow">{content.featuresEyebrow}</p>
                  <h2 id="product-features-heading" className="product-page__features-title">
                    {content.featuresTitle}
                  </h2>
                  <p className="product-page__features-intro">{content.featuresIntro}</p>
                </header>

                <div className="product-page__feature-grid">
                  {content.features.map((feature) => (
                    <article key={feature.title} className="product-page__feature-card">
                      <h3 className="product-page__feature-title">{feature.title}</h3>
                      <p className="product-page__feature-copy">{feature.description}</p>
                    </article>
                  ))}
                </div>
              </motion.section>
            </div>
          </div>

          <div className="product-page__container">
            <motion.aside className="product-page__workflow" {...fadeUp(0.24)}>
              <p className="product-page__workflow-eyebrow">{content.workflow.eyebrow}</p>
              <h2 className="product-page__workflow-title">{content.workflow.title}</h2>
              <p className="product-page__workflow-copy">{content.workflow.body}</p>
              <div className="product-page__workflow-flow" aria-label="Connected workflow">
                {content.workflow.flow.map((step, index) => (
                  <span key={step} className="product-page__workflow-flow-item">
                    <span className="product-page__workflow-step">{step}</span>
                    {index < content.workflow.flow.length - 1 && (
                      <span className="product-page__workflow-arrow" aria-hidden="true">
                        →
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </motion.aside>



            <motion.section className="product-page__faq" aria-labelledby="product-faq-heading" {...fadeUp(0.28)}>

              <h2 id="product-faq-heading" className="product-page__section-title">

                Quick answers

              </h2>

              <dl className="product-page__faq-list">

                {content.faqs.map((item) => (

                  <div key={item.question} className="product-page__faq-item">

                    <dt className="product-page__faq-question">{item.question}</dt>

                    <dd className="product-page__faq-answer">{item.answer}</dd>

                  </div>

                ))}

              </dl>

            </motion.section>



            <motion.div {...fadeUp(0.32)}>

              <ProductRelated relatedIds={content.relatedIds} />

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



export default ProductModulePage


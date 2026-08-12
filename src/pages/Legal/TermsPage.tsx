import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import {
  TERMS_HERO,
  TERMS_SECTIONS,
  type TermsSection,
} from '../../constants/termsPage'
import './TermsPage.css'

const EASE = [0.22, 1, 0.36, 1] as const

function TermsSectionBlock({ section }: { section: TermsSection }) {
  return (
    <article id={section.id} className="terms-page__section">
      <header className="terms-page__section-head">
        <span className="terms-page__section-number" aria-hidden="true">
          {section.number}
        </span>
        <h2 className="terms-page__section-title">{section.title}</h2>
      </header>

      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="terms-page__paragraph">
          {paragraph}
          {section.contactEmail ? (
            <>
              {' '}
              <a className="terms-page__email" href={`mailto:${section.contactEmail}`}>
                {section.contactEmail}
              </a>
              .
            </>
          ) : null}
        </p>
      ))}

      {section.bullets ? (
        <ul className="terms-page__bullets">
          {section.bullets.map((item) => (
            <li key={item} className="terms-page__bullet">
              {item}
            </li>
          ))}
        </ul>
      ) : null}

      {section.modules ? (
        <ul className="terms-page__modules">
          {section.modules.map((module) => (
            <li key={module.title} className="terms-page__module">
              <h3 className="terms-page__module-title">{module.title}</h3>
              <p className="terms-page__module-copy">{module.description}</p>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  )
}

function TermsPage() {
  const prefersReducedMotion = useReducedMotion()
  const [activeId, setActiveId] = useState(TERMS_SECTIONS[0]?.id ?? '')

  useEffect(() => {
    const sections = TERMS_SECTIONS.map((section) =>
      document.getElementById(section.id),
    ).filter((node): node is HTMLElement => Boolean(node))

    if (sections.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.1, 0.35, 0.6],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

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
        <section className="terms-page" aria-labelledby="terms-heading">
          <div className="terms-page__ambient" aria-hidden="true">
            <div className="terms-page__grid-pattern" />
            <div className="terms-page__glow terms-page__glow--top" />
          </div>

          <div className="terms-page__container">
            <header className="terms-page__hero">
              <motion.p className="terms-page__eyebrow" {...fadeUp(0)}>
                {TERMS_HERO.eyebrow}
              </motion.p>
              <motion.h1 id="terms-heading" className="terms-page__title" {...fadeUp(0.05)}>
                {TERMS_HERO.title}
              </motion.h1>
              <motion.p className="terms-page__subtitle" {...fadeUp(0.1)}>
                {TERMS_HERO.subtitle}
              </motion.p>
              <motion.p className="terms-page__updated" {...fadeUp(0.14)}>
                <span>{TERMS_HERO.updatedLabel}</span>
                <time dateTime="2026-08-12">{TERMS_HERO.updatedDate}</time>
              </motion.p>
            </header>

            <div className="terms-page__layout">
              <nav className="terms-page__toc" aria-label="Terms sections">
                <p className="terms-page__toc-label">On this page</p>
                <ol className="terms-page__toc-list">
                  {TERMS_SECTIONS.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className={`terms-page__toc-link${
                          activeId === section.id ? ' terms-page__toc-link--active' : ''
                        }`}
                      >
                        <span className="terms-page__toc-num">{section.number}</span>
                        <span>{section.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="terms-page__content">
                {TERMS_SECTIONS.map((section, index) => (
                  <motion.div key={section.id} {...fadeUp(0.04 * (index % 4))}>
                    <TermsSectionBlock section={section} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default TermsPage

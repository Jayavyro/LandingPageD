import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import type { LegalHero, LegalSection } from '../../constants/legalDocument'
import './LegalDocument.css'

const EASE = [0.22, 1, 0.36, 1] as const

interface LegalDocumentPageProps {
  hero: LegalHero
  sections: LegalSection[]
  headingId: string
  tocLabel: string
}

function LegalSectionBlock({ section }: { section: LegalSection }) {
  return (
    <article id={section.id} className="legal-doc__section">
      <header className="legal-doc__section-head">
        <span className="legal-doc__section-number" aria-hidden="true">
          {section.number}
        </span>
        <h2 className="legal-doc__section-title">{section.title}</h2>
      </header>

      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="legal-doc__paragraph">
          {paragraph}
          {section.contactEmail ? (
            <>
              {' '}
              <a className="legal-doc__email" href={`mailto:${section.contactEmail}`}>
                {section.contactEmail}
              </a>
              .
            </>
          ) : null}
        </p>
      ))}

      {section.bullets ? (
        <ul className="legal-doc__bullets">
          {section.bullets.map((item) => (
            <li key={item} className="legal-doc__bullet">
              {item}
            </li>
          ))}
        </ul>
      ) : null}

      {section.modules ? (
        <ul className="legal-doc__modules">
          {section.modules.map((module) => (
            <li key={module.title} className="legal-doc__module">
              <h3 className="legal-doc__module-title">{module.title}</h3>
              <p className="legal-doc__module-copy">{module.description}</p>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  )
}

function LegalDocumentPage({
  hero,
  sections,
  headingId,
  tocLabel,
}: LegalDocumentPageProps) {
  const prefersReducedMotion = useReducedMotion()
  const [activeId, setActiveId] = useState(sections[0]?.id ?? '')

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => Boolean(node))

    if (nodes.length === 0) return undefined

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

    nodes.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [sections])

  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-64px' },
          transition: { duration: 0.45, delay, ease: EASE },
        }

  const updatedDateTime = (() => {
    const parsed = Date.parse(hero.updatedDate)
    if (Number.isNaN(parsed)) return undefined
    return new Date(parsed).toISOString().slice(0, 10)
  })()

  return (
    <div className="app">
      <Navbar />
      <main className="app__main">
        <section className="legal-doc" aria-labelledby={headingId}>
          <div className="legal-doc__ambient" aria-hidden="true">
            <div className="legal-doc__grid-pattern" />
            <div className="legal-doc__glow legal-doc__glow--top" />
          </div>

          <div className="legal-doc__container">
            <header className="legal-doc__hero">
              <motion.p className="legal-doc__eyebrow" {...fadeUp(0)}>
                {hero.eyebrow}
              </motion.p>
              <motion.h1 id={headingId} className="legal-doc__title" {...fadeUp(0.05)}>
                {hero.title}
              </motion.h1>
              <motion.p className="legal-doc__subtitle" {...fadeUp(0.1)}>
                {hero.subtitle}
              </motion.p>
              <motion.p className="legal-doc__updated" {...fadeUp(0.14)}>
                <span>{hero.updatedLabel}</span>
                <time dateTime={updatedDateTime}>{hero.updatedDate}</time>
              </motion.p>
            </header>

            <div className="legal-doc__layout">
              <nav className="legal-doc__toc" aria-label={tocLabel}>
                <p className="legal-doc__toc-label">On this page</p>
                <ol className="legal-doc__toc-list">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className={`legal-doc__toc-link${
                          activeId === section.id ? ' legal-doc__toc-link--active' : ''
                        }`}
                      >
                        <span className="legal-doc__toc-num">{section.number}</span>
                        <span>{section.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="legal-doc__content">
                {sections.map((section, index) => (
                  <motion.div key={section.id} {...fadeUp(0.04 * (index % 4))}>
                    <LegalSectionBlock section={section} />
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

export default LegalDocumentPage

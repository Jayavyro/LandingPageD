import { motion, useReducedMotion } from 'framer-motion'
import { BookOpenCheck } from 'lucide-react'
import {
  CASE_STUDY_BADGE,
  CASE_STUDY_HEADLINE_LINES,
  CASE_STUDY_META,
  CASE_STUDY_METRICS,
  CASE_STUDY_PROBLEM,
  CASE_STUDY_QUOTE,
  CASE_STUDY_SOLUTION,
  CASE_STUDY_SUBTITLE,
} from '../../constants/caseStudy'
import './CaseStudy.css'

const EASE = [0.22, 1, 0.36, 1] as const

function CaseStudy() {
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
    <section
      id="case-study"
      className="case-study"
      aria-labelledby="case-study-heading"
    >
      <div className="case-study__ambient" aria-hidden="true">
        <div className="case-study__grid-pattern" />
        <div className="case-study__glow case-study__glow--center" />
        <div className="case-study__glow case-study__glow--left" />
        <div className="case-study__glow case-study__glow--right" />
      </div>

      <div className="case-study__container">
        <header className="case-study__intro">
          <motion.div {...fadeUp(0)}>
            <span className="case-study__badge">
              <BookOpenCheck className="case-study__badge-icon" aria-hidden="true" />
              {CASE_STUDY_BADGE}
            </span>
          </motion.div>

          <motion.h2
            id="case-study-heading"
            className="case-study__title"
            {...fadeUp(0.05)}
          >
            <span className="case-study__title-line">
              {CASE_STUDY_HEADLINE_LINES[0]}
            </span>
            <span className="case-study__title-line case-study__title-accent">
              {CASE_STUDY_HEADLINE_LINES[1]}
            </span>
          </motion.h2>

          <motion.p className="case-study__subtitle" {...fadeUp(0.1)}>
            {CASE_STUDY_SUBTITLE}
          </motion.p>
        </header>

        <div className="case-study__grid">
          <motion.div className="case-study__narrative" {...fadeUp(0.12)}>
            <p className="case-study__meta">{CASE_STUDY_META}</p>

            <div className="case-study__block">
              <p className="case-study__block-label">{CASE_STUDY_PROBLEM.label}</p>
              <p className="case-study__block-copy">{CASE_STUDY_PROBLEM.copy}</p>
            </div>

            <div className="case-study__block">
              <p className="case-study__block-label">{CASE_STUDY_SOLUTION.label}</p>
              <p className="case-study__block-copy">{CASE_STUDY_SOLUTION.copy}</p>
            </div>

            <blockquote className="case-study__quote">
              <span className="case-study__quote-mark" aria-hidden="true">
                &ldquo;
              </span>
              <p className="case-study__quote-text">{CASE_STUDY_QUOTE.quote}</p>
              <cite className="case-study__quote-cite">
                {CASE_STUDY_QUOTE.name}, {CASE_STUDY_QUOTE.role}, {CASE_STUDY_QUOTE.company}
              </cite>
            </blockquote>
          </motion.div>

          <ul className="case-study__metrics" aria-label="fivD results with Avyro">
            {CASE_STUDY_METRICS.map((metric, index) => (
              <motion.li
                key={metric.id}
                className="case-study__metric"
                {...fadeUp(0.16 + index * 0.06)}
              >
                <p className="case-study__metric-value">{metric.value}</p>
                <p className="case-study__metric-title">{metric.title}</p>
                <p className="case-study__metric-caption">{metric.caption}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default CaseStudy

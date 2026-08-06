import { motion, useReducedMotion } from 'framer-motion'
import {
  COMPANY_ADVISORY_HEADLINE,
  COMPANY_ADVISORY_PLACEHOLDERS,
  COMPANY_ADVISORY_SUBTITLE,
  COMPANY_BADGE,
  COMPANY_FOUNDER,
  COMPANY_HEADLINE,
  COMPANY_INTRO,
} from '../../constants/companyAbout'
import './CompanyAbout.css'

const EASE = [0.22, 1, 0.36, 1] as const

function CompanyAbout() {
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
    <section
      id="company"
      className="company-about"
      aria-labelledby="company-heading"
    >
      <div className="company-about__ambient" aria-hidden="true">
        <div className="company-about__glow" />
      </div>

      <div className="company-about__container">
        <header className="company-about__intro">
          <motion.p className="company-about__badge" {...fadeUp(0)}>
            {COMPANY_BADGE}
          </motion.p>
          <motion.h2
            id="company-heading"
            className="company-about__title"
            {...fadeUp(0.05)}
          >
            {COMPANY_HEADLINE}
          </motion.h2>
          <motion.p className="company-about__body" {...fadeUp(0.1)}>
            {COMPANY_INTRO}
          </motion.p>
        </header>

        <motion.div className="company-about__founder" {...fadeUp(0.14)}>
          <div className="company-about__avatar" aria-hidden="true">
            {COMPANY_FOUNDER.initials}
          </div>
          <div>
            <p className="company-about__founder-name">{COMPANY_FOUNDER.name}</p>
            <p className="company-about__founder-role">{COMPANY_FOUNDER.role}</p>
            <p className="company-about__founder-bio">{COMPANY_FOUNDER.bio}</p>
          </div>
        </motion.div>

        <motion.h3 className="company-about__advisory-title" {...fadeUp(0.18)}>
          {COMPANY_ADVISORY_HEADLINE}
        </motion.h3>
        <motion.p className="company-about__advisory-subtitle" {...fadeUp(0.2)}>
          {COMPANY_ADVISORY_SUBTITLE}
        </motion.p>

        <ul className="company-about__advisory-grid">
          {COMPANY_ADVISORY_PLACEHOLDERS.map((label, index) => (
            <motion.li
              key={`${label}-${index}`}
              className="company-about__advisory-card"
              {...fadeUp(0.22 + index * 0.04)}
            >
              {label}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default CompanyAbout

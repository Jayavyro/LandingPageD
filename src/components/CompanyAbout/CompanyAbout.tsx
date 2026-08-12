import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  COMPANY_BADGE,
  COMPANY_FOUNDERS,
  COMPANY_HEADLINE,
  COMPANY_INTRO,
} from '../../constants/companyAbout'
import CompanyFounderModal from './CompanyFounderModal'
import './CompanyAbout.css'

const EASE = [0.22, 1, 0.36, 1] as const

function CompanyAbout() {
  const prefersReducedMotion = useReducedMotion()
  const [activeFounderId, setActiveFounderId] = useState<string | null>(null)

  const activeFounder =
    COMPANY_FOUNDERS.find((founder) => founder.id === activeFounderId) ?? null

  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-72px' },
          transition: { duration: 0.5, delay, ease: EASE },
        }

  return (
    <section
      id="company"
      className="company-about"
      aria-labelledby="company-heading"
    >
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

        <ul className="company-about__founders">
          {COMPANY_FOUNDERS.map((founder, index) => (
            <motion.li
              key={founder.id}
              className="company-about__founder"
              {...fadeUp(0.14 + index * 0.08)}
            >
              <button
                type="button"
                className="company-about__founder-btn"
                onClick={() => setActiveFounderId(founder.id)}
                aria-haspopup="dialog"
                aria-label={`About ${founder.name}, ${founder.role}`}
              >
                <span className="company-about__photo-wrap">
                  <img
                    src={founder.photo}
                    alt=""
                    className="company-about__photo"
                    width={480}
                    height={600}
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <span className="company-about__founder-meta">
                  <span className="company-about__founder-name">{founder.name}</span>
                  <span className="company-about__founder-role">{founder.role}</span>
                  <span className="company-about__founder-action" aria-hidden="true">
                    View profile
                  </span>
                </span>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>

      {activeFounder ? (
        <CompanyFounderModal
          founder={activeFounder}
          onClose={() => setActiveFounderId(null)}
        />
      ) : null}
    </section>
  )
}

export default CompanyAbout

import { motion, useReducedMotion } from 'framer-motion'
import heroBg from '../../ChatGPT Image Jul 9, 2026, 11_48_31 AM.png'
import fivdLogo from '../../695775c397e9ba97edd85611_26faefd428f8a4efc1b4b947dd0a2003_FivD white logo 2.webp'
import { ArrowRight } from 'lucide-react'
import {
  HERO_BADGE,
  HERO_CALCULATOR_CTA,
  HERO_CALCULATOR_HREF,
  HERO_HEADLINE_ACCENT_LINE,
  HERO_HEADLINE_LINE,
  HERO_SUBHEAD,
} from '../../constants/hero'
import { TRUST_BAR_STATS } from '../../constants/trustBar'
import HeroLeadForm from './HeroLeadForm'
import './Hero.css'

const EASE = [0.22, 1, 0.36, 1] as const

function Hero() {
  const prefersReducedMotion = useReducedMotion()

  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: EASE },
        }

  return (
    <section
      className="hero"
      aria-label="Hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero__content">
        <div className="hero__copy">
          <motion.p className="hero__badge" {...fadeUp(0)}>
            {HERO_BADGE}
          </motion.p>

          <motion.h1 className="hero__headline" {...fadeUp(0.05)}>
            <span className="hero__headline-line">{HERO_HEADLINE_LINE}</span>
            <span className="hero__headline-line hero__headline-line--gradient">
              {HERO_HEADLINE_ACCENT_LINE}
            </span>
          </motion.h1>

          <motion.p className="hero__subhead" {...fadeUp(0.1)}>
            {HERO_SUBHEAD}
          </motion.p>

          <motion.div className="hero__cta" {...fadeUp(0.15)}>
            <HeroLeadForm />
            <a href={HERO_CALCULATOR_HREF} className="hero__secondary-link">
              {HERO_CALCULATOR_CTA}
              <ArrowRight className="hero__secondary-link-icon" aria-hidden="true" />
            </a>
          </motion.div>
        </div>


      </div>

      <motion.div className="hero__trust" {...fadeUp(0.28)}>
        <div className="hero__trust-brand">
          <span className="hero__trust-label">Trusted by</span>
          <span className="hero__trust-icon-wrap">
            <img src={fivdLogo} alt="" className="hero__trust-icon" />
          </span>
          <span className="hero__trust-name">fivD</span>
        </div>

        <span className="hero__trust-divider" aria-hidden="true" />

        <div className="hero__trust-stats">
          {TRUST_BAR_STATS.map((stat) => {
            const StatIcon = stat.icon
            return (
              <div className="hero__trust-stat" key={stat.id}>
                <StatIcon className="hero__trust-stat-icon" aria-hidden="true" />
                <span className="hero__trust-stat-metric">{stat.metric}</span>
                <span className="hero__trust-stat-label">{stat.label}</span>
              </div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

import { ArrowRight, Cloud, MessageCircle, Settings, Shield } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { FAQ_CONTACT_IMAGE, FAQ_TRUST_ITEMS } from '../../constants/faq'
import './FAQContactCard.css'

const EASE = [0.22, 1, 0.36, 1] as const

const TRUST_ICONS = {
  security: Shield,
  cloud: Cloud,
  implementation: Settings,
} as const

function FAQContactCard() {
  const prefersReducedMotion = useReducedMotion()

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-48px' },
        transition: { duration: 0.4, ease: EASE },
      }

  return (
    <motion.aside className="faq-contact" {...motionProps}>
      <img
        className="faq-contact__image"
        src={FAQ_CONTACT_IMAGE}
        alt=""
        loading="lazy"
        decoding="async"
        aria-hidden="true"
      />
      <div className="faq-contact__overlay" aria-hidden="true" />

      <div className="faq-contact__content">
        <div className="faq-contact__top">
        <span className="faq-contact__icon-wrap" aria-hidden="true">
          <MessageCircle strokeWidth={1.75} />
        </span>

        <h3 className="faq-contact__title">Have a question not covered here?</h3>
        <p className="faq-contact__description">
          Our team is here to help you find the right solution for your firm.
        </p>

        <a href="#contact-us" className="faq-contact__cta">
          Contact Us
          <ArrowRight className="faq-contact__cta-icon" aria-hidden="true" />
        </a>
      </div>

      <div className="faq-contact__divider" aria-hidden="true" />

      <ul className="faq-contact__trust-list">
        {FAQ_TRUST_ITEMS.map((item) => {
          const Icon = TRUST_ICONS[item.id as keyof typeof TRUST_ICONS] ?? Shield

          return (
            <li key={item.id} className="faq-contact__trust-item">
              <span className="faq-contact__trust-icon" aria-hidden="true">
                <Icon strokeWidth={1.75} />
              </span>
              <span className="faq-contact__trust-copy">
                <span className="faq-contact__trust-title">{item.title}</span>
                <span className="faq-contact__trust-description">{item.description}</span>
              </span>
            </li>
          )
        })}
      </ul>
      </div>
    </motion.aside>
  )
}

export default FAQContactCard

import { Mail } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { CONTACT_BADGE, CONTACT_OUTCOME_LINE, CONTACT_SUBTITLE, CONTACT_TITLE } from '../../constants/contactUs'
import ContactChannels from './ContactChannels'
import ContactForm from './ContactForm'
import './ContactUs.css'

const EASE = [0.22, 1, 0.36, 1] as const

function ContactUs() {
  const prefersReducedMotion = useReducedMotion()

  const fadeLeft = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, margin: '-72px' },
          transition: { duration: 0.45, delay, ease: EASE },
        }

  const fadeRight = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, x: 20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, margin: '-72px' },
          transition: { duration: 0.45, delay, ease: EASE },
        }

  return (
    <section
      id="contact-us"
      className="contact-us"
      aria-labelledby="contact-us-heading"
    >
      <div className="contact-us__ambient" aria-hidden="true">
        <div className="contact-us__grid-pattern" />
        <div className="contact-us__glow contact-us__glow--center" />
      </div>

      <div className="contact-us__container">
        <div className="contact-us__hero">
          <motion.header className="contact-us__intro" {...fadeLeft(0)}>
            <span className="contact-us__badge">
              <Mail className="contact-us__badge-icon" aria-hidden="true" />
              {CONTACT_BADGE}
            </span>

            <h2 id="contact-us-heading" className="contact-us__title">
              {CONTACT_TITLE}
            </h2>

            <p className="contact-us__subtitle">{CONTACT_SUBTITLE}</p>
            <p className="contact-us__outcome">{CONTACT_OUTCOME_LINE}</p>
          </motion.header>

          <motion.div className="contact-us__form-column" {...fadeRight(0.08)}>
            <ContactForm />
          </motion.div>

          <motion.div className="contact-us__channels-column" {...fadeLeft(0.12)}>
            <ContactChannels />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs

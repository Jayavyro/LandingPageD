import { HelpCircle } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { FAQ_SUBTITLE } from '../../constants/faq'
import FAQAccordion from './FAQAccordion'
import FAQContactCard from './FAQContactCard'
import './FAQ.css'

const EASE = [0.22, 1, 0.36, 1] as const

function FAQ() {
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
    <section id="faq" className="faq" aria-labelledby="faq-heading">
      <div className="faq__ambient" aria-hidden="true">
        <div className="faq__grid-pattern" />
        <div className="faq__glow faq__glow--center" />
      </div>

      <div className="faq__container">
        <header className="faq__intro">
          <motion.div {...fadeUp(0)}>
            <span className="faq__badge">
              <HelpCircle className="faq__badge-icon" aria-hidden="true" />
              FAQ
            </span>
          </motion.div>

          <motion.h2 id="faq-heading" className="faq__title" {...fadeUp(0.06)}>
            Your Questions, Answered
          </motion.h2>

          <motion.p className="faq__subtitle" {...fadeUp(0.12)}>
            {FAQ_SUBTITLE}
          </motion.p>
        </header>

        <div className="faq__layout">
          <FAQContactCard />
          <FAQAccordion />
        </div>
      </div>
    </section>
  )
}

export default FAQ

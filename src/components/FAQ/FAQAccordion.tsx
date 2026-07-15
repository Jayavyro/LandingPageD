import { useState } from 'react'
import { ChevronDown, Minus, Plus } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { FAQ_ITEMS } from '../../constants/faq'
import './FAQAccordion.css'

const EASE = [0.22, 1, 0.36, 1] as const

function FAQAccordion() {
  const prefersReducedMotion = useReducedMotion()
  const [openId, setOpenId] = useState(FAQ_ITEMS[0]?.id ?? '')

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? '' : id))
  }

  const motionProps = (index: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-40px' },
          transition: { duration: 0.35, delay: 0.04 + index * 0.04, ease: EASE },
        }

  return (
    <div className="faq-accordion">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openId === item.id
        const panelId = `faq-panel-${item.id}`
        const buttonId = `faq-button-${item.id}`

        return (
          <motion.div
            key={item.id}
            className={['faq-accordion__item', isOpen && 'faq-accordion__item--open']
              .filter(Boolean)
              .join(' ')}
            {...motionProps(index)}
          >
            <button
              id={buttonId}
              type="button"
              className="faq-accordion__trigger"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(item.id)}
            >
              <span className="faq-accordion__toggle" aria-hidden="true">
                {isOpen ? <Minus strokeWidth={2.5} /> : <Plus strokeWidth={2.5} />}
              </span>
              <span className="faq-accordion__question">{item.question}</span>
              <ChevronDown
                className="faq-accordion__chevron"
                aria-hidden="true"
                strokeWidth={2}
              />
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="faq-accordion__panel"
              hidden={!isOpen}
            >
              <p className="faq-accordion__answer">{item.answer}</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default FAQAccordion

import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { CONTACT_CHANNELS } from '../../constants/contactUs'
import './ContactChannels.css'

const EASE = [0.22, 1, 0.36, 1] as const

const CHANNEL_ICONS = {
  email: Mail,
  phone: Phone,
  office: MapPin,
  hours: Clock,
} as const

function ContactChannels() {
  const prefersReducedMotion = useReducedMotion()

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-48px' },
        transition: { duration: 0.4, delay: 0.08, ease: EASE },
      }

  return (
    <motion.div className="contact-channels" {...motionProps}>
      {CONTACT_CHANNELS.map((channel, index) => {
        const Icon = CHANNEL_ICONS[channel.id as keyof typeof CHANNEL_ICONS] ?? Mail

        const card = (
          <>
            <span className="contact-channels__icon" aria-hidden="true">
              <Icon strokeWidth={1.75} />
            </span>
            <span className="contact-channels__copy">
              <span className="contact-channels__label">{channel.label}</span>
              <span className="contact-channels__value">{channel.value}</span>
            </span>
          </>
        )

        const itemMotion = prefersReducedMotion
          ? {}
          : {
              initial: { opacity: 0, y: 10 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: '-32px' },
              transition: { duration: 0.32, delay: 0.1 + index * 0.05, ease: EASE },
            }

        if (channel.href) {
          return (
            <motion.a
              key={channel.id}
              className="contact-channels__card contact-channels__card--link"
              href={channel.href}
              {...itemMotion}
            >
              {card}
            </motion.a>
          )
        }

        return (
          <motion.div key={channel.id} className="contact-channels__card" {...itemMotion}>
            {card}
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default ContactChannels

import { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import { motion, useReducedMotion } from 'framer-motion'
import type { CompanyFounder } from '../../constants/companyAbout'

interface CompanyFounderModalProps {
  founder: CompanyFounder
  onClose: () => void
}

function CompanyFounderModal({ founder, onClose }: CompanyFounderModalProps) {
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  return createPortal(
    <div className="company-about__modal-root" role="presentation">
      <motion.button
        type="button"
        className="company-about__modal-backdrop"
        aria-label="Close biography"
        onClick={onClose}
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.28 }}
      />

      <motion.div
        className="company-about__modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="company-about__modal-head">
          <button
            ref={closeRef}
            type="button"
            className="company-about__modal-close"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <div className="company-about__modal-identity">
          <div className="company-about__modal-media">
            <img
              src={founder.photo}
              alt={founder.photoAlt}
              className="company-about__modal-photo"
              width={320}
              height={320}
            />
          </div>
          <div className="company-about__modal-identity-copy">
            <p className="company-about__modal-role">{founder.role}</p>
            <h3 id={titleId} className="company-about__modal-name">
              {founder.name}
            </h3>
          </div>
        </div>

        <div className="company-about__modal-bio">
          {founder.bio.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </motion.div>
    </div>,
    document.body,
  )
}

export default CompanyFounderModal

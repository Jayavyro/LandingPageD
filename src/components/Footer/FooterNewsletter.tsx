import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import {
  FOOTER_NEWSLETTER_SUBTITLE,
  FOOTER_NEWSLETTER_TITLE,
} from '../../constants/footer'
import { submitFormLead } from '../../lib/submitFormLead'
import './FooterNewsletter.css'

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

function FooterNewsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === 'submitting') return

    setStatus('submitting')
    setErrorMessage('')

    const result = await submitFormLead({
      source: 'newsletter',
      workEmail: email,
    })

    if (!result.ok) {
      setStatus('error')
      setErrorMessage(result.error || 'Something went wrong. Please try again.')
      return
    }

    setEmail('')
    setStatus('success')
  }

  return (
    <div className="footer-newsletter">
      <div className="footer-newsletter__copy">
        <h3 className="footer-newsletter__title">{FOOTER_NEWSLETTER_TITLE}</h3>
        <p className="footer-newsletter__subtitle">{FOOTER_NEWSLETTER_SUBTITLE}</p>
      </div>

      <div className="footer-newsletter__form-wrap">
        <form className="footer-newsletter__form" onSubmit={handleSubmit} noValidate>
          <label className="footer-newsletter__field">
            <span className="footer-newsletter__sr-only">Work email</span>
            <input
              type="email"
              name="email"
              placeholder="Enter your work email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                if (status === 'success' || status === 'error') {
                  setStatus('idle')
                }
              }}
              disabled={status === 'submitting'}
            />
          </label>
          <button
            type="submit"
            className="footer-newsletter__submit"
            aria-label="Subscribe"
            disabled={status === 'submitting'}
          >
            <ArrowRight aria-hidden="true" />
          </button>
        </form>

        {status === 'success' ? (
          <p className="footer-newsletter__status footer-newsletter__status--success" role="status">
            You&apos;re on the list — thanks for subscribing.
          </p>
        ) : null}

        {status === 'error' ? (
          <p className="footer-newsletter__status footer-newsletter__status--error" role="alert">
            {errorMessage}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export default FooterNewsletter

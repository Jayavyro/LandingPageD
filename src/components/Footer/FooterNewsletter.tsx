import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import {
  FOOTER_NEWSLETTER_SUBTITLE,
  FOOTER_NEWSLETTER_TITLE,
} from '../../constants/footer'
import './FooterNewsletter.css'

function FooterNewsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <div className="footer-newsletter">
      <div className="footer-newsletter__copy">
        <h3 className="footer-newsletter__title">{FOOTER_NEWSLETTER_TITLE}</h3>
        <p className="footer-newsletter__subtitle">{FOOTER_NEWSLETTER_SUBTITLE}</p>
      </div>

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
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <button type="submit" className="footer-newsletter__submit" aria-label="Subscribe">
          <ArrowRight aria-hidden="true" />
        </button>
      </form>
    </div>
  )
}

export default FooterNewsletter

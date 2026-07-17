import { type FormEvent, useState } from 'react'
import heroBg from '../../ChatGPT Image Jul 9, 2026, 11_48_31 AM.png'
import fivdLogo from '../../695775c397e9ba97edd85611_26faefd428f8a4efc1b4b947dd0a2003_FivD white logo 2.webp'
import { submitFormLead } from '../../lib/submitFormLead'
import './Hero.css'

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

function Hero() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleEmailSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === 'submitting') return

    setStatus('submitting')
    setErrorMessage('')

    const result = await submitFormLead({
      source: 'hero',
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
    <section
      className="hero"
      aria-label="Hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero__content">
        <p className="hero__badge">OPERATING SYSTEM FOR AEC</p>
        
        <h1 className="hero__headline">
          {/* <span className="hero__headline-line">Pursuit to Project</span>
          <span className="hero__headline-line">Planning to Delivery.</span>
          <span className="hero__headline-line hero__headline-line--gradient">
          People to Performance.
           </span> */}
          <span className="hero__headline-line">Run Your Entire AEC Business.</span>
          <span className="hero__headline-line">From Opportunity to Profit.</span>

          <span className="hero__headline-line hero__headline-line--gradient">
          One Platform.
          </span>
        </h1>

        <p className="hero__description">
        AVYRO connects every stage of your AEC business—from winning new work and planning projects to delivering successful outcomes and improving business performance.</p>

        <div className="hero__actions">
          <form className="hero__email-form" onSubmit={handleEmailSubmit}>
            <label htmlFor="hero-email" className="hero__email-label">
              Email address
            </label>
            <input
              id="hero-email"
              type="email"
              name="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                if (status === 'success' || status === 'error') {
                  setStatus('idle')
                }
              }}
              placeholder="Enter your email"
              className="hero__email-input"
              autoComplete="email"
              required
              disabled={status === 'submitting'}
            />
            <button
              type="submit"
              className="hero__cta hero__cta--primary"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending…' : 'Get Started'}
            </button>
          </form>

          {status === 'success' ? (
            <p className="hero__form-status hero__form-status--success" role="status">
              Thanks — we&apos;ll be in touch shortly.
            </p>
          ) : null}

          {status === 'error' ? (
            <p className="hero__form-status hero__form-status--error" role="alert">
              {errorMessage}
            </p>
          ) : null}
        </div>

        <div className="hero__trusted">
          <p className="hero__trusted-label">Trusted by</p>
          <div className="hero__trusted-brand" aria-label="FivD">
            <span className="hero__trusted-icon-wrap">
              <img src={fivdLogo} alt="" className="hero__trusted-icon" />
            </span>
            <span className="hero__trusted-name">fivD</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

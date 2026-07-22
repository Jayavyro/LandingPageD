import { type FormEvent, useState } from 'react'
import { submitFormLead } from '../../lib/submitFormLead'
import './HeroLeadForm.css'

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

function HeroLeadForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
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
    <div className="hero-lead">
      <form className="hero-lead__form" onSubmit={handleSubmit}>
        <label htmlFor="hero-email" className="hero-lead__label">
          Work email
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
          placeholder="Enter your work email"
          className="hero-lead__input"
          autoComplete="email"
          required
          disabled={status === 'submitting'}
        />
        <button
          type="submit"
          className="hero-lead__submit"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Sending…' : 'Book a Demo'}
        </button>
      </form>

      {status === 'success' ? (
        <p className="hero-lead__status hero-lead__status--success" role="status">
          Thanks — we&apos;ll be in touch shortly.
        </p>
      ) : null}

      {status === 'error' ? (
        <p className="hero-lead__status hero-lead__status--error" role="alert">
          {errorMessage}
        </p>
      ) : null}
    </div>
  )
}

export default HeroLeadForm

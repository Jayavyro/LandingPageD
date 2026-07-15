import { useState, type FormEvent } from 'react'
import { CONTACT_PRIVACY_NOTE } from '../../constants/contactUs'
import './ContactForm.css'

interface ContactFormState {
  fullName: string
  companyName: string
  workEmail: string
  phoneNumber: string
  message: string
}

const INITIAL_FORM: ContactFormState = {
  fullName: '',
  companyName: '',
  workEmail: '',
  phoneNumber: '',
  message: '',
}

function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(INITIAL_FORM)

  const updateField = (field: keyof ContactFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setForm(INITIAL_FORM)
  }

  return (
    <div className="contact-form">
      <form className="contact-form__fields" onSubmit={handleSubmit} noValidate>
        <div className="contact-form__row">
          <label className="contact-form__field">
            <span className="contact-form__label">Full Name</span>
            <input
              type="text"
              name="fullName"
              placeholder="Your name"
              autoComplete="name"
              required
              value={form.fullName}
              onChange={(event) => updateField('fullName', event.target.value)}
            />
          </label>

          <label className="contact-form__field">
            <span className="contact-form__label">Company</span>
            <input
              type="text"
              name="companyName"
              placeholder="Company name"
              autoComplete="organization"
              required
              value={form.companyName}
              onChange={(event) => updateField('companyName', event.target.value)}
            />
          </label>
        </div>

        <div className="contact-form__row">
          <label className="contact-form__field">
            <span className="contact-form__label">Work Email</span>
            <input
              type="email"
              name="workEmail"
              placeholder="you@company.com"
              autoComplete="email"
              required
              value={form.workEmail}
              onChange={(event) => updateField('workEmail', event.target.value)}
            />
          </label>

          <label className="contact-form__field">
            <span className="contact-form__label">Phone</span>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone number"
              autoComplete="tel"
              value={form.phoneNumber}
              onChange={(event) => updateField('phoneNumber', event.target.value)}
            />
          </label>
        </div>

        <label className="contact-form__field">
          <span className="contact-form__label">Message</span>
          <textarea
            name="message"
            placeholder="How can we help you?"
            rows={3}
            required
            value={form.message}
            onChange={(event) => updateField('message', event.target.value)}
          />
        </label>

        <div className="contact-form__actions">
          <button type="submit" className="contact-form__submit">
            Submit Request
          </button>
          <p className="contact-form__privacy">{CONTACT_PRIVACY_NOTE}</p>
        </div>
      </form>
    </div>
  )
}

export default ContactForm

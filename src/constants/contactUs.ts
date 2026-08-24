export interface ContactChannel {
  id: string
  label: string
  value: string
  href?: string
}

export const CONTACT_BADGE = 'Contact Us'

export const CONTACT_TITLE = "Let's talk about your firm."

export const CONTACT_SUBTITLE =
  "Book a demo, or send a note and we'll get back to you within a day."

export const CONTACT_OUTCOME_LINE =
  'Tell us your firm size and which modules matter most — Drive, X, or both.'

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: 'founder',
    label: 'Founder',
    value: 'Manas Mehrotra, Co-Founder & CPO',
  },
  {
    id: 'company',
    label: 'Company',
    value: 'Avyro',
  },
  {
    id: 'web',
    label: 'Web',
    value: 'avyro.io',
    href: 'https://avyro.io',
  },
  {
    id: 'email',
    label: 'Email',
    value: 'manas@avyro.io',
    href: 'mailto:manas@avyro.io',
  },
]

export const CONTACT_PRIVACY_NOTE =
  'We respect your privacy. Your information is safe with us.'

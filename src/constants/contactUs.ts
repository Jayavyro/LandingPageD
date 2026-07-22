export interface ContactChannel {
  id: string
  label: string
  value: string
  href?: string
}

export const CONTACT_BADGE = 'Contact Us'

export const CONTACT_TITLE = 'See Your Firm on Avyro'

export const CONTACT_SUBTITLE =
  'Tell us about your firm and we’ll walk you through the platform with your own workflows — projects, timesheets, and billing — so you can judge it on your numbers, not ours.'

export const CONTACT_OUTCOME_LINE =
  'See your firm’s uncaptured revenue in the first 30 minutes.'

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: 'email',
    label: 'Email',
    value: 'sales@avyro.com',
    href: 'mailto:sales@avyro.com',
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '+91 6350 057 275',
    href: 'tel:+916350057275',
  },
  {
    id: 'office',
    label: 'Office Address',
    value: '3rd Floor, Paras Downtown Mall, Zirakpur, Punjab 140603, India',
  },
  {
    id: 'hours',
    label: 'Business Hours',
    value: 'Mon – Fri, 9:30 AM – 6:30 PM (IST)',
  },
]

export const CONTACT_PRIVACY_NOTE =
  'We respect your privacy. Your information is safe with us.'

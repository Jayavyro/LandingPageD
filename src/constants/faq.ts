export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface FaqTrustItem {
  id: string
  title: string
  description: string
}

export const FAQ_SUBTITLE =
  'Everything you need to know about Avyro and how we help AEC firms work smarter.'

export const FAQ_CONTACT_IMAGE =
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80'

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'what-is-avyro',
    question: 'What is Avyro?',
    answer:
      'Avyro is an all-in-one platform built specifically for AEC firms to manage projects, resources, finances, and operations. It helps you streamline workflows, improve collaboration, and deliver projects on time and within budget.',
  },
  {
    id: 'who-is-it-for',
    question: 'Who is Avyro designed for?',
    answer:
      'Avyro is designed for architecture, engineering, and construction firms of all sizes — from growing studios to multi-office enterprises. It supports executives, project managers, finance teams, and operations leaders with role-specific workflows.',
  },
  {
    id: 'how-different',
    question: 'How is Avyro different from Deltek, Procore, or Unanet?',
    answer:
      'Unlike point solutions, Avyro unifies CRM, project delivery, timesheets, billing, and analytics in one connected platform. Smart timesheets map activities to projects using keyword mapping, and AEC-native workflows help firms capture more billable time with less manual effort.',
  },
  {
    id: 'easy-implement',
    question: 'Is Avyro easy to implement?',
    answer:
      'Yes. Avyro is cloud-based and designed for fast rollout with guided onboarding, data migration support, and configurable workflows that match how AEC firms already operate — without lengthy IT projects.',
  },
  {
    id: 'integrations',
    question: 'Can Avyro integrate with our existing tools?',
    answer:
      'Avyro connects with the tools your teams already use — accounting systems, document management, calendars, and more — so data flows across your stack without duplicate entry.',
  },
  {
    id: 'security',
    question: 'How secure is my data with Avyro?',
    answer:
      'Avyro uses enterprise-grade security with encrypted data in transit and at rest, role-based access controls, audit trails, and regular security monitoring to keep your firm\'s data protected.',
  },
  {
    id: 'support',
    question: 'What kind of support does Avyro offer?',
    answer:
      'Avyro provides dedicated onboarding, in-app guidance, documentation, and responsive customer support to help your team adopt the platform and get answers when you need them.',
  },
  {
    id: 'pricing',
    question: 'How is Avyro priced?',
    answer:
      'Avyro offers flexible, scalable pricing based on your firm\'s size and modules needed. Contact our team for a tailored quote that fits your team structure and growth plans.',
  },
]

export const FAQ_TRUST_ITEMS: FaqTrustItem[] = [
  {
    id: 'security',
    title: 'Enterprise-grade security',
    description: 'Your data is safe with us.',
  },
  {
    id: 'cloud',
    title: 'Cloud-based platform',
    description: 'Access anytime, anywhere.',
  },
  {
    id: 'implementation',
    title: 'Quick & easy implementation',
    description: 'Get up and running in no time.',
  },
]

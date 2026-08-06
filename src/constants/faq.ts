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
  'Straight answers for mid-market AEC firms evaluating Avyro Drive and Avyro X.'

export const FAQ_CONTACT_IMAGE =
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80'

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'drive-or-x',
    question: 'Which product is right for us — Drive or X?',
    answer:
      'If you mainly need project tracking, timesheets, and productivity visibility, start with Avyro Drive. If you also need CRM, resource allocation, and billing connected to the same record, that\'s Avyro X. Many firms start with Drive and add X later.',
  },
  {
    id: 'replace-systems',
    question: 'Do we need to replace our existing systems?',
    answer:
      'No. Both products are built to sit alongside your existing CRM, accounting, or ERP tools — you don\'t need to rip anything out to start.',
  },
  {
    id: 'implementation',
    question: 'How long does implementation take?',
    answer:
      'Most firms are live within a few weeks, not months. There are no integration fees, and you don\'t pay until your team is actually using it.',
  },
  {
    id: 'replace-deltek',
    question: 'Does Avyro replace Deltek?',
    answer:
      'Not necessarily. Avyro X runs as a front-office complement alongside Deltek for many firms. See the Deltek Vision Sunset resource for more detail.',
  },
  {
    id: 'firm-size',
    question: 'What size firm is Avyro built for?',
    answer:
      'Avyro is built specifically for mid-market AEC firms — architecture, engineering, and construction practices past the startup stage but not yet running enterprise-scale systems.',
  },
  {
    id: 'pricing',
    question: 'How is pricing structured?',
    answer:
      'We price pilot partners individually based on firm size and which modules you need, rather than publishing a fixed rate card. See pricing above to get a number for your firm.',
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
    title: 'Live in weeks',
    description: 'Get up and running without a months-long IT project.',
  },
]

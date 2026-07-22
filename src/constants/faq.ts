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
  'Straight answers for principals who are done buying another disconnected tool.'

export const FAQ_CONTACT_IMAGE =
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80'

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'what-is-avyro',
    question: 'What is Avyro?',
    answer:
      'Avyro is the AI-native operating system for AEC firms. One platform that runs winning work, staffing, delivery, smart timesheets, billing, and live profit—so every hour and every invoice lives on the same record.',
  },
  {
    id: 'who-is-it-for',
    question: 'Who is Avyro designed for?',
    answer:
      'Architecture, engineering, and construction firms that are tired of stitching CRM, project tools, timesheets, and billing together. Built for principals, operations leaders, PMs, and finance—not generic SaaS checklists.',
  },
  {
    id: 'how-different',
    question: 'How is Avyro different from Deltek, Procore, or Unanet?',
    answer:
      'Those products each own a slice of your firm. Avyro owns the journey: CRM → proposal → project → time → invoice → profit on one connected system. Smart timesheets map real desktop activity to projects, so you capture billable hours competitors leave on the floor — and you stop paying for a Frankenstein stack of licenses.',
  },
  {
    id: 'what-do-we-replace',
    question: 'What do we replace?',
    answer:
      'Most firms replace a patchwork of CRM (Cosential, HubSpot), resourcing (Deltek), timesheets and billing (BQE CORE, spreadsheets), and reporting tools. Avyro runs all of that on one record — so you stop paying for seven subscriptions and stop re-typing data between them.',
  },
  {
    id: 'how-long-go-live',
    question: 'How long does it take to go live?',
    answer:
      'Most AEC firms are running core workflows — CRM, projects, timesheets, and billing — within 4–8 weeks with guided onboarding and data migration support. You start with the modules you need and expand from there.',
  },
  {
    id: 'cost-vs-stack',
    question: 'What does it cost vs our current stack?',
    answer:
      'Avyro typically replaces multiple point tools with one platform — so total software spend often drops even before you count recovered billable hours. Contact our team for a quote mapped to your firm size and modules; we will walk through your current stack side by side.',
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

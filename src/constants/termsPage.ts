import type { LegalHero, LegalSection } from './legalDocument'
import { LEGAL_CONTACT_EMAIL } from './legalDocument'

export const TERMS_ROUTE = '/terms'

export const TERMS_HERO: LegalHero = {
  eyebrow: 'Legal',
  title: 'Terms and Conditions',
  subtitle:
    'These Terms govern your use of Avyro’s software and services for Architecture, Engineering, and Construction (AEC) firms. Please read them carefully before creating an account or accessing the platform.',
  updatedLabel: 'Last updated',
  updatedDate: 'August 12, 2026',
}

export const TERMS_CONTACT_EMAIL = LEGAL_CONTACT_EMAIL

export type { LegalModule as TermsModule, LegalSection as TermsSection } from './legalDocument'

export const TERMS_SECTIONS: LegalSection[] = [
  {
    id: 'acceptance',
    number: '01',
    title: 'Acceptance of Terms',
    paragraphs: [
      'By creating an account or accessing Avyro, you agree to these legally binding terms. These Terms govern your use of Avyro’s software and services.',
    ],
  },
  {
    id: 'services',
    number: '02',
    title: 'Description of Services',
    paragraphs: [
      'Avyro is an AI-native operating system purpose-built for Architecture, Engineering, and Construction (AEC) firms. It helps firms run the whole business — from first lead to final invoice — on one operational record, so teams stop re-entering work across disconnected tools.',
      'Avyro is offered through Avyro Drive and Avyro X, which share the same underlying foundation. Firms may start with either product and expand without rebuilding their data. Avyro’s capabilities include:',
    ],
    modules: [
      {
        title: 'CRM',
        description:
          'Track leads and opportunities from first contact, with the work plan starting on the same record.',
      },
      {
        title: 'Proposals',
        description:
          'Scope and proposals go out from the same record that won the lead — DocuSign-ready, not copy-paste.',
      },
      {
        title: 'Resource Allocation',
        description:
          'See real-time studio bandwidth against won and pipeline work, and staff the right people before the week is wasted.',
      },
      {
        title: 'Smart Timesheets',
        description:
          'Hours log in seconds against the actual project plan, with review-and-approve workflows and a full audit trail.',
      },
      {
        title: 'Project Management',
        description:
          'Track milestones, deliverables, and budget against plan in one view instead of multiple spreadsheets.',
      },
      {
        title: 'Billing & Invoicing',
        description:
          'Generate invoices from approved time and contract terms, and track collections and project profitability in one place.',
      },
      {
        title: 'IT & Asset Management',
        description:
          'Register software seats, licenses, and equipment; assign ownership; and track renewals on the same operational foundation.',
      },
      {
        title: 'Workforce Productivity',
        description:
          'Firm-wide visibility into where time and effort are going, including utilization, bench, and capacity insights.',
      },
    ],
  },
  {
    id: 'responsibilities',
    number: '03',
    title: 'Account and User Responsibilities',
    bullets: [
      'Ensure only authorized users access the platform',
      'Maintain secure credentials and update contact information',
      'Do not misuse, clone, reverse engineer, or harm the service environment',
    ],
  },
  {
    id: 'ownership',
    number: '04',
    title: 'Platform Ownership and Licensing',
    bullets: [
      'All software, branding, features, and documentation are proprietary to Avyro',
      'Clients receive limited usage licenses based on subscription plans and agreements for Avyro Drive, Avyro X, or both',
    ],
  },
  {
    id: 'data',
    number: '05',
    title: 'Data Ownership & Use',
    bullets: [
      'Clients retain ownership of uploaded data',
      'Avyro uses data solely for fulfilling its contractual services',
      'User data is never shared externally without authorization',
    ],
  },
  {
    id: 'termination',
    number: '06',
    title: 'Suspension & Termination',
    bullets: [
      'Avyro may suspend access for violation of these Terms',
      'Either party may terminate service with written notice; final bills and data access terms apply',
    ],
  },
  {
    id: 'disclaimer',
    number: '07',
    title: 'Disclaimer and Limitations',
    bullets: [
      'Avyro provides no warranties for uptime impacted by internet outages or third-party service disruptions',
      'Liability is limited to the scope of the agreement in force',
      'Avyro aims for 99.5% monthly uptime and will provide support responses within 24 hours on business days',
    ],
  },
  {
    id: 'governing-law',
    number: '08',
    title: 'Governing Law',
    paragraphs: [
      'These Terms are governed by the laws of India. If there is any disagreement or legal issue, it will be resolved through arbitration in Gurugram, Haryana, under the Arbitration and Conciliation Act, 1996. The arbitration will be conducted in English, and the final decision will be binding on both parties.',
    ],
  },
  {
    id: 'contact',
    number: '09',
    title: 'Contact Information',
    paragraphs: [
      'For questions or concerns regarding these terms, please contact us at',
    ],
    contactEmail: LEGAL_CONTACT_EMAIL,
  },
]

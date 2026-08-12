import type { LegalHero, LegalSection } from './legalDocument'
import { LEGAL_CONTACT_EMAIL } from './legalDocument'

export const PRIVACY_ROUTE = '/privacy'

export const PRIVACY_HERO: LegalHero = {
  eyebrow: 'Legal',
  title: 'Privacy Policy',
  subtitle:
    'How Avyro collects, uses, protects, and keeps confidential the information entrusted to us by Architecture, Engineering, and Construction (AEC) firms.',
  updatedLabel: 'Last updated',
  updatedDate: 'August 12, 2026',
}

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: 'introduction',
    number: '01',
    title: 'Introduction',
    paragraphs: [
      'This Privacy Policy explains how Avyro (“Avyro,” “we,” “us,” or “our”) handles personal and firm data when you visit our website, contact us, or use Avyro Drive, Avyro X, and related services.',
      'Avyro is an AI-native operating system that helps AEC firms run the whole business — from first lead to final invoice — on one operational record. Protecting that record is part of how we deliver the product.',
    ],
  },
  {
    id: 'scope',
    number: '02',
    title: 'Scope',
    paragraphs: [
      'This Policy covers:',
    ],
    bullets: [
      'Our marketing website and contact, demo, and newsletter forms',
      'Customer accounts and authorized users of Avyro Drive and Avyro X',
      'Operational data your firm uploads or creates in the platform (for example CRM, proposals, resourcing, timesheets, project plans, billing, assets, and productivity insights)',
      'Support communications related to the services',
    ],
  },
  {
    id: 'information-we-collect',
    number: '03',
    title: 'Information We Collect',
    paragraphs: [
      'Depending on how you interact with Avyro, we may collect:',
    ],
    modules: [
      {
        title: 'Account and contact details',
        description:
          'Name, work email, phone, company name, role, and other details you provide when booking a demo, contacting us, or creating a user account.',
      },
      {
        title: 'Firm operational data',
        description:
          'Project, client, staffing, time, billing, asset, and related records your firm chooses to store in Avyro so teams can work from one connected system.',
      },
      {
        title: 'Usage and technical data',
        description:
          'Log data such as IP address, browser type, device information, pages visited, and product interaction events needed to operate, secure, and improve the services.',
      },
      {
        title: 'Support content',
        description:
          'Messages, screenshots, and files you share with us when requesting help or reporting an issue.',
      },
    ],
  },
  {
    id: 'how-we-use',
    number: '04',
    title: 'How We Use Information',
    paragraphs: [
      'We use information only as needed to deliver and improve Avyro, including to:',
    ],
    bullets: [
      'Provide, maintain, and support Avyro Drive, Avyro X, and related services',
      'Authenticate users, enforce role-based access, and keep audit trails for compliance and internal review',
      'Respond to demo requests, sales inquiries, and support tickets',
      'Send service notices and, where permitted, product updates relevant to AEC operations',
      'Monitor reliability, prevent abuse, and strengthen enterprise-grade security',
      'Meet legal, regulatory, and contractual obligations',
    ],
  },
  {
    id: 'ownership',
    number: '05',
    title: 'Data Ownership',
    paragraphs: [
      'Clients retain ownership of the data they upload or create in Avyro. Avyro processes that data to fulfill its contractual services — not to sell it or use it as an independent product.',
      'Your firm decides who may access operational records inside the platform through authorized user accounts and role-based permissions.',
    ],
  },
  {
    id: 'confidentiality',
    number: '06',
    title: 'Data Confidentiality',
    paragraphs: [
      'We treat customer and prospect information as confidential. Firm operational data — including pipeline, project plans, timesheets, billing, utilization, and related records — is handled with care appropriate to business-critical AEC operations.',
    ],
    bullets: [
      'Access to customer environments is limited to authorized personnel who need it to deliver or support the service',
      'We do not share customer data externally without authorization, except where required by law or necessary to provide the contracted service through trusted processors',
      'Employees and contractors with access are bound by confidentiality obligations',
      'We expect customers to keep credentials secure and grant platform access only to authorized users',
    ],
  },
  {
    id: 'protection',
    number: '07',
    title: 'Data Protection & Security',
    paragraphs: [
      'Avyro uses enterprise-grade security so project, time, and financial data stay protected. Our approach includes technical and organizational measures such as:',
    ],
    bullets: [
      'Encryption in transit and at rest',
      'Role-based access controls so users see only what their role requires',
      'Audit trails for key actions to support compliance and internal review',
      'Ongoing monitoring and operational safeguards for the service environment',
      'Alignment with enterprise security practices, including ISO 27001 as referenced on our site',
    ],
  },
  {
    id: 'sharing',
    number: '08',
    title: 'Sharing and Disclosure',
    paragraphs: [
      'We do not sell personal or firm data. We may share information only in these limited cases:',
    ],
    bullets: [
      'With service providers who process data on our behalf to host, secure, or support Avyro, under contractual confidentiality and data-protection obligations',
      'With integrations you choose to enable (for example calendar, finance, or document tools), according to your configuration',
      'When required by law, regulation, legal process, or to protect the rights, safety, and integrity of Avyro, our customers, or others',
      'In connection with a corporate transaction, subject to appropriate confidentiality protections',
    ],
  },
  {
    id: 'retention',
    number: '09',
    title: 'Data Retention',
    paragraphs: [
      'We retain information for as long as needed to provide the services, meet contractual commitments, resolve disputes, and comply with legal obligations.',
      'When a subscription ends, data access and retention follow the applicable agreement, including any export window and deletion timelines agreed with the client.',
    ],
  },
  {
    id: 'rights',
    number: '10',
    title: 'Your Choices and Rights',
    paragraphs: [
      'Depending on applicable law and your relationship with Avyro, you may request access to, correction of, or deletion of personal information we hold about you, or ask us to restrict or object to certain processing.',
      'Account administrators for customer tenants control user access inside Avyro. For personal data requests related to a customer workspace, we may route the request through the relevant firm administrator where appropriate.',
    ],
  },
  {
    id: 'cookies',
    number: '11',
    title: 'Cookies and Website Analytics',
    paragraphs: [
      'Our website may use cookies or similar technologies to operate the site, remember preferences, and understand how visitors use our pages so we can improve the experience.',
      'You can control cookies through your browser settings. Disabling certain cookies may affect site functionality.',
    ],
  },
  {
    id: 'international',
    number: '12',
    title: 'Governing Approach',
    paragraphs: [
      'Avyro is operated with regard to applicable laws in India. Where we transfer or process information across jurisdictions, we apply safeguards consistent with our confidentiality and data-protection commitments and the agreements in force with each client.',
    ],
  },
  {
    id: 'changes',
    number: '13',
    title: 'Changes to This Policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time to reflect product, legal, or operational changes. The “Last updated” date at the top of this page will change when we do. Continued use of the services after an update constitutes acceptance of the revised Policy where permitted by law and contract.',
    ],
  },
  {
    id: 'contact',
    number: '14',
    title: 'Contact Us',
    paragraphs: [
      'For privacy questions, data confidentiality concerns, or data-protection requests, please contact us at',
    ],
    contactEmail: LEGAL_CONTACT_EMAIL,
  },
]

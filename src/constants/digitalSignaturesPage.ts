import {
  Bell,
  FileCheck2,
  FileSignature,
  FolderLock,
  Link2,
  PenLine,
} from 'lucide-react'
import type { ShortFeaturePageContent } from './shortFeaturePage'
import { PRODUCT_ROUTES } from './productRoutes'

import crmProposalsImage from '../avyro-crm-proposals.png'
import digitalSignaturesImage from '../porposalDoc.png'
export const DIGITAL_SIGNATURES_ROUTE = PRODUCT_ROUTES['digital-signatures']

export const DIGITAL_SIGNATURES_PAGE: ShortFeaturePageContent = {
  seo: {
    title: 'Digital Signatures | Avyro for AEC Firms',
    description:
      'Send proposals for signature, track progress in real time, and keep signed agreements on the same project record—so kickoff starts without paperwork delays.',
  },

  hero: {
    eyebrow: 'Digital Signatures',
    headlineBefore: 'Sign, manage, and',
    headlineAccent: 'start projects faster',
    tagline: 'From signed proposal to live project—without email chaos',
    supporting:
      'When a proposal is ready, send it for signature, collect approvals, and keep every client agreement in one place. Track progress as it happens, then move straight from win to kickoff.',
    cta: { label: 'Book a demo', href: '/#contact-us' },
    visual: {
      src: digitalSignaturesImage,
      alt: 'Avyro proposal ready for digital signature and client agreement',
    },
  },

  overview: {
    eyebrow: 'Overview',
    heading: 'Keep every agreement with the project',
    body: 'Proposals and signed contracts stay linked to the client and project—so BD, principals, and PMs all work from the same agreement, not a PDF buried in someone’s inbox.',
    audienceEyebrow: 'Who uses it',
    audienceHeading: 'Who this helps',
    audience: [
      {
        title: 'Business Development',
        body: 'Send proposals, manage signatures, and close opportunities faster.',
      },
      {
        title: 'Clients',
        body: 'Review and sign agreements digitally from anywhere.',
      },
      {
        title: 'Principals & Directors',
        body: 'Approve and countersign with full visibility into status.',
      },
      {
        title: 'Project Managers',
        body: 'Open the signed agreement instantly and start work without waiting on paperwork.',
      },
    ],
  },

  benefits: {
    eyebrow: 'Impact',
    heading: 'What this changes for your firm',
    supporting: 'Less waiting on printed pages and email threads. Faster path from “yes” to kickoff.',
    items: [
      {
        title: 'Close deals faster',
        body: 'Cut delays from manual paperwork and back-and-forth email.',
      },
      {
        title: 'Easier for clients',
        body: 'A simple, secure signing flow they can finish from any device.',
      },
      {
        title: 'Agreements in one place',
        body: 'Find every signed proposal and contract—organized and easy to open.',
      },
      {
        title: 'Faster kickoffs',
        body: 'When signatures are done, teams can start work right away.',
      },
      {
        title: 'Clear status always',
        body: 'Know when a document was sent, viewed, signed, and completed.',
      },
    ],
  },

  features: {
    eyebrow: 'What you can do',
    heading: 'Manage every agreement digitally',
    supporting: 'Send, sign, track, and store—without leaving the project record.',
    items: [
      {
        icon: FileSignature,
        title: 'Send for e-signature',
        body: 'Send proposals for electronic signature in a few clicks.',
      },
      {
        icon: PenLine,
        title: 'Client & firm signatures',
        body: 'Collect client signatures and your internal countersignature on the same path.',
      },
      {
        icon: FileCheck2,
        title: 'Live status tracking',
        body: 'See document status in real time—sent, viewed, signed, or complete.',
      },
      {
        icon: Bell,
        title: 'Instant notifications',
        body: 'Get notified as soon as a document is signed.',
      },
      {
        icon: FolderLock,
        title: 'Secure storage',
        body: 'Keep signed agreements in one secure place the firm can trust.',
      },
      {
        icon: Link2,
        title: 'On the project record',
        body: 'Open any client contract directly from the project—no hunting through email.',
      },
    ],
  },

  screenshot: {
    eyebrow: 'How it flows',
    heading: 'From proposal to project',
    body: 'From signature to kickoff, every agreement stays connected in Avyro.',
    workflow: [
      'Send Proposal',
      'Client Signs',
      'Countersign',
      'Store Agreement',
      'Start the Project',
    ],
    visual: {
      src: crmProposalsImage,
      alt: 'Avyro proposal and agreement workspace connected to the project record',
    },
  },

  finalCta: {
    heading: 'See signature to kickoff on one record',
    supporting:
      'Bring a proposal you recently won. We’ll show how signing, storage, and project start stay connected—without re-entry.',
    cta: { label: 'Book a demo', href: '/#contact-us' },
  },
}

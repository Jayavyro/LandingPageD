import {
  CheckCircle2,
  FileText,
  Layers3,
  LayoutTemplate,
  PencilLine,
  Sparkles,
} from 'lucide-react'
import type { ShortFeaturePageContent } from './shortFeaturePage'
import { PRODUCT_ROUTES } from './productRoutes'
import proposalsImage from '../porposalCreate.png'
import crmProposalsImage from '../avyro-crm-proposals.png'

export const CREATE_PROPOSALS_ROUTE = PRODUCT_ROUTES['create-proposals']

export const CREATE_PROPOSALS_PAGE: ShortFeaturePageContent = {
  seo: {
    title: 'Create Proposals | Avyro for AEC Firms',
    description:
      'Turn approved workplans into client-ready proposals without retyping scope, phases, or fees—then review, share, and win on one record.',
  },

  hero: {
    eyebrow: 'Create Proposals',
    headlineBefore: 'Turn project plans into',
    headlineAccent: 'winning proposals',
    tagline: 'Stop rebuilding the same project in a new document',
    supporting:
      'Your scope, phases, timeline, and budget are already in the workplan. Avyro turns that plan into a client-ready proposal—so your team responds faster and stays accurate.',
    cta: { label: 'Book a demo', href: '/#contact-us' },
    visual: {
      src: proposalsImage,
      alt: 'Avyro proposal editor with document canvas and proposal sections',
    },
  },

  overview: {
    eyebrow: 'Overview',
    heading: 'Proposals from the plan you already built',
    body: 'Skip copy-paste between tools. Generate a professional proposal from your approved workplan, adjust what the client needs to see, and keep everything on the same project record.',
    audienceEyebrow: 'Who uses it',
    audienceHeading: 'Who this helps',
    audience: [
      {
        title: 'Business Development',
        body: 'Create and send proposals quickly so opportunities keep moving.',
      },
      {
        title: 'Project Managers',
        body: 'Check that the proposal matches the scope and plan you already set.',
      },
      {
        title: 'Principals & Studio Leaders',
        body: 'Review and approve proposals before they go to the client.',
      },
      {
        title: 'Marketing Teams',
        body: 'Keep branding and proposal quality consistent across the firm.',
      },
    ],
  },

  benefits: {
    eyebrow: 'Impact',
    heading: 'What this changes for your firm',
    supporting: 'Less document rebuild. More time spent winning the work.',
    items: [
      {
        title: 'Respond faster',
        body: 'Build proposals in minutes instead of starting from a blank page every time.',
      },
      {
        title: 'Stay accurate',
        body: 'Scope, timelines, and budgets match what you already planned—no mismatched versions.',
      },
      {
        title: 'Look consistent',
        body: 'Send polished proposals that feel the same quality every time a client opens them.',
      },
      {
        title: 'Less manual work',
        body: 'Spend less time formatting documents and more time pursuing the project.',
      },
      {
        title: 'Stronger pursuits',
        body: 'Clear, timely proposals help move opportunities forward while interest is high.',
      },
    ],
  },

  features: {
    eyebrow: 'What you can do',
    heading: 'Create professional proposals faster',
    supporting: 'Use the information you already planned—then shape it for the client.',
    items: [
      {
        icon: FileText,
        title: 'Workplan to proposal',
        body: 'Turn an approved workplan into a client-ready proposal without starting over.',
      },
      {
        icon: Layers3,
        title: 'Scope that carries forward',
        body: 'Pull in phases, deliverables, and project details automatically.',
      },
      {
        icon: LayoutTemplate,
        title: 'Reusable templates',
        body: 'Start from firm-standard proposal templates instead of a blank document.',
      },
      {
        icon: PencilLine,
        title: 'Easy customization',
        body: 'Edit the story, fee presentation, and details before you share.',
      },
      {
        icon: CheckCircle2,
        title: 'No retyping',
        body: 'Stop copying the same client and project facts into yet another file.',
      },
      {
        icon: Sparkles,
        title: 'Ready to send',
        body: 'Review, approve, and share from the same connected workflow.',
      },
    ],
  },

  screenshot: {
    eyebrow: 'How it flows',
    heading: 'From planning to proposal',
    body: 'Create proposals faster, with less effort and more confidence.',
    workflow: [
      'Build Workplan',
      'Generate Proposal',
      'Review & Approve',
      'Share with Client',
      'Win the Project',
    ],
    visual: {
      src: crmProposalsImage,
      alt: 'Avyro proposal workspace connected to opportunity and project context',
    },
  },

  finalCta: {
    heading: 'See a proposal built from a real workplan',
    supporting:
      'Bring a pursuit you know. We’ll show how scope and fees become a client-ready proposal—without re-entry.',
    cta: { label: 'Book a demo', href: '/#contact-us' },
  },
}

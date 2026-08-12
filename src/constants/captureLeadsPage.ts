import {
  Activity,
  Building2,
  Inbox,
  Mail,
  Target,
  UserPlus,
} from 'lucide-react'
import type { ShortFeaturePageContent } from './shortFeaturePage'
import { PRODUCT_ROUTES } from './productRoutes'
import opportunityImage from '../Oppututunity.png'

export const CAPTURE_LEADS_ROUTE = PRODUCT_ROUTES['capture-leads']

export type CaptureLeadsPageContent = ShortFeaturePageContent
export type CaptureLeadsBenefit = ShortFeaturePageContent['benefits']['items'][number]
export type CaptureLeadsFeature = ShortFeaturePageContent['features']['items'][number]
export type CaptureLeadsAudience = ShortFeaturePageContent['overview']['audience'][number]

export const CAPTURE_LEADS_PAGE: ShortFeaturePageContent = {
  seo: {
    title: 'Capture Every Opportunity | Avyro Capture Leads',
    description:
      'Bring every AEC lead into one connected workspace. Capture, organize, and convert opportunities—then carry the same record into proposals and delivery.',
  },

  hero: {
    eyebrow: 'Capture Leads',
    headlineBefore: 'Capture every',
    headlineAccent: 'opportunity',
    tagline: 'Turn every conversation into your next project',
    supporting:
      'Architecture and engineering firms receive leads from referrals, websites, emails, phone calls, networking events, and repeat clients. Without a centralized process, opportunities get lost, follow-ups are delayed, and valuable projects slip away.',
    cta: { label: 'Book a demo', href: '/#contact-us' },
    visual: {
      src: opportunityImage,
      alt: 'Avyro opportunities board with pursuits by status, value, and owner',
    },
  },

  overview: {
    eyebrow: 'Overview',
    heading: 'One connected workspace for every lead',
    body: 'Avyro brings every lead into one connected workspace, helping your team capture, organize, and convert opportunities with confidence—on the same operational record that becomes budget, proposal, and project.',
    audienceEyebrow: 'Who uses it',
    audienceHeading: 'Built for the people who win work',
    audience: [
      {
        title: 'Business Development',
        body: 'Capture new opportunities, qualify leads, and manage the sales pipeline.',
      },
      {
        title: 'Marketing',
        body: 'Track campaign performance and see where quality leads originate.',
      },
      {
        title: 'Principals & Directors',
        body: 'Monitor pipeline health, forecast future work, and make informed decisions.',
      },
      {
        title: 'Project Managers',
        body: 'See upcoming projects before they are awarded—and prepare delivery teams.',
      },
    ],
  },

  benefits: {
    eyebrow: 'Impact',
    heading: 'Impact on your business',
    supporting:
      'Instead of managing leads across spreadsheets, emails, and disconnected tools, your firm gets a streamlined sales process.',
    items: [
      {
        title: 'Never miss an opportunity',
        body: 'Every lead is captured, assigned, and tracked from the first interaction.',
      },
      {
        title: 'Faster response times',
        body: 'Teams follow up quickly while opportunities are still active.',
      },
      {
        title: 'Better team visibility',
        body: 'Everyone knows who owns each lead, its status, and the next action.',
      },
      {
        title: 'More consistent pipeline',
        body: 'Standardized workflows ensure every opportunity follows the same process.',
      },
      {
        title: 'Higher win rates',
        body: 'Better organization and timely follow-ups help convert more prospects into projects.',
      },
    ],
  },

  features: {
    eyebrow: 'Capabilities',
    heading: 'Capture leads from anywhere',
    supporting:
      'No matter where a potential client comes from, Avyro helps your team record and manage every opportunity in one place.',
    items: [
      {
        icon: Mail,
        title: 'Any source',
        body: 'Capture leads from email, website forms, referrals, events, or manual entry.',
      },
      {
        icon: Building2,
        title: 'Central client records',
        body: 'Store all client, company, and project information in one place.',
      },
      {
        icon: UserPlus,
        title: 'Instant ownership',
        body: 'Assign owners and responsibilities the moment a lead lands.',
      },
      {
        icon: Activity,
        title: 'Tracked interactions',
        body: 'Track every interaction and follow-up on the opportunity.',
      },
      {
        icon: Target,
        title: 'Nothing slips away',
        body: 'Keep promising opportunities visible until they convert—or close cleanly.',
      },
      {
        icon: Inbox,
        title: 'One firm workspace',
        body: 'Stop chasing leads across inboxes and spreadsheets.',
      },
    ],
  },

  screenshot: {
    eyebrow: 'Workflow',
    heading: 'From first contact to winning the project',
    body: 'Avyro connects your entire opportunity lifecycle on one record.',
    workflow: [
      'Capture Lead',
      'Qualify Opportunity',
      'Assign Owner',
      'Track Activities',
      'Build Proposal',
      'Win the Project',
    ],
    visual: {
      src: opportunityImage,
      alt: 'Avyro opportunities board with pursuits by status, value, and owner',
    },
  },

  finalCta: {
    heading: 'One connected workflow. Every lead accounted for.',
    supporting:
      'See how Capture Leads turns conversations into pursuits—and pursuits into projects—without missed follow-ups.',
    cta: { label: 'Book a demo', href: '/#contact-us' },
  },
}

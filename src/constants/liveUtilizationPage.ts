import {
  Activity,
  CalendarRange,
  Gauge,
  Scale,
  Users,
  Workflow,
} from 'lucide-react'
import type { ShortFeaturePageContent } from './shortFeaturePage'
import { PRODUCT_ROUTES } from './productRoutes'
import myTeamImage from '../myteam.png'

export const LIVE_UTILIZATION_ROUTE = PRODUCT_ROUTES['live-utilization']

export const LIVE_UTILIZATION_PAGE: ShortFeaturePageContent = {
  seo: {
    title: 'Live Utilization & Occupancy | Avyro for AEC Firms',
    description:
      'See who’s overloaded and who’s free across every project—balance workloads, prevent burnout, and staff upcoming work with live capacity visibility.',
  },

  hero: {
    eyebrow: 'Live Utilization & Occupancy',
    headlineBefore: 'Optimize your team before',
    headlineAccent: 'bottlenecks happen',
    tagline: 'See who’s overloaded—and who’s free—before the week breaks',
    supporting:
      'Knowing who’s overbooked and who has capacity is how firms deliver on time. Avyro shows live utilization and occupancy so you can balance workloads, prevent burnout, and make smarter staffing decisions across every project.',
    cta: { label: 'Book a demo', href: '/#contact-us' },
    visual: {
      src: myTeamImage,
      alt: 'Avyro team utilization view with occupancy, bench capacity, and available hours',
    },
  },

  overview: {
    eyebrow: 'Overview',
    heading: 'Monitor team capacity in real time',
    body: 'Stay ahead of staffing problems before they hit delivery. See planned vs. actual allocation, rebalance work with confidence, and plan capacity from upcoming projects—on the same record as staffing and time.',
    audienceEyebrow: 'Who uses it',
    audienceHeading: 'Who this helps',
    audience: [
      {
        title: 'Operations Teams',
        body: 'Balance workloads and keep staffing healthy across the firm.',
      },
      {
        title: 'Project Managers',
        body: 'Assign work based on who’s available and what the project needs.',
      },
      {
        title: 'Studio Leaders & Principals',
        body: 'Watch utilization trends and make clearer staffing decisions.',
      },
      {
        title: 'Resource Managers',
        body: 'Plan capacity and align teams with upcoming project demand.',
      },
    ],
  },

  benefits: {
    eyebrow: 'Impact',
    heading: 'What this changes for your firm',
    supporting: 'Fewer surprise crunch weeks. More balanced, billable capacity.',
    items: [
      {
        title: 'Better use of the team',
        body: 'Keep people productively engaged without overloading individuals.',
      },
      {
        title: 'Prevent burnout',
        body: 'Spot capacity issues early and spread work more evenly.',
      },
      {
        title: 'Stronger delivery',
        body: 'Make sure every project has the right people at the right time.',
      },
      {
        title: 'More billable capacity',
        body: 'Reduce idle time and improve how the workforce is used.',
      },
      {
        title: 'Clearer planning',
        body: 'Staff from live availability and upcoming demand—not last month’s guess.',
      },
    ],
  },

  features: {
    eyebrow: 'What you can do',
    heading: 'Live capacity across the studio',
    supporting: 'See the full picture before you commit to more work.',
    items: [
      {
        icon: Gauge,
        title: 'Utilization across projects',
        body: 'View team utilization across all active work in one place.',
      },
      {
        icon: Users,
        title: 'Overloaded vs. available',
        body: 'Identify who’s overbooked and who still has capacity.',
      },
      {
        icon: Activity,
        title: 'Planned vs. actual',
        body: 'Compare planned staffing to what’s really happening.',
      },
      {
        icon: Scale,
        title: 'Rebalance with confidence',
        body: 'Shift workloads when someone is overloaded—before deadlines slip.',
      },
      {
        icon: CalendarRange,
        title: 'Plan future capacity',
        body: 'Look ahead at upcoming work and staff before the crunch.',
      },
      {
        icon: Workflow,
        title: 'Connected to staffing & time',
        body: 'Utilization stays linked to assignments and submitted hours.',
      },
    ],
  },

  screenshot: {
    eyebrow: 'How it flows',
    heading: 'From capacity to delivery',
    body: 'Keep every team member productive, every project staffed, and every deadline on track.',
    workflow: [
      'Monitor Utilization',
      'Find Capacity Gaps',
      'Rebalance Work',
      'Optimize Workloads',
      'Deliver Efficiently',
    ],
    visual: {
      src: myTeamImage,
      alt: 'Avyro team utilization view with occupancy, bench capacity, and available hours',
    },
  },

  finalCta: {
    heading: 'See who’s free—and who’s overloaded—live',
    supporting:
      'Bring a busy week. We’ll show how utilization and occupancy help you rebalance before delivery slips.',
    cta: { label: 'Book a demo', href: '/#contact-us' },
  },
}

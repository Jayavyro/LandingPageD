import {
  AlertTriangle,
  CalendarCheck,
  FolderKanban,
  Gauge,
  Link2,
  LayoutDashboard,
} from 'lucide-react'
import type { ShortFeaturePageContent } from './shortFeaturePage'
import { PRODUCT_ROUTES } from './productRoutes'
import workPlansImage from '../assets/one-record/one-record-work-plans.png'
import workplanHero from '../Workplan.png'
import gantchart from '../gantt char.png'
export const TRACK_PROJECTS_ROUTE = PRODUCT_ROUTES['track-projects']

export const TRACK_PROJECTS_PAGE: ShortFeaturePageContent = {
  seo: {
    title: 'Track Projects | Avyro for AEC Firms',
    description:
      'See progress, milestones, budgets, and project health in one place—so teams spot risks early and keep delivery on track without chasing updates.',
  },

  hero: {
    eyebrow: 'Track Projects',
    headlineBefore: 'Stay on top of',
    headlineAccent: 'every project',
    tagline: 'Real-time visibility without chasing updates',
    supporting:
      'Managing multiple projects shouldn’t mean chasing status in chats and spreadsheets. Avyro shows progress, milestones, budgets, and project health in one place—so you spot risks early and keep delivery moving.',
    cta: { label: 'Book a demo', href: '/#contact-us' },
    visual: {
      src: gantchart,
      alt: 'Avyro project tracking view with phases, milestones, and progress',
    },
  },

  overview: {
    eyebrow: 'Overview',
    heading: 'Monitor every project in one place',
    body: 'See how work is going as it happens—across one project or the whole portfolio. Schedules, milestones, and budgets stay on the same record from planning through delivery.',
    audienceEyebrow: 'Who uses it',
    audienceHeading: 'Who this helps',
    audience: [
      {
        title: 'Project Managers',
        body: 'Watch progress, milestones, and upcoming work without rebuilding a status report.',
      },
      {
        title: 'Operations Teams',
        body: 'See project health and catch schedule or staffing risks early.',
      },
      {
        title: 'Principals & Studio Leaders',
        body: 'Get a clear view of performance across the whole portfolio.',
      },
      {
        title: 'Executives',
        body: 'Understand how projects are performing and make decisions from live information.',
      },
    ],
  },

  benefits: {
    eyebrow: 'Impact',
    heading: 'What this changes for your firm',
    supporting: 'Less status hunting. More time fixing what matters.',
    items: [
      {
        title: 'Full project visibility',
        body: 'Know where every project stands—without chasing updates.',
      },
      {
        title: 'Earlier decisions',
        body: 'Spot risks and delays while you can still do something about them.',
      },
      {
        title: 'Better team alignment',
        body: 'Everyone works from the same project information—not different versions.',
      },
      {
        title: 'On-time delivery',
        body: 'Watch progress continuously and keep work moving forward.',
      },
      {
        title: 'Stronger client confidence',
        body: 'Deliver with clearer updates and fewer last-minute surprises.',
      },
    ],
  },

  features: {
    eyebrow: 'What you can do',
    heading: 'See performance as work happens',
    supporting: 'A complete view of project progress—without a separate tracking tool.',
    items: [
      {
        icon: Gauge,
        title: 'Live progress',
        body: 'Track project progress in real time as the team works.',
      },
      {
        icon: CalendarCheck,
        title: 'Milestones & deadlines',
        body: 'Monitor phases, milestones, and due dates in one view.',
      },
      {
        icon: LayoutDashboard,
        title: 'Portfolio status',
        body: 'See project status across the whole firm—not one job at a time.',
      },
      {
        icon: AlertTriangle,
        title: 'Early risk signals',
        body: 'Identify delays and bottlenecks before they derail delivery.',
      },
      {
        icon: Link2,
        title: 'Connected from plan to delivery',
        body: 'Keep project data linked from planning through closeout.',
      },
      {
        icon: FolderKanban,
        title: 'One project home',
        body: 'Open schedules, status, and context from the same project record.',
      },
    ],
  },

  screenshot: {
    eyebrow: 'How it flows',
    heading: 'From kickoff to completion',
    body: 'Stay connected to every project, every milestone, and every outcome.',
    workflow: [
      'Start Project',
      'Track Progress',
      'Monitor Milestones',
      'Resolve Risks',
      'Deliver Successfully',
    ],
    visual: {
      src: workplanHero,
      alt: 'Avyro workplan showing project stages and delivery progress',
    },
  },

  finalCta: {
    heading: 'See your projects in one live view',
    supporting:
      'Bring a portfolio snapshot. We’ll show how progress, milestones, and risks stay visible—without rebuilding status for every meeting.',
    cta: { label: 'Book a demo', href: '/#contact-us' },
  },
}

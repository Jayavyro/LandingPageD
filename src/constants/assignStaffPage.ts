import {
  CalendarClock,
  Layers3,
  RefreshCw,
  Scale,
  UserCheck,
  Users,
} from 'lucide-react'
import type { ShortFeaturePageContent } from './shortFeaturePage'
import { PRODUCT_ROUTES } from './productRoutes'
import workplanHero from '../Workplan.png'
import AssignTask from '../AssignTask copy.png';
export const ASSIGN_STAFF_ROUTE = PRODUCT_ROUTES['assign-staff']

export const ASSIGN_STAFF_PAGE: ShortFeaturePageContent = {
  seo: {
    title: 'Assign Staff | Avyro for AEC Firms',
    description:
      'Match the right people to the right project phases against the workplan—balance workloads, avoid overbooking, and keep projects on schedule.',
  },

  hero: {
    eyebrow: 'Assign Staff',
    headlineBefore: 'Put the right people',
    headlineAccent: 'on the right work',
    tagline: 'Match people to phases against the plan',
    supporting:
      'Projects stay on track when the right people are assigned at the right time. Avyro helps you match team members to project phases based on role, availability, and planned hours—so work stays balanced.',
    cta: { label: 'Book a demo', href: '/#contact-us' },
    visual: {
      src: AssignTask,
      alt: 'Avyro staffing view with people assigned across project phases',
    },
  },

  overview: {
    eyebrow: 'Overview',
    heading: 'Assign from the workplan—not a separate spreadsheet',
    body: 'Staff the project directly from the plan you already built. Put people on phases and tasks, see who’s free or overloaded, and update assignments as needs change—on the same record as budgets, time, and billing.',
    audienceEyebrow: 'Who uses it',
    audienceHeading: 'Who this helps',
    audience: [
      {
        title: 'Project Managers',
        body: 'Assign staff, manage workloads, and adjust people as the project changes.',
      },
      {
        title: 'Operations Teams',
        body: 'See team capacity across projects and keep workloads balanced.',
      },
      {
        title: 'Studio Leaders & Principals',
        body: 'Make sure staffing matches business priorities and project commitments.',
      },
      {
        title: 'Team Members',
        body: 'Know what you’re assigned to, what’s coming next, and who owns each phase.',
      },
    ],
  },

  benefits: {
    eyebrow: 'Impact',
    heading: 'What this changes for your firm',
    supporting: 'Fewer overbooked weeks. Clearer ownership from day one.',
    items: [
      {
        title: 'Smarter staffing',
        body: 'Put the right people on the right work—not whoever happens to be free in a chat thread.',
      },
      {
        title: 'Balanced workloads',
        body: 'Spot overbooking early and spread work more evenly across the studio.',
      },
      {
        title: 'Clear ownership',
        body: 'See who is responsible for every phase and deliverable.',
      },
      {
        title: 'More predictable delivery',
        body: 'Planned staffing helps projects stay on schedule.',
      },
      {
        title: 'Better collaboration',
        body: 'Everyone starts with clear ownership—less confusion about who does what.',
      },
    ],
  },

  features: {
    eyebrow: 'What you can do',
    heading: 'Assign people with confidence',
    supporting: 'Allocate your team directly from the project workplan.',
    items: [
      {
        icon: Layers3,
        title: 'Assign by phase & task',
        body: 'Put staff on project phases and tasks from the same plan.',
      },
      {
        icon: UserCheck,
        title: 'Match roles to the work',
        body: 'Assign people based on roles and responsibilities—not guesswork.',
      },
      {
        icon: CalendarClock,
        title: 'Plan before kickoff',
        body: 'Set workloads before work begins so the week isn’t a surprise.',
      },
      {
        icon: Scale,
        title: 'Balance across projects',
        body: 'See capacity across multiple jobs and avoid stacking the same people.',
      },
      {
        icon: RefreshCw,
        title: 'Update as needs change',
        body: 'Shift assignments when scope or timing shifts—without rebuilding a spreadsheet.',
      },
      {
        icon: Users,
        title: 'One shared staffing view',
        body: 'PMs, operations, and principals work from the same staffing picture.',
      },
    ],
  },

  screenshot: {
    eyebrow: 'How it flows',
    heading: 'From planning to execution',
    body: 'Keep every project staffed with the right people from day one.',
    workflow: [
      'Build Workplan',
      'Assign Staff',
      'Balance Workloads',
      'Do the Work',
      'Deliver on Time',
    ],
    visual: {
      src: workplanHero,
      alt: 'Avyro workplan connected to staffing assignments by phase',
    },
  },

  finalCta: {
    heading: 'See staffing against a real workplan',
    supporting:
      'Bring a project you know. We’ll show how phases, people, and capacity stay on one plan—without a separate staffing file.',
    cta: { label: 'Book a demo', href: '/#contact-us' },
  },
}

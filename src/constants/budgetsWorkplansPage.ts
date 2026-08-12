import {
  CalendarRange,
  ChartGantt,
  ClipboardList,
  Layers3,
  Link2,
  Users,
} from 'lucide-react'
import type { ShortFeaturePageContent } from './shortFeaturePage'
import { PRODUCT_ROUTES } from './productRoutes'
import budgetsWorkplanImage from '../Budget&Workplan.png'

export const BUDGETS_WORKPLANS_ROUTE = PRODUCT_ROUTES['budgets-workplans']

export const BUDGETS_WORKPLANS_PAGE: ShortFeaturePageContent = {
  seo: {
    title: 'Build Budgets & Workplans | Avyro for AEC Firms',
    description:
      'Plan fees, phases, and staffing before work starts—then keep that same plan connected through delivery, time, and billing.',
  },

  hero: {
    eyebrow: 'Budgets & Workplans',
    headlineBefore: 'Build budgets',
    headlineAccent: '& workplans',
    tagline: 'Plan the project before anyone starts drawing',
    supporting:
      'Know the fee, the phases, and who does what—before the project kicks off. Avyro helps you build a clear budget and workplan your whole team can follow.',
    cta: { label: 'Book a demo', href: '/#contact-us' },
    visual: {
      src: budgetsWorkplanImage,
      alt: 'Avyro Budgets & Workplans with Gantt timeline and phase budgeting',
    },
  },

  overview: {
    eyebrow: 'Overview',
    heading: 'A clear plan before day one',
    body: 'Set the budget, break the project into phases, put people on the work, and keep that plan in the same place as proposals, timesheets, and billing—so nobody rebuilds it later.',
    audienceEyebrow: 'Who uses it',
    audienceHeading: 'Who this helps',
    audience: [
      {
        title: 'Project Managers',
        body: 'Build the plan, assign work, and check progress against what you promised.',
      },
      {
        title: 'Operations Teams',
        body: 'See who’s overloaded and who’s free across projects—before you take on more work.',
      },
      {
        title: 'Finance Teams',
        body: 'Review project budgets and compare what you planned to what you’re spending.',
      },
      {
        title: 'Principals & Studio Leaders',
        body: 'Approve fees and plans, and see whether projects are on track to make money.',
      },
    ],
  },

  benefits: {
    eyebrow: 'Impact',
    heading: 'What this changes for your firm',
    supporting: 'Less guesswork at kickoff. Fewer surprises halfway through.',
    items: [
      {
        title: 'Clearer kickoffs',
        body: 'Every project starts with a budget, a timeline, and clear owners—not a blank spreadsheet.',
      },
      {
        title: 'Right people, sooner',
        body: 'Staff the work before the week fills up—so the right roles are on the right phases.',
      },
      {
        title: 'Catch overruns early',
        body: 'Compare the plan to real progress while you can still fix course—not after the fee is gone.',
      },
      {
        title: 'Fewer late surprises',
        body: 'A shared workplan keeps teams aligned on dates and deliverables.',
      },
      {
        title: 'Healthier project margins',
        body: 'Better planning up front means fewer budget overruns later.',
      },
    ],
  },

  features: {
    eyebrow: 'What you can do',
    heading: 'Everything you need to plan the work',
    supporting: 'Simple tools for how AEC firms actually set up a project.',
    items: [
      {
        icon: Layers3,
        title: 'Budget by phase',
        body: 'Split the fee across SD, DD, CD, and other phases—so the money matches the work.',
      },
      {
        icon: ClipboardList,
        title: 'Phases, tasks & milestones',
        body: 'Break the project into clear steps and checkpoints everyone can see.',
      },
      {
        icon: CalendarRange,
        title: 'Estimate the hours',
        body: 'Plan how much time each phase needs before you assign the team.',
      },
      {
        icon: Users,
        title: 'Assign the team',
        body: 'Put people on planned work so staffing matches the budget.',
      },
      {
        icon: Link2,
        title: 'One plan that stays linked',
        body: 'Budgets and workplans stay connected as the project moves forward—no separate copies.',
      },
      {
        icon: ChartGantt,
        title: 'Ready for delivery',
        body: 'The same plan feeds staffing, timesheets, and billing—without retyping it.',
      },
    ],
  },

  screenshot: {
    eyebrow: 'How it flows',
    heading: 'From plan to finished project',
    body: 'One plan that stays with the project from kickoff to closeout.',
    workflow: [
      'Create Budget',
      'Build Workplan',
      'Assign People',
      'Do the Work',
      'Track Progress',
      'Finish on Budget',
    ],
    visual: {
      src: budgetsWorkplanImage,
      alt: 'Avyro Budgets & Workplans with Gantt timeline and phase budgeting',
    },
  },

  finalCta: {
    heading: 'See a real project plan in Avyro',
    supporting:
      'Bring a project you know. We’ll show how budget, phases, and staffing stay on one plan—from kickoff to billing.',
    cta: { label: 'Book a demo', href: '/#contact-us' },
  },
}

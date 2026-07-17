import type { LucideIcon } from 'lucide-react'
import {
  ArrowRightLeft,
  CalendarRange,
  ChartGantt,
  Clock,
  FileCheck2,
  Layers3,
  Route,
  Users,
} from 'lucide-react'
import { PRODUCT_ROUTES } from './productRoutes'
import activityTimesheetVideo from '../Activity_timesheet.mp4'
import projectGanttVideo from '../Project_Gant.mp4'
import timesheetHero from '../Screenshot 2026-07-14 154441.png'
import workplanHero from '../Workplan.png'

export type FeatureId = 'auto-mapping' | 'gantt-chart'

export interface FeatureProblem {
  title: string
  description: string
}

export interface FeatureStep {
  title: string
  description: string
}

export interface FeatureCapability {
  icon: LucideIcon
  title: string
  description: string
}

export interface FeatureOutcome {
  title: string
  description: string
}

export interface FeatureFaq {
  question: string
  answer: string
}

export interface FeaturePageContent {
  id: FeatureId
  parentModule: string
  parentHref: string
  eyebrow: string
  headline: string
  headlineAccent: string
  subtitle: string
  heroCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  heroImage: { src: string; alt: string }
  showcase: {
    title: string
    body: string
    videoSrc: string
    poster?: string
  }
  pullQuote: string
  problemTitle: string
  problemIntro: string
  problems: FeatureProblem[]
  stepsEyebrow: string
  stepsTitle: string
  steps: FeatureStep[]
  capabilitiesEyebrow: string
  capabilitiesTitle: string
  capabilitiesIntro: string
  capabilities: FeatureCapability[]
  outcomes: FeatureOutcome[]
  workflowTitle: string
  workflowBody: string
  workflowFlow: string[]
  faqs: FeatureFaq[]
  related: { label: string; href: string }[]
}

export const FEATURE_PAGES: Record<FeatureId, FeaturePageContent> = {
  'auto-mapping': {
    id: 'auto-mapping',
    parentModule: 'Smart Timesheets',
    parentHref: PRODUCT_ROUTES.timesheets,
    eyebrow: 'Smart Timesheets · Feature',
    headline: 'Hours that find the',
    headlineAccent: 'right project',
    subtitle:
      'Auto-mapping uses keyword mapping to route timesheet entries to the correct project and phase—no manual tagging, no code hunting, and no Friday reconstruction from memory.',
    heroCta: { label: 'Book a demo', href: '/#contact-us' },
    secondaryCta: { label: 'Full Smart Timesheets module', href: PRODUCT_ROUTES.timesheets },
    heroImage: {
      src: timesheetHero,
      alt: 'Timesheet entries mapped to projects using keyword rules',
    },
    showcase: {
      title: 'See activity become a timesheet',
      body:
        'Work logged in Activity Tracker flows into Smart Timesheets with keyword mapping applied—staff review what is already close, not rebuild the week from scratch.',
      videoSrc: activityTimesheetVideo,
      poster: timesheetHero,
    },
    pullQuote:
      'Smart Timesheets work when rules are explicit—not when software guesses where hours belong.',
    problemTitle: 'Why timesheets stay late and wrong',
    problemIntro:
      'Most AEC firms do not have a timesheet problem—they have a routing problem. Hours exist; they just land on the wrong project or never get submitted.',
    problems: [
      {
        title: 'Wrong project codes',
        description:
          'Staff pick the nearest code under pressure. Finance discovers misallocated hours after payroll—not during the week when fixes are easy.',
      },
      {
        title: 'Friday reconstruction',
        description:
          'Without daily capture, timesheets become archaeology: calendar invites, memory, and guesswork assembled at the last minute.',
      },
      {
        title: 'Billable time left behind',
        description:
          'When submission is painful, small tasks and internal coordination never make it to the sheet—margin quietly erodes.',
      },
    ],
    stepsEyebrow: 'How it works',
    stepsTitle: 'Three steps from activity to approved hours',
    steps: [
      {
        title: 'Capture work during the week',
        description:
          'Activity Tracker logs meaningful work blocks on projects as they happen—the record exists before anyone opens a timesheet.',
      },
      {
        title: 'Keyword mapping routes entries',
        description:
          'Your firm defines keyword rules per project, phase, or practice area. Auto-mapping applies them so entries land on the right job.',
      },
      {
        title: 'Review, approve, bill',
        description:
          'Staff confirm—not reconstruct. Managers approve through workflows; mapped hours move toward Billing & Invoice without a second pass.',
      },
    ],
    capabilitiesEyebrow: 'Built for AEC operations',
    capabilitiesTitle: 'Keyword mapping your firm controls',
    capabilitiesIntro:
      'Not AI-assisted entry. Not conversational guessing. Rules you define, applied consistently every week.',
    capabilities: [
      {
        icon: Route,
        title: 'Rules-based routing',
        description:
          'Map activity text and project keywords to jobs and phases. One ruleset per studio, project type, or delivery model.',
      },
      {
        icon: Clock,
        title: 'Fed by Activity Tracker',
        description:
          'Auto-mapping starts from work already logged. Submission is confirmation of a record—not a blank grid at 4pm Friday.',
      },
      {
        icon: FileCheck2,
        title: 'Approval-ready records',
        description:
          'Cleaner submissions mean managers review instead of chase. Approval Workflows sign off before hours hit billing.',
      },
      {
        icon: Layers3,
        title: 'Connected to billing',
        description:
          'Mapped hours flow into Billing & Invoice on the same platform—no export, re-key, or email thread reconciliation.',
      },
    ],
    outcomes: [
      {
        title: 'Less code hunting',
        description: 'Staff spend time confirming entries, not searching dropdowns for the right project.',
      },
      {
        title: 'Managers review, not chase',
        description: 'Submission quality improves when mapping does the heavy lifting upstream.',
      },
      {
        title: 'Finance trusts the chain',
        description: 'Activity → mapping → approval → billing stays on one auditable path.',
      },
    ],
    workflowTitle: 'Upstream of every invoice line',
    workflowBody:
      'Auto-mapping sits between how your team works during the week and how finance closes the month.',
    workflowFlow: ['Activity Tracker', 'Keyword mapping', 'Smart Timesheets', 'Billing & Invoice'],
    faqs: [
      {
        question: 'Is auto-mapping AI-assisted or conversational?',
        answer:
          'No. Auto-mapping uses keyword mapping—a rules-based approach your firm controls. Activities match to projects from keywords and rules you define, not chat-style or AI-guessed entry.',
      },
      {
        question: 'Can mapping rules differ by office or project type?',
        answer:
          'Yes. Configure keyword rules per project, phase, or practice area so routing reflects how each team labels work.',
      },
      {
        question: 'Does Activity Tracker have to be used first?',
        answer:
          'Activity Tracker is the upstream source Smart Timesheets are designed around. Firms get the best results when capture happens during the week—not only at submission time.',
      },
    ],
    related: [
      { label: 'Activity Tracker', href: PRODUCT_ROUTES.activity },
      { label: 'Smart Timesheets', href: PRODUCT_ROUTES.timesheets },
      { label: 'Billing & Invoice', href: PRODUCT_ROUTES.billing },
    ],
  },
  'gantt-chart': {
    id: 'gantt-chart',
    parentModule: 'Resource Allocation',
    parentHref: PRODUCT_ROUTES.resource,
    eyebrow: 'Resource Scheduler · Feature',
    headline: 'Gantt planning your',
    headlineAccent: 'PMs maintain',
    subtitle:
      'Plan phases, milestones, and staffing on a visual Gantt chart built for AEC delivery—so capacity reflects reality before deadlines slip.',
    heroCta: { label: 'Book a demo', href: '/#contact-us' },
    secondaryCta: { label: 'Full Resource Allocation module', href: PRODUCT_ROUTES.resource },
    heroImage: {
      src: workplanHero,
      alt: 'Gantt workplan with project stages, milestones, and weekly timeline',
    },
    showcase: {
      title: 'Watch staffing connect to delivery',
      body:
        'See how Gantt timelines, assignments, and capacity views stay in the same platform as time capture—so planned effort and actual hours tell one story.',
      videoSrc: projectGanttVideo,
      poster: workplanHero,
    },
    pullQuote:
      'Architecture and engineering firms rarely fail for lack of a Gantt template—they fail because staffing plans update after overload already happened.',
    problemTitle: 'When schedules live outside delivery',
    problemIntro:
      'A chart in one file and hours in another means principals ask for capacity and PMs need a day to compile an answer that is already stale.',
    problems: [
      {
        title: 'Plans divorced from time',
        description:
          'Gantt updates manually while submitted hours tell a different story. Variance shows up at month-end—not mid-week when you could still adjust.',
      },
      {
        title: 'Overload discovered late',
        description:
          'Nobody sees a designer triple-booked until the week is broken. Staffing spreadsheets hide conflicts until someone misses a deadline.',
      },
      {
        title: 'Capacity answers take days',
        description:
          'Operations and principals wait on PMs to assemble utilization from files that were wrong before the request arrived.',
      },
    ],
    stepsEyebrow: 'How it works',
    stepsTitle: 'From won work to a staffed plan',
    steps: [
      {
        title: 'Map phases on a timeline',
        description:
          'Lay out SD, DD, CD, and delivery on a Gantt view built for design and engineering projects—not a generic task list.',
      },
      {
        title: 'Assign people to capacity',
        description:
          'Staff roles across concurrent projects. See workload build by person and phase before committing to new pursuits.',
      },
      {
        title: 'Compare plan to actuals',
        description:
          'When Gantt staffing sits beside Activity Tracker and Smart Timesheets, planned effort and submitted hours align on the same record.',
      },
    ],
    capabilitiesEyebrow: 'Built for project delivery',
    capabilitiesTitle: 'Schedules that stay current',
    capabilitiesIntro:
      'Visual planning PMs update weekly—not a staffing file leadership cannot trust by the time they read it.',
    capabilities: [
      {
        icon: ChartGantt,
        title: 'Phase-based Gantt timelines',
        description:
          'Milestones, dependencies, and stage gates that match how AEC projects actually run from pursuit through closeout.',
      },
      {
        icon: Users,
        title: 'Assignments tied to capacity',
        description:
          'Put the right people on the right phases. Overbooking surfaces across concurrent jobs—not after burnout.',
      },
      {
        icon: CalendarRange,
        title: 'Weekly maintenance rhythm',
        description:
          'Update assignments as scope shifts. The chart stays current enough for standups, client updates, and principal reviews.',
      },
      {
        icon: ArrowRightLeft,
        title: 'Linked to time capture',
        description:
          'Resource Allocation connects to Activity Tracker and Smart Timesheets so staffing plans and submitted hours compare cleanly.',
      },
    ],
    outcomes: [
      {
        title: 'Earlier overload signals',
        description: 'Capacity conflicts show up while you can still reassign—not after the crunch.',
      },
      {
        title: 'Faster principal answers',
        description: 'Utilization and staffing live in one place—no day-long spreadsheet assembly.',
      },
      {
        title: 'Plans PMs own',
        description: 'A chart maintained in delivery workflow, not a file exported for every leadership meeting.',
      },
    ],
    workflowTitle: 'Where pursuit becomes delivery',
    workflowBody:
      'The Gantt chart is how won work becomes a staffed plan—and what operations reviews when backlog and capacity get tight.',
    workflowFlow: ['Won work / CRM', 'Gantt planning', 'Resource Allocation', 'Smart Timesheets'],
    faqs: [
      {
        question: 'Is this only a chart, or full resource allocation?',
        answer:
          'The Gantt chart is the visual planning layer inside Resource Allocation—assignments, phases, and capacity views work together in one module.',
      },
      {
        question: 'Can we plan across multiple offices?',
        answer:
          'Yes. Multi-studio firms use Gantt-based planning to see assignments and utilization across offices before taking on new work.',
      },
      {
        question: 'How does this connect to timesheets?',
        answer:
          'Staffing plans on the Gantt inform who should be logging time on which project. Submitted hours in Smart Timesheets compare against the same project record.',
      },
    ],
    related: [
      { label: 'Resource Allocation', href: PRODUCT_ROUTES.resource },
      { label: 'Activity Tracker', href: PRODUCT_ROUTES.activity },
      { label: 'Smart Timesheets', href: PRODUCT_ROUTES.timesheets },
    ],
  },
}

export function isFeatureId(id: string | undefined): id is FeatureId {
  return Boolean(id && id in FEATURE_PAGES)
}

export function getFeaturePage(id: string | undefined): FeaturePageContent | null {
  if (!isFeatureId(id)) {
    return null
  }

  return FEATURE_PAGES[id]
}

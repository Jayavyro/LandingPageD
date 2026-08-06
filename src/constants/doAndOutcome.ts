import type { LucideIcon } from 'lucide-react'
import {
  ChartNoAxesCombined,
  ClipboardList,
  Clock3,
  UsersRound,
} from 'lucide-react'
import { OUTCOME_FOOTNOTE } from './outcomeMetrics'

export type DoOutcomeAccent = 'purple' | 'blue' | 'orange' | 'pink'

export const DO_OUTCOME_ACCENTS: Record<DoOutcomeAccent, string> = {
  purple: '#8b5cf6',
  blue: '#3b82f6',
  orange: '#f97316',
  pink: '#ec4899',
}

export interface DoAndOutcomeItem {
  id: string
  step: string
  label: string
  doTitle: string
  doDescription: string
  features: string[]
  outcomeMetric: string
  outcomeLabel: string
  outcomeCaption: string
  accent: DoOutcomeAccent
  icon: LucideIcon
}

export const DO_AND_OUTCOME_BADGE = 'The Story'

export const DO_AND_OUTCOME_HEADLINE = 'Every firm we talked to had the same'
export const DO_AND_OUTCOME_HEADLINE_ACCENT = 'Monday morning problem.'

export const DO_AND_OUTCOME_SUBTITLE =
  'Budget surprises, staffing guesses, timesheet choreography, and studio performance that only shows up after the month closes. Here is how Avyro changes each one.'

export const DO_AND_OUTCOME_DO_LABEL = 'What was broken'
export const DO_AND_OUTCOME_GET_LABEL = 'What changes'

export const DO_AND_OUTCOME_ROLLUP =
  'One button. One line. One dashboard. One number.'
export const DO_AND_OUTCOME_ROLLUP_ACCENT =
  "That's not software. That's just how a well-run firm should already work."
export const DO_AND_OUTCOME_FOOTNOTE = OUTCOME_FOOTNOTE

export const DO_AND_OUTCOME_PRIMARY_CTA = {
  label: 'See Avyro Drive',
  href: '#avyro-drive',
} as const

export const DO_AND_OUTCOME_SECONDARY_CTA = {
  label: 'Book a walkthrough',
  href: '#contact-us',
} as const

export const DO_AND_OUTCOME_ITEMS: DoAndOutcomeItem[] = [
  {
    id: 'the-surprise',
    step: '01',
    label: 'The Surprise',
    doTitle: 'Most firms find out they blew the budget after it\'s already gone.',
    doDescription:
      'We moved the budget into the plan itself. Milestones, deliverables, and spend, side by side, updating as the work happens. Not a postmortem you read next month. A dashboard you can act on this afternoon.',
    features: [
      'Budget beside the plan',
      'Live milestone tracking',
      'Act this afternoon',
    ],
    outcomeMetric: 'Live',
    outcomeLabel: 'Budget in the plan',
    outcomeCaption: "That's Project Management, with the budget built in.",
    accent: 'orange',
    icon: ClipboardList,
  },
  {
    id: 'the-question',
    step: '02',
    label: 'The Question',
    doTitle: '"Who\'s free?"',
    doDescription:
      "Today, the answer lives in six inboxes, three spreadsheets, and one exhausted ops manager's memory. We thought that was ridiculous. So we built a button. Every person. Every project. Every hour — accounted for, right now, not by Friday.",
    features: [
      'Every person, every hour',
      'Live capacity view',
      'Answer at a click',
    ],
    outcomeMetric: '1 click',
    outcomeLabel: 'Who\'s free',
    outcomeCaption: "That's Resource Allocation. At a click.",
    accent: 'blue',
    icon: UsersRound,
  },
  {
    id: 'the-chore',
    step: '03',
    label: 'The Chore',
    doTitle: 'Nobody trusts a timesheet.',
    doDescription:
      "Least of all the person filling one in at 6pm on a Friday, trying to remember what Tuesday looked like. So we moved it into the work itself. Log time where the work already lives. Seconds, not guesswork — and nothing to reconstruct later.",
    features: [
      'Log where work lives',
      'Seconds, not guesswork',
      'Nothing to reconstruct',
    ],
    outcomeMetric: 'Seconds',
    outcomeLabel: 'To log time',
    outcomeCaption: "That's Smart Timesheets.",
    accent: 'pink',
    icon: Clock3,
  },
  {
    id: 'the-real-question',
    step: '04',
    label: 'The Real Question',
    doTitle: 'How is the studio actually doing?',
    doDescription:
      "Not last quarter's report. Not the deck someone assembles on the third of the month. The one number that decides whether this is a good year — and you can see it on any given Tuesday, live.",
    features: [
      'Live studio number',
      'Any given Tuesday',
      'Not last quarter\'s deck',
    ],
    outcomeMetric: 'Live',
    outcomeLabel: 'Studio health',
    outcomeCaption: "That's real-time productivity and utilization.",
    accent: 'purple',
    icon: ChartNoAxesCombined,
  },
]

import type { LucideIcon } from 'lucide-react'
import {
  BriefcaseBusiness,
  ChartNoAxesCombined,
  ClipboardList,
  ReceiptText,
  UsersRound,
} from 'lucide-react'

export interface SolutionJourneyStep {
  id: string
  role: string
  action: string
  icon: LucideIcon
}

export const THE_SOLUTION_BADGE = 'Real Problem'

export const THE_SOLUTION_HEADLINE = 'The revenue leak doesn’t happen inside your tools.'
export const THE_SOLUTION_HEADLINE_ACCENT = 'It happens between them.'

export const THE_SOLUTION_JOURNEY_INTRO =
  'Every project follows the same business journey—from winning work to getting paid.'

export const THE_SOLUTION_JOURNEY: SolutionJourneyStep[] = [
  {
    id: 'bd',
    role: 'Business Development',
    action: 'wins the work',
    icon: BriefcaseBusiness,
  },
  {
    id: 'pm',
    role: 'Project Managers',
    action: 'plan it',
    icon: ClipboardList,
  },
  {
    id: 'teams',
    role: 'Teams',
    action: 'execute it',
    icon: UsersRound,
  },
  {
    id: 'finance',
    role: 'Finance',
    action: 'bills it',
    icon: ReceiptText,
  },
  {
    id: 'leadership',
    role: 'Leadership',
    action: 'measures it',
    icon: ChartNoAxesCombined,
  },
]

export const THE_SOLUTION_GAP_LEAD =
  'But in most firms, every team works in a different system.'

export const THE_SOLUTION_GAP_BODY =
  'Every handoff means re-entering data, updating spreadsheets, sending emails, and hoping nothing gets missed.'

export const THE_SOLUTION_CONSEQUENCES = [
  'That’s where utilization falls.',
  'That’s where billable work disappears.',
  'That’s where invoices become incomplete.',
  'That’s where leadership loses visibility.',
] as const

export const THE_SOLUTION_CLOSING =
  'The problem isn’t your CRM, your timesheet software, or your billing system. It’s the gaps between them.'

export const THE_SOLUTION_BRIDGE =
  'Avyro closes those gaps — so the firm runs as one business, not a stack of tools.'

export const THE_SOLUTION_CTA = {
  label: 'See why firms run better with Avyro',
  href: '#do-and-outcome',
} as const

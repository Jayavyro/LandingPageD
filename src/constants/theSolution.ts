export interface SolutionJourneyStep {
  id: string
  number: string
  action: string
  role: string
  color: string
}

export const THE_SOLUTION_BADGE = 'Why the leak exists'

export const THE_SOLUTION_HEADLINE = 'Why the leak exists between tools.'

export const THE_SOLUTION_JOURNEY_INTRO =
  'Every handoff between business development, delivery, and finance today is a spreadsheet, a re-entry, or a guess. Avyro closes that gap by starting the work plan the moment a lead comes in — and carrying it, unchanged, through everything that follows.'

export const THE_SOLUTION_JOURNEY: SolutionJourneyStep[] = [
  {
    id: 'lead',
    number: '1',
    action: 'Lead comes in',
    role: 'CRM',
    color: '#1A5FD4',
  },
  {
    id: 'scope',
    number: '2',
    action: 'Scope goes out',
    role: 'Proposals',
    color: '#2D8EFF',
  },
  {
    id: 'staff',
    number: '3',
    action: 'Team gets staffed',
    role: 'Resourcing',
    color: '#3B6FD1',
  },
  {
    id: 'hours',
    number: '4',
    action: 'Hours get logged',
    role: 'Timesheets',
    color: '#0D1F4A',
  },
  {
    id: 'billed',
    number: '5',
    action: 'Work gets billed',
    role: 'Billing',
    color: '#E0447E',
  },
]

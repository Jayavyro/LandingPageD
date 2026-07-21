import type { LucideIcon } from 'lucide-react'
import {
  Briefcase,
  ClipboardCheck,
  FolderKanban,
  LineChart,
  UsersRound,
} from 'lucide-react'

export const HOW_AVYRO_V2_BADGE = 'HOW AVYRO RUNS YOUR BUSINESS'

export const HOW_AVYRO_V2_HEADLINE_LINES = [
  'Your entire AEC firm.',
  'One continuous journey.',
] as const

export const HOW_AVYRO_V2_SUBTITLE =
  'From the first lead to the final invoice—and the profit behind it.'

export interface HowJourneyStage {
  id: string
  title: string
  whatHappens: string
  whatNext: string
  icon: LucideIcon
}

export const HOW_JOURNEY_STAGES: HowJourneyStage[] = [
  {
    id: 'win-work',
    title: 'Win Work',
    whatHappens: 'Leads become opportunities. Opportunities become proposals.',
    whatNext: 'Client signs → project opens with budget and team ready.',
    icon: Briefcase,
  },
  {
    id: 'plan-projects',
    title: 'Plan Projects',
    whatHappens: 'Staff the job. Set the schedule. Lock the budget.',
    whatNext: 'Teams start from the live plan—no rebuild in another tool.',
    icon: UsersRound,
  },
  {
    id: 'deliver-projects',
    title: 'Deliver Projects',
    whatHappens: 'Progress, documents, and time stay on the project.',
    whatNext: 'Every update keeps delivery and costs in sync.',
    icon: FolderKanban,
  },
  {
    id: 'run-operations',
    title: 'Run Operations',
    whatHappens: 'Hours approve. Approved work becomes invoices.',
    whatNext: 'Finance bills from real delivery—not a separate spreadsheet.',
    icon: ClipboardCheck,
  },
  {
    id: 'lead-business',
    title: 'Lead the Firm',
    whatHappens: 'Health, utilization, profit, and cash—always current.',
    whatNext: 'Owners decide from live work, not last month’s report.',
    icon: LineChart,
  },
]

export interface HowCompareStep {
  id: string
  label: string
}

export const HOW_COMPARE_WITHOUT: HowCompareStep[] = [
  { id: 'crm', label: 'CRM' },
  { id: 'excel', label: 'Excel' },
  { id: 'resource', label: 'Resource Tool' },
  { id: 'project', label: 'Project Tool' },
  { id: 'timesheet', label: 'Timesheet Tool' },
  { id: 'invoice', label: 'Invoice Tool' },
  { id: 'bi', label: 'BI Dashboard' },
]

export const HOW_COMPARE_WITH: HowCompareStep[] = [
  { id: 'lead', label: 'Lead' },
  { id: 'opportunity', label: 'Opportunity' },
  { id: 'proposal', label: 'Proposal' },
  { id: 'project', label: 'Project' },
  { id: 'resources', label: 'Resources' },
  { id: 'time', label: 'Time' },
  { id: 'billing', label: 'Billing' },
  { id: 'insights', label: 'Insights' },
]

export const HOW_COMPARE_WITHOUT_FRICTION = [
  'Manual handoff',
  'Re-entry',
  'Export',
  'Import',
  'Rebuild',
] as const

export const HOW_COMPARE_WITH_BENEFITS = [
  'One business flow',
  'Nothing rebuilt',
  'Nothing re-entered',
  'Nothing disconnected',
] as const

export const HOW_COMPARE_TITLE = 'Buy tools—or run the business'
export const HOW_COMPARE_WITHOUT_LABEL = 'Buying separate products'
export const HOW_COMPARE_WITH_LABEL = 'Running on AVYRO'

export interface HowAutomationBlock {
  id: string
  trigger: string
  action: string
  outcomes: string[]
}

export const HOW_AUTOMATIONS_TITLE = 'The next step is already ready'
export const HOW_AUTOMATIONS_SUBTITLE =
  'Win work. Deliver work. Bill work. Lead the firm—without starting over.'

export const HOW_AUTOMATIONS: HowAutomationBlock[] = [
  {
    id: 'proposal-won',
    trigger: 'Proposal won',
    action: 'Opens automatically',
    outcomes: ['Project', 'Budget', 'Client record', 'Team'],
  },
  {
    id: 'project-started',
    trigger: 'Project underway',
    action: 'Stays current',
    outcomes: ['Resource plan', 'Timesheets', 'Approvals'],
  },
  {
    id: 'hours-approved',
    trigger: 'Hours approved',
    action: 'Feeds the business',
    outcomes: ['Invoices', 'Margin view', 'Leadership dashboards'],
  },
]

export const HOW_FRICTION_TITLE = 'What your firm stops doing'
export const HOW_FRICTION_GONE = [
  'Duplicate entry',
  'Rebuilding projects',
  'Exporting spreadsheets',
  'Chasing approvals',
  'Waiting on finance',
  'Copying between tools',
] as const

export interface HowCeoMetric {
  id: string
  label: string
  hint: string
}

export const HOW_CEO_METRICS: HowCeoMetric[] = [
  { id: 'revenue', label: 'Revenue', hint: 'From billed work' },
  { id: 'utilization', label: 'Utilization', hint: 'From live staffing' },
  { id: 'profit', label: 'Profitability', hint: 'By project' },
  { id: 'risk', label: 'At risk', hint: 'Before it slips' },
  { id: 'cash', label: 'Cash flow', hint: 'From invoices' },
]

export const HOW_CEO_TITLE = 'What leadership sees'
export const HOW_CEO_BODY =
  'Every stage of the firm feeds this view. No monthly scramble.'

export const HOW_CLOSING_LINES = [
  'Not another CRM.',
  'Not another project tool.',
  'Not another ERP.',
] as const

export const HOW_CLOSING_EMPHASIS =
  'One operating system for your AEC business—from winning work to measuring profit.'

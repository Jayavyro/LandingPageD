import type { LucideIcon } from 'lucide-react'
import {
  BarChart3,
  Briefcase,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  FileText,
  Filter,
  FolderKanban,
  LineChart,
  ReceiptText,
  Table2,
  Target,
  UsersRound,
} from 'lucide-react'

export const HOW_AVYRO_V2_BADGE = 'AVYRO VS THE STACK YOU HAVE NOW'

export const HOW_AVYRO_V2_HEADLINE_LINES = [
  'You saw the outcomes.',
  'Here is why one platform beats seven tools.',
] as const

export const HOW_AVYRO_V2_SUBTITLE =
  'Most AEC firms run a CRM, a resourcing tool, a timesheet app, invoicing software, spreadsheets, and a BI dashboard — each with its own login and handoffs. Avyro replaces that stack on one record. No re-entry between steps.'

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

export interface HowCompareWithoutStep extends HowCompareStep {
  friction: string
}

export interface HowCompareWithStep extends HowCompareStep {
  icon: LucideIcon
}

export interface HowCompareWithoutStepFull extends HowCompareWithoutStep {
  icon: LucideIcon
}

export const HOW_COMPARE_WITHOUT: HowCompareWithoutStepFull[] = [
  { id: 'crm', label: 'CRM', friction: 'Manual handoff', icon: UsersRound },
  { id: 'excel', label: 'Excel', friction: 'Re-entry', icon: Table2 },
  { id: 'resource', label: 'Resource Tool', friction: 'Export', icon: UsersRound },
  { id: 'project', label: 'Project Tool', friction: 'Import', icon: FolderKanban },
  { id: 'timesheet', label: 'Timesheet Tool', friction: 'Rebuild', icon: Clock3 },
  { id: 'invoice', label: 'Invoice Tool', friction: 'Manual handoff', icon: ReceiptText },
  { id: 'bi', label: 'BI Dashboard', friction: 'Re-entry', icon: BarChart3 },
]

export const HOW_COMPARE_WITH: HowCompareWithStep[] = [
  { id: 'lead', label: 'Lead', icon: Target },
  { id: 'opportunity', label: 'Opportunity', icon: Filter },
  { id: 'proposal', label: 'Proposal', icon: FileText },
  { id: 'project', label: 'Project', icon: Briefcase },
  { id: 'resources', label: 'Resources', icon: UsersRound },
  { id: 'time', label: 'Time', icon: Clock3 },
  { id: 'billing', label: 'Billing', icon: CircleDollarSign },
  { id: 'insights', label: 'Insights', icon: LineChart },
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

export const HOW_COMPARE_TITLE = 'Seven subscriptions—or one system'

export const HOW_COMPARE_SUBTITLE =
  'Replace disconnected tools and manual work with one connected platform.'

export const HOW_COMPARE_WITHOUT_LABEL = 'Your stack today'
export const HOW_COMPARE_WITH_LABEL = 'Running on AVYRO'

export interface HowCompareSummaryMetric {
  id: string
  icon: LucideIcon
  prefix?: string
  highlight: string
  suffix: string
  tone: 'purple' | 'green' | 'blue' | 'navy'
}

export const HOW_COMPARE_SUMMARY = {
  title: 'One platform. One source of truth.',
  subtitle: 'Less admin. More billable time. Healthier projects.',
} as const

export const HOW_COMPARE_SUMMARY_METRICS: HowCompareSummaryMetric[] = [
  {
    id: 'hours',
    icon: Clock3,
    prefix: 'Save',
    highlight: '100+ hours',
    suffix: 'every month',
    tone: 'purple',
  },
  {
    id: 'spend',
    icon: CircleDollarSign,
    prefix: 'Reduce',
    highlight: '20–40%',
    suffix: 'software spend',
    tone: 'green',
  },
  {
    id: 'utilization',
    icon: BarChart3,
    prefix: 'Increase',
    highlight: 'billable utilization',
    suffix: 'by 15%+',
    tone: 'blue',
  },
  {
    id: 'decisions',
    icon: ClipboardCheck,
    highlight: 'Faster decisions',
    suffix: 'with real-time insights',
    tone: 'navy',
  },
]

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

export const HOW_CEO_TITLE = 'The Monday-morning view'
export const HOW_CEO_BODY =
  'Revenue, utilization, profit, and cash—fed live by the same records your team works in. No month-end scramble, no waiting on finance to assemble it.'

export const HOW_CLOSING_LINES = [
  'Not another CRM.',
  'Not another project tool.',
  'Not another ERP.',
] as const

export const HOW_CLOSING_EMPHASIS =
  'One operating system for your AEC business—from winning work to measuring profit.'

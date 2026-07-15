import type { LucideIcon } from 'lucide-react'
import {
  BarChart3,
  CircleDollarSign,
  Clock,
  GanttChart,
  Trophy,
} from 'lucide-react'
import leadToOpportunityVideo from '../Leadtoopputunity.mp4'
import projectGanttVideo from '../Project_Gant.mp4'
import activityTimesheetVideo from '../Activity_timesheet.mp4'
import billingVideo from '../Billing.mp4'

export type SolutionAccent =
  | 'purple'
  | 'blue'
  | 'green'
  | 'orange'
  | 'pink'
  | 'teal'

export interface SolutionStory {
  id: string
  title: string
  icon: LucideIcon
  accent: SolutionAccent
  modules: string[]
  value: string
  href: string
  videoSrc?: string
}

export const SOLUTIONS_SUBTITLE =
  'Avyro solutions are built for AEC firms to overcome real business challenges and achieve measurable outcomes.'

export const SOLUTION_STORIES: SolutionStory[] = [
  {
    id: 'win-projects',
    title: 'Win More Projects',
    icon: Trophy,
    accent: 'purple',
    modules: ['AI-Powered CRM', 'Proposal Management'],
    value:
      'AI helps capture client information and pre-fill CRM records and proposal forms, so your team spends less time on data entry.',
    href: '#win-projects',
    videoSrc: leadToOpportunityVideo,
  },
  {
    id: 'plan-deliver-projects',
    title: 'Plan & Deliver Projects',
    icon: GanttChart,
    accent: 'blue',
    modules: ['Project Management', 'Gantt Planning', 'Resource Allocation'],
    value:
      'Plan schedules, allocate resources, and deliver projects with complete visibility.',
    href: '#plan-deliver-projects',
    videoSrc: projectGanttVideo,
  },
  {
    id: 'billable-hours',
    title: 'Capture Every Billable Hour',
    icon: Clock,
    accent: 'orange',
    modules: ['Activity Tracker', 'Smart Timesheets'],
    value:
      'Automatically capture work activity and generate accurate timesheets with minimal manual effort.',
    href: '#billable-hours',
    videoSrc: activityTimesheetVideo,
  },
  {
    id: 'billing-cashflow',
    title: 'Accelerate Billing & Cash Flow',
    icon: CircleDollarSign,
    accent: 'pink',
    modules: ['Billing & Invoicing'],
    value:
      'Turn approved work into invoices faster and simplify financial management.',
    href: '#billing-cashflow',
    videoSrc: billingVideo,
  },
  {
    id: 'enterprise-operations',
    title: 'Enterprise Operations',
    icon: BarChart3,
    accent: 'teal',
    modules: ['Analytics & Reporting', 'Asset Management', 'Integrations'],
    value:
      'Connect your operations, monitor business performance, and manage assets from one unified platform.',
    href: '#enterprise-operations',
  },
]

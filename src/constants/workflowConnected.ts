import type { LucideIcon } from 'lucide-react'
import {
  Activity,
  BarChart3,
  Briefcase,
  CircleDollarSign,
  Clock,
  FileText,
  FolderKanban,
  Settings,
  SquareCheck,
  UserCog,
  Users,
} from 'lucide-react'

export interface WorkflowFeature {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export interface WorkflowModule {
  id: string
  label: string
  icon: LucideIcon
  glow?: boolean
}

export interface WorkflowStatusStat {
  id: string
  title: string
  description: string
}

export const WORKFLOW_CONNECTED_BADGE = 'HOW AVYRO WORKS'

export const WORKFLOW_CONNECTED_HEADLINE_LINES = [
  'One System.',
  'One Flow of Information.',
] as const

export const WORKFLOW_CONNECTED_SUBTITLE = 'From opportunity to profit—on the same records.'

export const WORKFLOW_CONNECTED_DESCRIPTION =
  'Instead of separate tools that each hold their own copy of the truth, every team works on the same records. Enter information once and it carries forward—so no one re-keys data or chases another system for an update.'
  export const WORKFLOW_FEATURES: WorkflowFeature[] = [
  {
    id: 'win-more-work',
    title: 'Win Work',
    description:
      'Opportunities and clients live in the CRM. When a deal is won, it becomes a project—no re-entry, no rebuilding the scope elsewhere.',
    icon: Briefcase,
  },
  {
    id: 'deliver-better-projects',
    title: 'Plan & Deliver',
    description:
      'Resourcing and schedules run on the same project records, so assignments, phases, and timelines always reflect the live plan.',
    icon: FolderKanban,
  },
  {
    id: 'simplify-operations',
    title: 'Operate',
    description:
      'Time, approvals, and billing post against the same projects and people—work logged during the week feeds invoicing directly.',
    icon: Settings,
  },
  {
    id: 'measure-performance',
    title: 'Measure',
    description:
      'Because every workflow shares one source of data, project health and firm performance update in real time—no exports or reconciliation.',
    icon: BarChart3,
  },
]

export const WORKFLOW_TOP_MODULES: WorkflowModule[] = [
  { id: 'crm', label: 'Win Work', icon: Users },
  { id: 'resource', label: 'Plan Resources', icon: UserCog },
  { id: 'projects', label: 'Deliver Projects', icon: FolderKanban },
  { id: 'activity', label: 'Track Progress', icon: Activity },

]

export const WORKFLOW_BOTTOM_MODULES: WorkflowModule[] = [


  { id: 'analytics', label: 'Analyze Results', icon: FileText },
  { id: 'billing', label: 'Bill Clients', icon: CircleDollarSign },
  { id: 'approvals', label: 'Approve work', icon: SquareCheck },
  { id: 'timesheets', label: 'Manage Time ', icon: Clock },
]

export const WORKFLOW_STATUS_STATS: WorkflowStatusStat[] = [
  {
    id: 'one-platform',
    title: 'One System, Not Tool Islands',
    description: 'Teams share one platform instead of syncing separate apps.',
  },
  {
    id: 'one-information-flow',
    title: 'Enter Once, Flows Everywhere',
    description: 'Data captured in one workflow carries into all the others.',
  },
  {
    id: 'one-business-view',
    title: 'One Source of Truth',
    description: 'People, projects, and performance read from the same data.',
  },
]

export function getConnectedModuleIds(moduleId: string): string[] {
  const topIndex = WORKFLOW_TOP_MODULES.findIndex((module) => module.id === moduleId)
  const bottomIndex = WORKFLOW_BOTTOM_MODULES.findIndex((module) => module.id === moduleId)

  if (topIndex !== -1) {
    const connected = [moduleId]
    if (topIndex > 0) connected.push(WORKFLOW_TOP_MODULES[topIndex - 1].id)
    if (topIndex < WORKFLOW_TOP_MODULES.length - 1) {
      connected.push(WORKFLOW_TOP_MODULES[topIndex + 1].id)
    }
    if (moduleId === 'timesheets') connected.push('approvals')
    return connected
  }

  if (bottomIndex !== -1) {
    const connected = [moduleId]
    if (bottomIndex > 0) connected.push(WORKFLOW_BOTTOM_MODULES[bottomIndex - 1].id)
    if (bottomIndex < WORKFLOW_BOTTOM_MODULES.length - 1) {
      connected.push(WORKFLOW_BOTTOM_MODULES[bottomIndex + 1].id)
    }
    if (moduleId === 'approvals') connected.push('timesheets')
    return connected
  }

  return []
}

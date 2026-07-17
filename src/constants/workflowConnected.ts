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

export const WORKFLOW_CONNECTED_SUBTITLE = 'Every Team Moving Forward.'

export const WORKFLOW_CONNECTED_DESCRIPTION =
  'Every opportunity, project, resource, document, approval, and financial workflow moves through one connected platform—keeping every team aligned from business development to project delivery.'
  export const WORKFLOW_FEATURES: WorkflowFeature[] = [
  {
    id: 'win-more-work',
    title: 'Win More Work',
    description: 'Opportunities and clients from first conversation to project award.',
    icon: Briefcase,
  },
  {
    id: 'deliver-better-projects',
    title: 'Plan & Deliver Projects',
    description: 'Allocate the right people and keep projects on track with teams and schedules.',
    icon: FolderKanban,
  },
  {
    id: 'simplify-operations',
    title: 'Simplify Operations',
    description: 'Resources, time, approvals, and billing—one flow.',
    icon: Settings,
  },
  {
    id: 'measure-performance',
    title: 'Measure Performance',
    description: 'Live project health and business insights.',
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
    title: 'One Platform',
    description: 'Every team works together in one system.',
  },
  {
    id: 'one-information-flow',
    title: 'One Information Flow',
    description: 'Capture information once. Use it across every workflow.',
  },
  {
    id: 'one-business-view',
    title: 'One Business View',
    description: 'Track projects, people, and performance in real time.',
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

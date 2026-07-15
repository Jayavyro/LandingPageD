import type { LucideIcon } from 'lucide-react'
import {
  Activity,
  BarChart3,
  CircleDollarSign,
  Clock,
  Database,
  FileText,
  FolderKanban,
  Sparkles,
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
  value: string
  label: string
}

export const WORKFLOW_CONNECTED_DESCRIPTION =
  'From winning new projects to final invoicing, every department works together through one connected platform with shared data, automated workflows, and AI-powered insights.'

export const WORKFLOW_FEATURES: WorkflowFeature[] = [
  {
    id: 'truth',
    title: 'One Source of Truth',
    description: 'Shared business data.',
    icon: Database,
  },
  {
    id: 'duplicate',
    title: 'Zero Duplicate Entry',
    description: 'Information flows automatically.',
    icon: FileText,
  },
  {
    id: 'visibility',
    title: 'Real-Time Visibility',
    description: 'Live project intelligence.',
    icon: Activity,
  },
  {
    id: 'ai',
    title: 'AI Across Every Workflow',
    description: 'Automation built into every module.',
    icon: Sparkles,
  },
]

export const WORKFLOW_TOP_MODULES: WorkflowModule[] = [
  { id: 'crm', label: 'CRM', icon: Users },
  { id: 'resource', label: 'Resource Planning', icon: UserCog },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'activity', label: 'Activity Tracking', icon: Activity },
  { id: 'timesheets', label: 'Smart Timesheets', icon: Clock },
]

export const WORKFLOW_BOTTOM_MODULES: WorkflowModule[] = [
  { id: 'insights', label: 'Insights', icon: Sparkles },
  { id: 'financials', label: 'Financials', icon: BarChart3 },
  { id: 'analytics', label: 'Analytics', icon: FileText },
  { id: 'billing', label: 'Billing & Invoice', icon: CircleDollarSign },
  { id: 'approvals', label: 'Approvals', icon: SquareCheck },
]

export const WORKFLOW_STATUS_STATS: WorkflowStatusStat[] = [
  { value: '99.9%', label: 'Platform Connectivity' },
  { value: 'Real-Time', label: 'Business Visibility' },
  { value: 'Zero', label: 'Duplicate Data Entry' },
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

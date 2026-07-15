import {
  BarChart3,
  CircleDollarSign,
  Clock,
  Eye,
  GitBranch,
  Target,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import beforeSpreadsheet from '../Screenshot 2026-07-14 154441.png'
import afterDashboard from '../Workplan.png'
import capabilitiesVisual from '../pexels-cottonbro-5990058.jpg'

export const PROJECT_MANAGERS_EYEBROW = 'For project managers'

export const PROJECT_MANAGERS_HEADLINE =
  'Meet project deadlines and budget targets without burnout'

export const PROJECT_MANAGERS_SUBTITLE =
  'Avyro gives you the real-time clarity and control you need to deliver every project successfully.'

export const BEFORE_CARD = {
  title: 'Before Avyro',
  subtitle: 'Scattered data, manual updates, and constant firefighting.',
  image: beforeSpreadsheet,
  imageAlt: 'Excel project budget tracker spreadsheet with manual data entry',
  points: [
    'Hard to get real-time updates',
    'Limited visibility across projects',
    'Time lost in manual reporting',
    'Budget overruns and surprises',
  ],
} as const

export type BeforeCard = {
  title: string
  subtitle: string
  image?: string
  imageAlt: string
  points: readonly string[]
}

export const AFTER_CARD = {
  title: 'After Avyro',
  subtitle: 'Real-time insights, automated updates, and complete control.',
  image: afterDashboard,
  imageAlt: 'Avyro ERP dashboard showing project workplan progress and KPIs',
} as const

export type AfterCard = {
  title: string
  subtitle: string
  image?: string
  imageAlt: string
}

export interface UseCaseFeature {
  icon: LucideIcon
  title: string
  description: string
}

export const PROJECT_MANAGER_FEATURES: UseCaseFeature[] = [
  {
    icon: Clock,
    title: 'Save hours every week',
    description: 'Automate reporting and updates',
  },
  {
    icon: Eye,
    title: 'See everything in real time',
    description: 'One source of truth for all projects',
  },
  {
    icon: Target,
    title: 'Stay on time and on budget',
    description: 'Proactive alerts and insights',
  },
  {
    icon: Users,
    title: 'Lead with confidence',
    description: 'Clear visibility for better decisions',
  },
]

export const CAPABILITIES_EYEBROW = 'Manage projects with confidence'

export const CAPABILITIES_TITLE = 'Discover how Avyro can help you'

export interface ProjectCapability {
  icon: LucideIcon
  title: string
  description: string
}

export type CapabilitiesVisual = {
  src: string
  alt: string
}

export const CAPABILITIES_VISUAL = {
  src: capabilitiesVisual,
  alt: 'Project team collaborating and reviewing plans together in a modern office',
}

export const PROJECT_CAPABILITIES: ProjectCapability[] = [
  {
    icon: GitBranch,
    title: 'Project Planning',
    description:
      'Plan projects with work breakdown structures, milestones, dependencies, and schedules that keep every team aligned from kickoff to delivery.',
  },
  {
    icon: Users,
    title: 'Resource Management',
    description:
      'Assign the right people at the right time with real-time workload balancing, utilization tracking, and intelligent capacity planning.',
  },
  {
    icon: CircleDollarSign,
    title: 'Financial Management',
    description:
      'Control budgets, monitor project profitability, automate billing, and gain complete financial visibility across every project.',
  },
  {
    icon: BarChart3,
    title: 'Executive Insights',
    description:
      'Make faster decisions with live dashboards, KPI reporting, project health monitoring, and AI-powered business intelligence.',
  },
]

export const PM_QUESTIONS_EYEBROW = 'For project managers'

export const PM_QUESTIONS_TITLE = 'Share Avyro with your firm'

export interface ProjectManagerQuestion {
  question: string
  answer: string
}

export const PROJECT_MANAGER_QUESTIONS: ProjectManagerQuestion[] = [
  {
    question: 'How do I assign the right people to the right projects?',
    answer:
      'Match employees to projects based on their skills, experience, availability, and workload to build high-performing teams.',
  },
  {
    question: 'How do I keep projects on schedule?',
    answer:
      'Track milestones, deadlines, and progress in real time to identify delays early and keep every project moving forward.',
  },
  {
    question: 'How do I stay within budget?',
    answer:
      'Monitor costs, billable hours, and project profitability with live financial insights to prevent budget overruns before they happen.',
  },
]

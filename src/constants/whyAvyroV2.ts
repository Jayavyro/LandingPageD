import type { LucideIcon } from 'lucide-react'
import { Eye, FileText, FolderKanban, Layers, Users, UsersRound, Workflow } from 'lucide-react'

export type WhyAvyroV2Accent = 'purple' | 'blue'

export interface WhyAvyroV2Fragment {
  label: string
  icon: LucideIcon
}

export interface WhyAvyroV2Feature {
  title: string
  description: string
  bullets: string[]
  accent: WhyAvyroV2Accent
  icon: LucideIcon
}

export const WHY_AVYRO_V2_BADGE = 'Why AVYRO'
//Your business is connected.
//Your software should be too.
export const WHY_AVYRO_V2_HEADLINE_LINES = [
  'Your projects are connected.',
  'Your software should be too.',
] as const

export const WHY_AVYRO_V2_INTRO =
  'Every pursuit, project, document, and resource depends on one another. Yet most AEC firms manage them across disconnected systems — creating duplicate work, fragmented information, and slower decisions.'
export const WHY_AVYRO_V2_CLOSING =
  'AVYRO replaces disconnected systems with one connected platform where information, workflows, and teams stay connected—creating a single source of truth across your entire business.'

export const WHY_AVYRO_V2_BEFORE_LABEL = 'Separate systems today'

export const WHY_AVYRO_V2_FRAGMENTS: WhyAvyroV2Fragment[] = [
  { label: 'CRM', icon: Users },
  { label: 'Projects', icon: FolderKanban },
  { label: 'Resources', icon: UsersRound },
  { label: 'Documents', icon: FileText },
]

export const WHY_AVYRO_V2_PAIN_POINTS = [
  'Duplicate data across teams',
  'Manual handoffs slow delivery',
  'No single view of the business',
]

export const WHY_AVYRO_V2_AFTER_LABEL = 'One platform for your firm'

export const WHY_AVYRO_V2_PLATFORM_NAME = 'AVYRO'

export const WHY_AVYRO_V2_OUTCOME = 'Single Source of Truth'

export const WHY_AVYRO_V2_OUTCOMES_LABEL = 'What changes with AVYRO'

export const WHY_AVYRO_V2_FEATURES: WhyAvyroV2Feature[] = [
  {
    title: 'Streamlined Workflows',
    description:
      'Connect business development, project delivery, finance, and operations in one continuous workflow',
    bullets: [
      'Eliminate duplicate data entry.',
      'Remove manual handoffs between teams.',
      'Keep every stage moving forward.',
    ],
    accent: 'blue',
    icon: Workflow,
  },
  {
    title: 'One Platform',
    description:
      'Bring clients, projects, people, documents, and resources together in one platform designed for AEC firms.',
    bullets: [
      'Replace disconnected applications.',
      'Every team works from the same information.',
      'Every workflow stays connected.'
    ],
    accent: 'purple',
    icon: Layers,
  },
  {
    title: 'Complete Visibility',
    description:
      'Know exactly where every project stands—financially, operationally, and strategically.',
    bullets: [
      'Monitor projects in real time.',
      'Track utilization, budgets, and profitability.',
      'Make faster, more confident business decisions.',
    ],
    accent: 'blue',
    icon: Eye,
  },
]

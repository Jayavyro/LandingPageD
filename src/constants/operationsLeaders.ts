import {
  Activity,
  BarChart3,
  GitBranch,
  Layers,
  Settings2,
  Users,
} from 'lucide-react'
import capabilitiesVisual from '../assets/use-case/operations-leaders-capabilities.jpg'
import type { AfterCard, BeforeCard, CapabilitiesVisual, ProjectCapability } from './projectManagers'

export const OPERATIONS_LEADERS_EYEBROW = 'For operations leaders'

export const OPERATIONS_LEADERS_HEADLINE =
  'Easily monitor and optimize performance across your entire firm'

export const OPERATIONS_LEADERS_SUBTITLE =
  'Avyro gives operations leaders the visibility and control to streamline workflows, balance resources, and keep every team performing at their best.'

export const OPS_BEFORE_CARD: BeforeCard = {
  title: 'Before Avyro',
  subtitle: 'Siloed teams, manual handoffs, and performance gaps you only see too late.',
  imageAlt:
    'Fragmented operations workflow with disconnected tools, spreadsheets, and manual status updates',
  points: [
    'No unified view of team utilization',
    'Manual coordination between departments',
    'Bottlenecks discovered after delays happen',
    'Inconsistent processes across offices',
  ],
}

export const OPS_AFTER_CARD: AfterCard = {
  title: 'After Avyro',
  subtitle: 'Connected workflows, live performance metrics, and proactive optimization.',
  imageAlt:
    'Avyro operations dashboard showing resource utilization, workflow status, and firm-wide performance metrics',
}

export const OPS_CAPABILITIES_EYEBROW = 'Optimize how your firm runs'

export const OPS_CAPABILITIES_TITLE = 'Discover how Avyro empowers operations leaders'

export const OPS_CAPABILITIES_VISUAL: CapabilitiesVisual = {
  src: capabilitiesVisual,
  alt: 'Operations team collaborating on workflow planning and performance reviews',
}

export const OPERATIONS_CAPABILITIES: ProjectCapability[] = [
  {
    icon: Activity,
    title: 'Performance Monitoring',
    description:
      'Track utilization, delivery timelines, and operational KPIs across every office and department in one live view.',
  },
  {
    icon: Users,
    title: 'Resource Optimization',
    description:
      'Balance workloads, identify over- and under-utilized teams, and assign resources where they create the most impact.',
  },
  {
    icon: GitBranch,
    title: 'Workflow Automation',
    description:
      'Standardize handoffs, approvals, and delivery processes so teams move faster with fewer manual steps and errors.',
  },
  {
    icon: Layers,
    title: 'Cross-Team Visibility',
    description:
      'Break down silos with shared dashboards that connect project delivery, finance, and resourcing in one platform.',
  },
]

export const OPS_QUESTIONS_EYEBROW = 'For operations leaders'

export const OPS_QUESTIONS_TITLE = 'Share Avyro with your firm'

export const OPERATIONS_LEADER_QUESTIONS = [
  {
    question: 'How do I monitor firm-wide performance in real time?',
    answer:
      'View live dashboards for utilization, project delivery, backlog, and operational KPIs — updated automatically as teams work.',
  },
  {
    question: 'How do I optimize resource allocation across projects?',
    answer:
      'See capacity, availability, and workload by role and office so you can balance teams and prevent burnout or idle time.',
  },
  {
    question: 'How do I streamline workflows between teams?',
    answer:
      'Automate handoffs, standardize processes, and connect project, finance, and resourcing data so every department stays aligned.',
  },
] as const

export const OPERATIONS_LEADERS_PAGE = {
  headingId: 'operations-leaders-heading',
  eyebrow: OPERATIONS_LEADERS_EYEBROW,
  headline: OPERATIONS_LEADERS_HEADLINE,
  subtitle: OPERATIONS_LEADERS_SUBTITLE,
  beforeCard: OPS_BEFORE_CARD,
  afterCard: OPS_AFTER_CARD,
  capabilitiesEyebrow: OPS_CAPABILITIES_EYEBROW,
  capabilitiesTitle: OPS_CAPABILITIES_TITLE,
  capabilitiesVisual: OPS_CAPABILITIES_VISUAL,
  capabilities: OPERATIONS_CAPABILITIES,
  questionsEyebrow: OPS_QUESTIONS_EYEBROW,
  questionsTitle: OPS_QUESTIONS_TITLE,
  questions: OPERATIONS_LEADER_QUESTIONS,
} as const

export const OPERATIONS_LEADER_FEATURES = [
  {
    icon: BarChart3,
    title: 'See what is working',
    description: 'Live ops metrics across the firm',
  },
  {
    icon: Settings2,
    title: 'Standardize delivery',
    description: 'Repeatable workflows at scale',
  },
  {
    icon: Users,
    title: 'Balance your teams',
    description: 'Smarter resource allocation',
  },
  {
    icon: Activity,
    title: 'Fix bottlenecks early',
    description: 'Proactive performance alerts',
  },
] as const

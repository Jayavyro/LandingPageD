export type WhyAvyroV2Accent = 'purple' | 'blue'

export interface WhyAvyroV2Feature {
  title: string
  description: string
  bullets: string[]
  accent: WhyAvyroV2Accent
}

export const WHY_AVYRO_V2_SUBTITLE =
  'Purpose-built for project-driven businesses, AVYRO unifies every workflow into a single platform, giving your teams complete visibility, smarter automation, and better business outcomes.'

export const WHY_AVYRO_V2_FEATURES: WhyAvyroV2Feature[] = [
  {
    title: 'Designed for the Way You Work',
    description:
      'Built for architecture, engineering, and construction firms with workflows engineered around real project delivery — not generic business software adapted after the fact.',
    bullets: [
      'AEC-focused workflows across every project stage',
      'Unified CRM, projects, workforce, time, and finance',
      'One platform from pursuit and planning through closeout',
    ],
    accent: 'purple',
  },
  {
    title: 'Intelligence at Every Step',
    description:
      'Avyro\'s AI layer surfaces insights across projects, people, and performance — helping teams move faster from proposal to delivery with clarity at every decision point.',
    bullets: [
      'Predictive risk and delay detection across active work',
      'Real-time utilization, capacity, and bench insights',
      'Live project data that helps teams act before issues grow',
    ],
    accent: 'blue',
  },
  {
    title: 'Governance & Control Built In',
    description:
      'Enterprise-grade visibility and control for firms that need confident financial oversight, role-based access, and audit-ready records across every team and project.',
    bullets: [
      'Role-based access across CRM, projects, and workforce',
      'Budget, fee, and margin tracking built into delivery',
      'Audit-ready project, time, and workforce records',
    ],
    accent: 'purple',
  },
]

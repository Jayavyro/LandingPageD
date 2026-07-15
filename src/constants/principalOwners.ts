import {
  BarChart3,
  Bell,
  CircleDollarSign,
  LineChart,
  PieChart,
  TrendingUp,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import beforeChaos from '../Stock.png'
import afterDashboard from '../PO.png'
import capabilitiesVisual from '../assets/use-case/principal-owners-capabilities.jpg'
import type { AfterCard, BeforeCard, CapabilitiesVisual, ProjectCapability } from './projectManagers'

export const PRINCIPAL_OWNERS_EYEBROW = 'For principals & owners'

export const PRINCIPAL_OWNERS_HEADLINE =
  'Maximize business health with complete firm-wide visibility'

export const PRINCIPAL_OWNERS_SUBTITLE =
  'Avyro gives you the real-time insights and executive clarity you need to lead your firm with confidence.'

export const PO_BEFORE_CARD: BeforeCard = {
  title: 'Before Avyro',
  subtitle: 'Scattered reports, manual consolidation, and decisions made too late.',
  image: beforeChaos,
  imageAlt:
    'Cluttered desk with spreadsheets, printed reports, sticky notes, and manual financial tracking',
  points: [
    'Data spread across spreadsheets and emails',
    'No single view of firm performance',
    'Hours spent chasing updates from teams',
    'Reactive decisions after problems surface',
  ],
}

export const PO_AFTER_CARD: AfterCard = {
  title: 'After Avyro',
  subtitle: 'Real-time executive insights, unified data, and proactive control.',
  image: afterDashboard,
  imageAlt:
    'Avyro Executive Overview dashboard showing revenue, profit, pipeline, and firm-wide KPIs',
}

export const PO_CAPABILITIES_EYEBROW = 'Lead your firm with confidence'

export const PO_CAPABILITIES_TITLE = 'Discover how Avyro empowers principals & owners'

export const PO_CAPABILITIES_VISUAL: CapabilitiesVisual = {
  src: capabilitiesVisual,
  alt: 'Firm leaders reviewing business performance and strategic plans together',
}

export const PRINCIPAL_CAPABILITIES: ProjectCapability[] = [
  {
    icon: BarChart3,
    title: 'Executive Overview',
    description:
      'See revenue, profit, cash flow, backlog, and active projects in one live dashboard — updated automatically across your entire firm.',
  },
  {
    icon: PieChart,
    title: 'Revenue & Client Insights',
    description:
      'Understand revenue by sector, office, and top clients so you know where growth is coming from and where to invest next.',
  },
  {
    icon: LineChart,
    title: 'Pipeline & Forecasting',
    description:
      'Track sales pipeline by sector, forecast upcoming revenue, and spot conversion opportunities before they slip away.',
  },
  {
    icon: Bell,
    title: 'Executive Alerts',
    description:
      'Get proactive alerts on over-budget projects, approaching deadlines, portfolio health, and quarterly revenue forecasts.',
  },
]

export const PO_QUESTIONS_EYEBROW = 'For principals & owners'

export const PO_QUESTIONS_TITLE = 'Share Avyro with your firm'

export interface PrincipalOwnerQuestion {
  question: string
  answer: string
}

export const PRINCIPAL_OWNER_QUESTIONS: PrincipalOwnerQuestion[] = [
  {
    question: 'How do I get a real-time view of my firm’s performance?',
    answer:
      'Access live dashboards for revenue, profit, cash flow, backlog, and project health — all consolidated from every office and business unit.',
  },
  {
    question: 'How do I identify at-risk projects before they hurt margins?',
    answer:
      'Executive alerts flag over-budget projects, deadline risks, and portfolio health issues early so you can intervene before they impact profitability.',
  },
  {
    question: 'How do I make confident strategic decisions for growth?',
    answer:
      'Analyze revenue by sector, client contribution, office performance, and pipeline conversion to guide investments, hiring, and expansion with data.',
  },
]

export interface PrincipalOwnerFeature {
  icon: LucideIcon
  title: string
  description: string
}

export const PRINCIPAL_OWNER_FEATURES: PrincipalOwnerFeature[] = [
  {
    icon: TrendingUp,
    title: 'Grow with clarity',
    description: 'Spot trends across sectors and offices',
  },
  {
    icon: CircleDollarSign,
    title: 'Protect margins',
    description: 'Monitor profitability in real time',
  },
  {
    icon: BarChart3,
    title: 'Lead with data',
    description: 'One executive source of truth',
  },
  {
    icon: Bell,
    title: 'Act before issues escalate',
    description: 'Proactive alerts on what matters',
  },
]

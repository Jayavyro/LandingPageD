import type { LucideIcon } from 'lucide-react'
import {
  ClipboardList,
  Clock3,
  Handshake,
  Package,
  ReceiptText,
  UsersRound,
} from 'lucide-react'
import crmImage from '../Proposals.png'
import workPlansImage from '../Screenshot 2026-07-20 104755.png'
import timeImage from '../Screenshot 2026-07-14 154441.png'
import billingImage from '../Account_image.png'
import resourcingImage from '../assets/one-record/one-record-resourcing.png'
import assetsImage from '../assets/one-record/one-record-assets.png'

export type ProductModuleAccent = 'purple' | 'blue' | 'orange' | 'pink'

export const PRODUCT_MODULE_ACCENTS: Record<ProductModuleAccent, string> = {
  purple: '#8b5cf6',
  blue: '#3b82f6',
  orange: '#f97316',
  pink: '#ec4899',
}

export interface ProductModule {
  id: string
  step: string
  label: string
  shortLabel: string
  title: string
  description: string
  doesLabel: string
  does: string[]
  highlights: string[]
  accent: ProductModuleAccent
  icon: LucideIcon
  image: string
  imageAlt: string
}

export const PRODUCT_MODULES_BADGE = 'Inside the product'

export const PRODUCT_MODULES_HEADLINE = 'Six modules.'
export const PRODUCT_MODULES_HEADLINE_ACCENT = 'One operating system.'

export const PRODUCT_MODULES_SUBTITLE =
  'Open each module for what Avyro actually does — Win Work, Resourcing, Work Plans, Time, Billing, and Assets — the screens your firm opens on Monday.'

export const PRODUCT_MODULES: ProductModule[] = [
  {
    id: 'win-work',
    step: '01',
    label: 'Win Work',
    shortLabel: 'CRM',
    title: 'Not another admin CRM — a sales engine connected to delivery.',
    description:
      'Pipeline, proposals, and contracts live with the workplan — so teams stop jumping between tools and leaders see the full pursuit in one place. When the deal closes, the project opens with client and fee context already attached.',
    doesLabel: 'What Win Work does',
    does: [
      'Track leads, opportunities, and client conversations in one AEC-native CRM',
      'Build proposals from live client data — DocuSign-ready, not copy-paste',
      'Connect pipeline to workplans so pursuit and delivery share one record',
      'Open a live project the moment a deal is won — budget and contacts included',
    ],
    highlights: [
      'AI-assisted opportunity & client forms',
      'Proposals + contracts on the same deal',
      'Won deal → live project, automatically',
    ],
    accent: 'purple',
    icon: Handshake,
    image: crmImage,
    imageAlt:
      'Avyro Proposal Management editor with slides, document canvas, and proposal elements',
  },
  {
    id: 'resourcing',
    step: '02',
    label: 'Resourcing',
    shortLabel: 'Staff',
    title: 'Staff the right people before the week is wasted.',
    description:
      'Resource Allocation turns won work into a staffed plan. Assign people on Gantt timelines by project and phase, see utilization across the studio, and catch overload before it becomes a missed deadline — not after leadership asks for a spreadsheet.',
    doesLabel: 'What Resourcing does',
    does: [
      'Assign staff to projects and phases on live Gantt timelines',
      'Show workload and capacity across concurrent jobs',
      'Surface overbooking and idle bench early',
      'Give principals a utilization picture they can trust for hiring and pursuits',
    ],
    highlights: [
      'Gantt staffing by phase',
      'Live capacity across projects',
      'Utilization by role & office',
    ],
    accent: 'blue',
    icon: UsersRound,
    image: resourcingImage,
    imageAlt: 'Avyro Resource Allocation view with staffing and capacity across projects',
  },
  {
    id: 'work-plans',
    step: '03',
    label: 'Work Plans',
    shortLabel: 'Plans',
    title: 'One live plan — not five stale copies.',
    description:
      'Phases, milestones, budgets, and files sit on the project everyone shares. When something changes, the whole team sees it. PMs stop maintaining a private spreadsheet that contradicts the fee and the staffing plan.',
    doesLabel: 'What Work Plans do',
    does: [
      'Map phases, milestones, and timelines on the project record',
      'Keep budget next to the work so fee burn is visible in delivery',
      'Share one plan with PMs, principals, and finance — no export copies',
      'Feed the same structure resourcing, time, and billing already use',
    ],
    highlights: [
      'Phases & milestones in one plan',
      'Budget beside the work',
      'No outdated spreadsheet copies',
    ],
    accent: 'orange',
    icon: ClipboardList,
    image: workPlansImage,
    imageAlt: 'Avyro project delivery workspace with stages, milestones, and progress',
  },
  {
    id: 'time-capture',
    step: '04',
    label: 'Time Capture',
    shortLabel: 'Time',
    title: 'Review hours — don’t rebuild Friday from memory.',
    description:
      'Activity Tracker logs work as it happens and Smart Timesheets map it to the right project and phase. Your team approves — they don’t invent. Billable hours stop vanishing at week’s end.',
    doesLabel: 'What Time Capture does',
    does: [
      'Capture desktop activity during the day — not from calendar archaeology',
      'Map time to the correct project and phase with smart keyword matching',
      'Let staff review and approve instead of recall-and-type',
      'Hand approved hours straight to billing on the same record',
    ],
    highlights: [
      'Automatic activity capture',
      'Intelligent project mapping',
      'Review-and-approve workflow',
    ],
    accent: 'pink',
    icon: Clock3,
    image: timeImage,
    imageAlt:
      'Avyro Activity Tracker and Smart Timesheets with intelligent project mapping',
  },
  {
    id: 'billing',
    step: '05',
    label: 'Billing',
    shortLabel: 'Bill',
    title: 'Bill from approved work — not a month-end rebuild.',
    description:
      'Invoices pull from approved timesheets and contracts. Finance stops chasing PMs for numbers. Collections, open balances, and project profitability sit in one view — so cash moves when the work is done.',
    doesLabel: 'What Billing does',
    does: [
      'Generate invoices from approved time and contract terms',
      'Track open balances and collections without a side spreadsheet',
      'Show live profitability by project for principals and finance',
      'Close the loop from win → time → bill on one connected record',
    ],
    highlights: [
      'Invoices from approved hours',
      'Collections in one view',
      'Live project profitability',
    ],
    accent: 'purple',
    icon: ReceiptText,
    image: billingImage,
    imageAlt: 'Avyro Billing & Invoice dashboard with collections and cash flow',
  },
  {
    id: 'assets',
    step: '06',
    label: 'Asset Management',
    shortLabel: 'Assets',
    title: 'Know every seat, renewal, and assignment.',
    description:
      'While projects run, licenses and equipment stay on the firm record. Assign Revit seats and SaaS tools to people or offices, catch ghost seats before they renew, and stop paying for software you cannot see.',
    doesLabel: 'What Asset Management does',
    does: [
      'Register software seats, licenses, and shared equipment in one place',
      'Assign ownership by office, team, or project',
      'Track renewals before they surprise the budget',
      'Keep firm visibility while delivery work continues on the same platform',
    ],
    highlights: [
      'License & seat register',
      'Assignment by team or project',
      'Renewal visibility',
    ],
    accent: 'blue',
    icon: Package,
    image: assetsImage,
    imageAlt: 'Avyro Asset Management register for licenses, seats, and renewals',
  },
]

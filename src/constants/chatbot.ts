export type ChatAction = 'contact' | 'pricing'

export interface ChatOption {
  label: string
  nextNodeId: string
}

export interface ChatNode {
  id: string
  message: string
  options: ChatOption[]
  action?: ChatAction
}

export interface ChatMessage {
  id: string
  type: 'bot' | 'user'
  text: string
}

export const CHAT_ROOT_ID = 'root'

export const CHAT_NODES: Record<string, ChatNode> = {
  root: {
    id: 'root',
    message:
      "Hi there! I'm the Avyro Assistant. Choose a topic below and I'll guide you through the answers.",
    options: [
      { label: 'What is Avyro?', nextNodeId: 'what-is-avyro' },
      { label: 'Explore modules', nextNodeId: 'modules-menu' },
      { label: 'Who is it for?', nextNodeId: 'who-for' },
      { label: 'Pricing & plans', nextNodeId: 'pricing' },
    ],
  },
  'what-is-avyro': {
    id: 'what-is-avyro',
    message:
      'Avyro is a connected operating platform built for AEC firms. It unifies CRM, proposals, resource allocation, activity tracking, smart timesheets, billing, and analytics — so pursuit, delivery, time, and finance run on one set of numbers.',
    options: [
      { label: 'How is Avyro different?', nextNodeId: 'how-different' },
      { label: 'See core modules', nextNodeId: 'modules-menu' },
      { label: 'Who is it for?', nextNodeId: 'who-for' },
      { label: 'Main menu', nextNodeId: 'root' },
    ],
  },
  'how-different': {
    id: 'how-different',
    message:
      'Unlike point tools, Avyro links business development to delivery and billing in one workflow. Smart Timesheets use keyword mapping — not AI-guessed entry — to route hours to the right project, and principals get firm-wide visibility without stitching spreadsheets together.',
    options: [
      { label: 'Tell me about Smart Timesheets', nextNodeId: 'module-timesheets' },
      { label: 'Security & data protection', nextNodeId: 'security' },
      { label: 'Integrations', nextNodeId: 'integrations' },
      { label: 'Main menu', nextNodeId: 'root' },
    ],
  },
  'modules-menu': {
    id: 'modules-menu',
    message: 'Which part of the platform would you like to learn about?',
    options: [
      { label: 'CRM & proposals', nextNodeId: 'module-crm' },
      { label: 'Time & timesheets', nextNodeId: 'module-timesheets' },
      { label: 'Resource & delivery', nextNodeId: 'module-resource' },
      { label: 'Billing & platform', nextNodeId: 'module-billing' },
      { label: 'Main menu', nextNodeId: 'root' },
    ],
  },
  'module-crm': {
    id: 'module-crm',
    message:
      'AI-Powered CRM and Proposal Management help your team track pursuits, win work, and hand off cleanly to delivery — with pipeline visibility principals can actually use.',
    options: [
      { label: 'Resource & staffing', nextNodeId: 'module-resource' },
      { label: 'How billing connects', nextNodeId: 'module-billing' },
      { label: 'Back to modules', nextNodeId: 'modules-menu' },
      { label: 'Main menu', nextNodeId: 'root' },
    ],
  },
  'module-timesheets': {
    id: 'module-timesheets',
    message:
      'Activity Tracker captures work as it happens. Smart Timesheets map that activity to projects using keyword mapping your firm controls — then approved hours flow to billing without Friday reconstruction.',
    options: [
      { label: 'Auto-mapping feature', nextNodeId: 'auto-mapping' },
      { label: 'Billing handoff', nextNodeId: 'module-billing' },
      { label: 'Back to modules', nextNodeId: 'modules-menu' },
      { label: 'Main menu', nextNodeId: 'root' },
    ],
  },
  'auto-mapping': {
    id: 'auto-mapping',
    message:
      'Auto-mapping routes timesheet entries to the correct project and phase using keyword rules — no manual tagging and no chat-style time entry. It is built into Smart Timesheets for firms that want faster, cleaner submission.',
    options: [
      { label: 'Gantt & scheduling', nextNodeId: 'gantt' },
      { label: 'Pricing & plans', nextNodeId: 'pricing' },
      { label: 'Back to modules', nextNodeId: 'modules-menu' },
      { label: 'Main menu', nextNodeId: 'root' },
    ],
  },
  gantt: {
    id: 'gantt',
    message:
      'The Gantt Chart in Resource Allocation gives PMs a visual plan tied to the same projects, people, and phases your timesheets and billing already use — so planned effort and actual effort stay comparable.',
    options: [
      { label: 'Resource allocation overview', nextNodeId: 'module-resource' },
      { label: 'Talk to our team', nextNodeId: 'contact' },
      { label: 'Main menu', nextNodeId: 'root' },
    ],
  },
  'module-resource': {
    id: 'module-resource',
    message:
      'Resource Allocation helps you staff engagements, see utilization and bench time, and plan delivery with Gantt views — using the same project structure PMs and finance already track.',
    options: [
      { label: 'Time & timesheets', nextNodeId: 'module-timesheets' },
      { label: 'Gantt & scheduling', nextNodeId: 'gantt' },
      { label: 'Back to modules', nextNodeId: 'modules-menu' },
      { label: 'Main menu', nextNodeId: 'root' },
    ],
  },
  'module-billing': {
    id: 'module-billing',
    message:
      'Billing & Invoice turns approved time and project structure into invoice lines your clients expect. Platform adds approvals, bulk upload, analytics, and integrations — the layer that keeps the firm connected.',
    options: [
      { label: 'Integrations', nextNodeId: 'integrations' },
      { label: 'Security & compliance', nextNodeId: 'security' },
      { label: 'Back to modules', nextNodeId: 'modules-menu' },
      { label: 'Main menu', nextNodeId: 'root' },
    ],
  },
  'who-for': {
    id: 'who-for',
    message:
      'Avyro is built for architecture, engineering, and construction firms — from growing studios to multi-office enterprises. It supports principals, project managers, operations leaders, and finance teams with role-specific workflows.',
    options: [
      { label: 'For project managers', nextNodeId: 'role-pm' },
      { label: 'For principals & owners', nextNodeId: 'role-principals' },
      { label: 'For finance teams', nextNodeId: 'role-finance' },
      { label: 'Main menu', nextNodeId: 'root' },
    ],
  },
  'role-pm': {
    id: 'role-pm',
    message:
      'Project managers use Avyro for live project health, staffing, schedules, and time against budget — so deadlines and margins are visible before they become fire drills.',
    options: [
      { label: 'Resource & Gantt planning', nextNodeId: 'module-resource' },
      { label: 'Smart Timesheets', nextNodeId: 'module-timesheets' },
      { label: 'Back to roles', nextNodeId: 'who-for' },
      { label: 'Main menu', nextNodeId: 'root' },
    ],
  },
  'role-principals': {
    id: 'role-principals',
    message:
      'Principals and owners get firm-wide visibility across pipeline, utilization, project performance, and billing — one connected view instead of waiting on month-end reports.',
    options: [
      { label: 'CRM & pursuits', nextNodeId: 'module-crm' },
      { label: 'Platform analytics', nextNodeId: 'module-billing' },
      { label: 'Pricing & plans', nextNodeId: 'pricing' },
      { label: 'Main menu', nextNodeId: 'root' },
    ],
  },
  'role-finance': {
    id: 'role-finance',
    message:
      'Finance teams consolidate timesheets, invoices, and project budgets in one system — with approval workflows and audit-ready records instead of spreadsheet reconciliation.',
    options: [
      { label: 'Billing & invoicing', nextNodeId: 'module-billing' },
      { label: 'Security & data', nextNodeId: 'security' },
      { label: 'Talk to our team', nextNodeId: 'contact' },
      { label: 'Main menu', nextNodeId: 'root' },
    ],
  },
  pricing: {
    id: 'pricing',
    message:
      'Avyro offers per-user pricing that scales with your firm. Starter covers core modules; Full Suite adds the Platform layer with approvals, analytics, and integrations. Custom mixes are available for multi-office rollouts.',
    options: [
      { label: 'View pricing page', nextNodeId: 'go-pricing' },
      { label: 'Get a custom quote', nextNodeId: 'contact' },
      { label: 'What is included in Starter?', nextNodeId: 'pricing-starter' },
      { label: 'Main menu', nextNodeId: 'root' },
    ],
  },
  'pricing-starter': {
    id: 'pricing-starter',
    message:
      'Starter includes AI-Powered CRM, Proposal Management, Activity Tracker, Smart Timesheets, Resource Allocation, Asset Management, and Billing & Invoice — connected out of the box for firms getting started on one platform.',
    options: [
      { label: 'Full Suite vs Starter', nextNodeId: 'pricing-full' },
      { label: 'View pricing page', nextNodeId: 'go-pricing' },
      { label: 'Talk to sales', nextNodeId: 'contact' },
      { label: 'Main menu', nextNodeId: 'root' },
    ],
  },
  'pricing-full': {
    id: 'pricing-full',
    message:
      'Full Suite adds the Platform layer: Approval Workflows, Bulk Uploader, Analytics, and Integrations — for firms that want governance, reporting, and connections across their entire stack.',
    options: [
      { label: 'View pricing page', nextNodeId: 'go-pricing' },
      { label: 'Implementation timeline', nextNodeId: 'implementation' },
      { label: 'Talk to sales', nextNodeId: 'contact' },
      { label: 'Main menu', nextNodeId: 'root' },
    ],
  },
  implementation: {
    id: 'implementation',
    message:
      'Avyro is cloud-based with guided onboarding, migration support, and configurable workflows — designed to match how AEC firms already operate without a long IT project.',
    options: [
      { label: 'Support & onboarding', nextNodeId: 'support' },
      { label: 'Integrations', nextNodeId: 'integrations' },
      { label: 'Talk to our team', nextNodeId: 'contact' },
      { label: 'Main menu', nextNodeId: 'root' },
    ],
  },
  integrations: {
    id: 'integrations',
    message:
      'Avyro connects with accounting tools, calendars, document systems, and other firm software — so data moves across your stack without duplicate entry. Platform integrations are included in Full Suite.',
    options: [
      { label: 'Security & data', nextNodeId: 'security' },
      { label: 'Implementation', nextNodeId: 'implementation' },
      { label: 'Talk to our team', nextNodeId: 'contact' },
      { label: 'Main menu', nextNodeId: 'root' },
    ],
  },
  security: {
    id: 'security',
    message:
      'Avyro uses enterprise-grade security: encryption in transit and at rest, role-based access, audit trails, and ongoing monitoring — so project, time, and financial data stay protected.',
    options: [
      { label: 'Integrations', nextNodeId: 'integrations' },
      { label: 'Support offered', nextNodeId: 'support' },
      { label: 'Talk to our team', nextNodeId: 'contact' },
      { label: 'Main menu', nextNodeId: 'root' },
    ],
  },
  support: {
    id: 'support',
    message:
      'Avyro provides dedicated onboarding, in-app guidance, documentation, and responsive support — so your team can adopt the platform and get answers when rollout questions come up.',
    options: [
      { label: 'Implementation timeline', nextNodeId: 'implementation' },
      { label: 'Pricing & plans', nextNodeId: 'pricing' },
      { label: 'Contact our team', nextNodeId: 'contact' },
      { label: 'Main menu', nextNodeId: 'root' },
    ],
  },
  contact: {
    id: 'contact',
    message:
      'Great — I can take you to Get in Touch. Share your firm details there and our team will follow up with the right next steps.',
    options: [{ label: 'Main menu', nextNodeId: 'root' }],
    action: 'contact',
  },
  'go-pricing': {
    id: 'go-pricing',
    message: 'Opening the pricing page so you can compare Starter, Full Suite, and custom options.',
    options: [{ label: 'Main menu', nextNodeId: 'root' }],
    action: 'pricing',
  },
}

export function getChatNode(nodeId: string): ChatNode {
  return CHAT_NODES[nodeId] ?? CHAT_NODES[CHAT_ROOT_ID]
}

export function createRootBotMessage(): ChatMessage {
  const root = getChatNode(CHAT_ROOT_ID)

  return {
    id: 'bot-root',
    type: 'bot',
    text: root.message,
  }
}

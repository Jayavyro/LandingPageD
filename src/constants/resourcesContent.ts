import leadToOpportunityVideo from '../Leadtoopputunity.mp4'
import projectGanttVideo from '../Project_Gant.mp4'
import activityTimesheetVideo from '../Activity_timesheet.mp4'
import billingVideo from '../Billing.mp4'
import type { ResourceTabId } from './resourcesPage'

export interface ResourceArticle {
  id: string
  category: string
  title: string
  summary: string
  body: string[]
}

export interface ResourceCaseStudy {
  id: string
  firmType: string
  headline: string
  challenge: string
  approach: string[]
  outcomes: string[]
}

export interface ResourceVideo {
  id: string
  title: string
  description: string
  modules: string[]
  src: string
}

export interface ResourceDocSection {
  id: string
  title: string
  description: string
  guides: { title: string; body: string }[]
}

export interface ResourceBenefitGroup {
  id: string
  title: string
  intro: string
  items: { title: string; body: string }[]
}

export const RESOURCE_TAB_INTROS: Record<
  Exclude<ResourceTabId, 'competitive-comparisons'>,
  { eyebrow: string; title: string; intro: string }
> = {
  blog: {
    eyebrow: 'Blog',
    title: 'Practical reads for AEC operators',
    intro:
      'Short, direct articles on pursuits, delivery, time, and billing—the workflows Avyro is built around.',
  },
  'case-studies': {
    eyebrow: 'Case studies',
    title: 'How firms reorganize around one platform',
    intro:
      'Representative scenarios from architecture, engineering, and construction firms connecting BD, delivery, and finance.',
  },
  videos: {
    eyebrow: 'Videos',
    title: 'See the workflow, not just the feature list',
    intro:
      'Walkthroughs of the connected path from opportunity to invoice—CRM, resourcing, Activity Tracker, Smart Timesheets, and billing.',
  },
  documentation: {
    eyebrow: 'Documentation',
    title: 'Guides to get your firm running',
    intro:
      'Implementation-focused documentation organized by what teams need first—setup, daily use, and administration.',
  },
  benefits: {
    eyebrow: 'Benefits',
    title: 'What Avyro delivers when modules connect',
    intro:
      'Benefits compound when CRM, delivery, time, and billing share the same project record—not when tools sit side by side.',
  },
}

export const RESOURCE_BLOG_POSTS: ResourceArticle[] = [
  {
    id: 'pursuit-to-project',
    category: 'Business development',
    title: 'Stop rebuilding every pursuit from email',
    summary:
      'When client context lives in inboxes, proposal prep starts late and handoffs to PMs lose fee detail.',
    body: [
      'Most A&E firms do not lose pursuits because of design quality. They lose momentum when BD, marketing, and proposal writers hunt for the same client details in different places.',
      'A connected CRM record means contacts, meeting notes, and opportunity stage carry into Proposal Management. Writers work from context that already exists—not a blank document and a forwarded thread.',
      'When the pursuit closes, the signed fee structure and scope should move into project setup. That is the difference between delivery starting from what was sold and PMs reinterpretating a PDF.',
    ],
  },
  {
    id: 'keyword-timesheets',
    category: 'Time & billing',
    title: 'Why keyword mapping beats Friday reconstruction',
    summary:
      'Smart Timesheets work when rules are explicit—not when software guesses where hours belong.',
    body: [
      'Activity Tracker captures work during the week. Smart Timesheets apply keyword mapping so entries route to the correct project and phase based on rules your firm controls.',
      'That matters because Friday timesheet submission should be review, not archaeology. PMs should not reconcile three versions of the same week from memory, texts, and calendar holds.',
      'Approved hours then move through Approval Workflows into Billing & Invoice using budgets the team already tracks—one chain from delivery to revenue.',
    ],
  },
  {
    id: 'phase-staffing',
    category: 'Resourcing',
    title: 'Staffing by phase, not by spreadsheet tab',
    summary:
      'SD, DD, and CD demand different capacity. Plans only help when someone maintains them.',
    body: [
      'Architecture and engineering firms rarely fail because they lack a Gantt template. They fail because staffing plans live in a file updated after overload already happened.',
      'Resource Allocation on project timelines shows who is assigned where—and where the next month gets tight before deadlines stack up.',
      'Principals and studio leads get utilization they can act on, not a quarterly export that explains what already went wrong.',
    ],
  },
  {
    id: 'integration-reality',
    category: 'Platform',
    title: 'Integrate Ajera and calendars without duplicate entry',
    summary:
      'Firms rarely replace every system on day one. Integrations should remove copy-paste, not add another login.',
    body: [
      'Avyro is built to sit at the center of the firm—not rip out Deltek Ajera, QuickBooks, or Outlook on week one.',
      'Sync project financials with Deltek Ajera, keep Google Calendar and Outlook aligned with milestones, and connect document and finance tools your back office already uses.',
      'The goal is one operating rhythm: delivery teams work in Avyro, finance syncs where it must, and leadership sees margin while projects are still active.',
    ],
  },
]

export const RESOURCE_CASE_STUDIES: ResourceCaseStudy[] = [
  {
    id: 'architecture-studio',
    firmType: 'Architecture studio · ~35 people',
    headline: 'From pursuit chaos to signed fees that match project setup',
    challenge:
      'BD tracked pursuits in email, proposals went out as PDFs, and PMs rebuilt fee structure at kickoff. Principals had no early view of margin by phase.',
    approach: [
      'Centralized client and opportunity records in AI-Powered CRM so proposal writers started from existing context.',
      'Routed proposals through email and DocuSign in one workflow—client signature and firm countersignature stayed on the opportunity.',
      'Staffed SD, DD, and CD phases in Resource Allocation and connected Activity Tracker and Smart Timesheets to the same project budgets.',
    ],
    outcomes: [
      'Proposal turnaround improved because prep was not rebuilt from scratch each time.',
      'Project setup started from signed scope and fees—not reinterpreted documents.',
      'Principals reviewed utilization and billing against the same project record.',
    ],
  },
  {
    id: 'engineering-firm',
    firmType: 'Multi-discipline engineering firm · ~60 people',
    headline: 'Schedules and submitted time finally told one story',
    challenge:
      'Gantt plans lived in one tool, hours in another, and invoicing lagged behind delivery. PMs spent Fridays reconciling instead of managing.',
    approach: [
      'Moved staffing and milestone planning to Resource Allocation with Gantt timelines PMs could maintain weekly.',
      'Introduced Activity Tracker upstream of Smart Timesheets with keyword mapping rules per project type.',
      'Routed approved hours through Approval Workflows into Billing & Invoice without re-keying.',
    ],
    outcomes: [
      'Submitted time aligned to planned phases instead of post-hoc spreadsheet fixes.',
      'Finance received approved records—not email threads chasing missing approvals.',
      'Leadership saw budget variance while projects were active, not only at month-end.',
    ],
  },
  {
    id: 'construction-operator',
    firmType: 'Construction operator · field and office teams',
    headline: 'Field activity and back-office billing on one timeline',
    challenge:
      'Site supervisors reconstructed hours at week end. Budget status was always slightly old, and invoicing waited on manual cleanup.',
    approach: [
      'Logged field and office activity during the week in Activity Tracker against active jobs.',
      'Applied Smart Timesheets with keyword mapping so submission was review, not rebuild.',
      'Connected approved time to Billing & Invoice and tracked shared equipment through Asset Management.',
    ],
    outcomes: [
      'Hours moved from the field to finance without a separate reconciliation pass.',
      'PMs and leadership saw job budget status against submitted time—not stale exports.',
      'Equipment and software assets assigned to jobs stayed visible alongside labor.',
    ],
  },
]

export const RESOURCE_VIDEOS: ResourceVideo[] = [
  {
    id: 'win-projects',
    title: 'From lead to opportunity',
    description:
      'How CRM context flows into pursuits and proposals so BD responds while interest is high.',
    modules: ['AI-Powered CRM', 'Proposal Management'],
    src: leadToOpportunityVideo,
  },
  {
    id: 'plan-deliver',
    title: 'Plan and staff projects on a Gantt',
    description:
      'Resource Allocation for timelines, assignments, and capacity across active delivery.',
    modules: ['Resource Allocation'],
    src: projectGanttVideo,
  },
  {
    id: 'capture-time',
    title: 'Activity capture into Smart Timesheets',
    description:
      'Activity Tracker upstream of keyword-mapped timesheets—submission as review, not reconstruction.',
    modules: ['Activity Tracker', 'Smart Timesheets'],
    src: activityTimesheetVideo,
  },
  {
    id: 'billing-flow',
    title: 'Approved work to invoice',
    description:
      'The path from signed-off hours to Billing & Invoice using budgets PMs already track.',
    modules: ['Approval Workflows', 'Billing & Invoice'],
    src: billingVideo,
  },
]

export const RESOURCE_DOC_SECTIONS: ResourceDocSection[] = [
  {
    id: 'getting-started',
    title: 'Getting started',
    description: 'What to configure before your team logs real project work.',
    guides: [
      {
        title: 'Firm setup and roles',
        body:
          'Define offices, roles, and approval paths so timesheets, expenses, and invoices route to the right people from day one.',
      },
      {
        title: 'Importing clients and projects',
        body:
          'Use Bulk Uploader for structured imports of clients, projects, rates, and reference data—validate rows before they become production records.',
      },
      {
        title: 'Connecting integrations',
        body:
          'Configure Deltek Ajera, calendar, and finance connections so project data syncs without duplicate entry between systems.',
      },
    ],
  },
  {
    id: 'daily-use',
    title: 'Daily use by team',
    description: 'Guides aligned to how BD, PMs, and finance work through the week.',
    guides: [
      {
        title: 'CRM and pursuits',
        body:
          'Maintain client records, opportunity stages, and contact history so proposals start from context—not blank documents.',
      },
      {
        title: 'Resourcing and schedules',
        body:
          'Assign staff on Gantt timelines by project and phase. Update plans weekly so capacity reflects reality.',
      },
      {
        title: 'Activity Tracker and Smart Timesheets',
        body:
          'Log work during the week. Smart Timesheets apply keyword mapping to place hours on the correct project before approval.',
      },
      {
        title: 'Proposals and DocuSign',
        body:
          'Send fee proposals by email, collect client signature through DocuSign, and countersign in the same Proposal Management workflow.',
      },
    ],
  },
  {
    id: 'finance-ops',
    title: 'Finance and operations',
    description: 'Billing, assets, and reporting for back-office teams.',
    guides: [
      {
        title: 'Approval Workflows',
        body:
          'Route timesheets and billing requests through a single queue—pending, approved, and rejected items stay auditable.',
      },
      {
        title: 'Billing & Invoice',
        body:
          'Turn approved time and project charges into invoice lines using budgets tracked in delivery—not a separate spreadsheet.',
      },
      {
        title: 'Asset Management',
        body:
          'Track software seats, equipment, and shared resources by office, team, or project—including renewals and utilization.',
      },
      {
        title: 'Analytics and Executive Overview',
        body:
          'Review margin, utilization, and budget variance from live delivery data—not last quarter’s export.',
      },
    ],
  },
]

export const RESOURCE_BENEFIT_GROUPS: ResourceBenefitGroup[] = [
  {
    id: 'bd-proposals',
    title: 'Business development and proposals',
    intro: 'Win work faster when pursuits do not reset at every gate.',
    items: [
      {
        title: 'CRM context carries forward',
        body: 'Client history, contacts, and opportunity notes pre-fill proposals instead of living in email.',
      },
      {
        title: 'Proposals sent and signed in one flow',
        body: 'Email delivery and DocuSign signing—client and firm countersignature—stay on the opportunity record.',
      },
      {
        title: 'Cleaner handoff when you win',
        body: 'Project setup begins from signed scope and fees, not a PDF someone reinterprets.',
      },
    ],
  },
  {
    id: 'delivery',
    title: 'Project delivery and resourcing',
    intro: 'Plans only help when PMs can maintain them against real capacity.',
    items: [
      {
        title: 'Gantt staffing PMs actually update',
        body: 'Resource Allocation shows assignments by phase so overload surfaces before deadlines slip.',
      },
      {
        title: 'One project record for the team',
        body: 'Schedules, hours, and budgets reference the same engagement—not three exports.',
      },
      {
        title: 'Visibility principals can act on',
        body: 'Utilization and budget variance while work is active, not after the fact.',
      },
    ],
  },
  {
    id: 'time-billing',
    title: 'Time, approvals, and billing',
    intro: 'The chain from field work to invoice should not require reconstruction.',
    items: [
      {
        title: 'Activity captured upstream',
        body: 'Activity Tracker logs work during the week before Smart Timesheets apply keyword mapping.',
      },
      {
        title: 'Approvals with an audit trail',
        body: 'Approval Workflows route submissions to the right manager with a clear pending queue.',
      },
      {
        title: 'Billing tied to approved work',
        body: 'Billing & Invoice uses the same project budgets delivery teams track—less re-keying for finance.',
      },
    ],
  },
  {
    id: 'platform',
    title: 'Platform and integrations',
    intro: 'Connect the stack you have—not replace everything on day one.',
    items: [
      {
        title: 'Deltek Ajera and finance sync',
        body: 'Project financials sync without rebuilding invoices by hand.',
      },
      {
        title: 'Calendars aligned to milestones',
        body: 'Google Calendar and Outlook stay tied to project timelines and staffing.',
      },
      {
        title: 'Software and equipment tracked',
        body: 'Asset Management covers licenses, seats, and shared tools assigned to active work.',
      },
    ],
  },
]

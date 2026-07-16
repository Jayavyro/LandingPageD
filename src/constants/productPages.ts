import type { ModuleProductId, ProductRouteId, RelatedModuleId } from './productRoutes'

export interface ProductFeature {
  title: string
  description: string
}

export interface ProductFaq {
  question: string
  answer: string
}

export interface ProductWorkflow {
  eyebrow: string
  title: string
  body: string
  flow: string[]
}

export interface ProductPageContent {
  id: ModuleProductId
  category: string
  headline: string
  subtitle: string
  featuresEyebrow: string
  featuresTitle: string
  featuresIntro: string
  pains: string[]
  features: ProductFeature[]
  workflow: ProductWorkflow
  relatedIds: RelatedModuleId[]
  faqs: ProductFaq[]
}

export interface PlatformModuleContent {
  id: string
  title: string
  tagline: string
  description: string
  points: string[]
  partnerIds?: string[]
}

export const PLATFORM_PAGE = {
  category: 'Platform',
  headline: 'The layer that keeps your firm connected',
  subtitle:
    'Approvals, imports, reporting, and integrations are not side tools—they are how Avyro links CRM, delivery, time, and billing into one operating rhythm.',
  modules: [
    {
      id: 'approvals',
      title: 'Approval Workflows',
      tagline: 'Sign-offs that do not stall the week',
      description:
        'Timesheets, expenses, and billing requests move through clear approval paths. Managers see what is waiting, staff know what is held up, and finance gets clean records without chasing email threads.',
      points: [
        'Route timesheets and invoices to the right approver by role or project',
        'Track pending, approved, and rejected items in one queue',
        'Keep an audit trail for compliance and internal review',
      ],
    },
    {
      id: 'bulk-uploader',
      title: 'Bulk Uploader',
      tagline: 'Bring existing data in without a manual marathon',
      description:
        'Moving off spreadsheets or a legacy system should not mean weeks of copy-paste. Import clients, projects, rates, and historical records in structured batches so your team starts from something usable on day one.',
      points: [
        'Upload structured files for clients, projects, and reference data',
        'Validate rows before they hit production records',
        'Cut onboarding time for finance and operations teams',
      ],
    },
    {
      id: 'analytics',
      title: 'Analytics',
      tagline: 'Numbers that reflect what is happening now',
      description:
        'Project margins, utilization, and budget variance only help if they are current. Analytics pulls from timesheets, resourcing, and billing so PMs and principals react to this month—not last quarter’s export.',
      points: [
        'Track profitability and budget variance by project and phase',
        'Monitor utilization and billable ratios across teams',
        'Surface trends principals can use for staffing and pipeline calls',
      ],
    },
    {
      id: 'integrations',
      title: 'Integrations',
      tagline: 'Deltek Ajera, calendars, and the tools you already use',
      description:
        'Avyro is built to sit at the center of your firm—not replace every system on day one. Sync with Deltek Ajera for project accounting, keep Google Calendar and Outlook tied to milestones and staffing, and connect finance, files, and document workflows so data moves without copy-paste.',
      points: [
        'Sync billing and project financials with Deltek Ajera without rebuilding invoices by hand',
        'Align Google Calendar and Outlook with project timelines, deadlines, and team availability',
        'Connect QuickBooks, SharePoint, and the file and finance tools your back office relies on',
        'Reduce double entry between Avyro and the systems your teams use every day',
      ],
      partnerIds: [
        'deltek-ajera',
        'google-calendar',
        'microsoft-outlook',
        'quickbooks',
        'sharepoint',
      ],
    },
  ] satisfies PlatformModuleContent[],
  workflow: {
    eyebrow: 'Where it fits',
    title: 'The connective layer across your firm',
    body:
      'Platform modules sit underneath every workflow—gating time and billing, moving data in at go-live, and keeping leadership and external systems aligned with what project teams do every day.',
    flow: ['Approval Workflows', 'Bulk Uploader', 'Analytics', 'Integrations'],
  },
}

export const PRODUCT_PAGES: Record<ModuleProductId, ProductPageContent> = {
  crm: {
    id: 'crm',
    category: 'Business Operations',
    headline: 'A CRM that fits how A&E firms actually sell work',
    subtitle:
      'Your pipeline should not live across three spreadsheets and someone’s inbox. Keep clients, opportunities, and handoffs in one record—from first conversation to signed engagement.',
    featuresEyebrow: 'In practice',
    featuresTitle: 'What CRM looks like in daily use',
    featuresIntro:
      'These are the shifts BD, principals, and PMs notice once clients and pursuits live in one system—not a generic feature list.',
    pains: [
      'Opportunity details get retyped into proposal templates',
      'Nobody has a clear view of pipeline by sector or office',
      'BD hands off to delivery without the full client story',
    ],
    features: [
      {
        title: 'One record per client',
        description:
          'Contacts, notes, and opportunities stay tied to the same client. When a lead progresses, you add to the record—you do not start over in another tool.',
      },
      {
        title: 'Pipeline you can scan in seconds',
        description:
          'See what is active by stage, sector, and estimated value. Principals and BD leads get a picture they can use in Monday meetings—not a deck someone rebuilt Sunday night.',
      },
      {
        title: 'Less re-entry at proposal time',
        description:
          'Client and opportunity data carries into proposal workflows. Your team edits scope and fees—not the same address and contact block for the fifth time.',
      },
      {
        title: 'Handoff that delivery can trust',
        description:
          'When an opportunity closes, project setup starts with context already in place. PMs are not guessing what was promised in the sales process.',
      },
    ],
    workflow: {
      eyebrow: 'Where it fits',
      title: 'Where the firm loop starts',
      body:
        'CRM is the first record of a client relationship. When a pursuit closes, that history moves into proposals and project setup—without someone retyping names, contacts, or scope from email.',
      flow: ['AI-Powered CRM', 'Proposal Management', 'Resource Allocation', 'Billing & Invoice'],
    },
    relatedIds: ['proposals', 'resource', 'billing'],
    faqs: [
      {
        question: 'Do we need a separate CRM alongside Avyro?',
        answer:
          'For most A&E firms, no. Avyro CRM is built around how practices track clients, pursuits, and wins—not generic B2B sales stages that do not match project-based work.',
      },
      {
        question: 'Can principals see pipeline without asking BD for a report?',
        answer:
          'Yes. Pipeline and opportunity data roll up for leadership views, so forecasting discussions start from live numbers instead of a manually updated spreadsheet.',
      },
    ],
  },
  billing: {
    id: 'billing',
    category: 'Business Operations',
    headline: 'Billing that starts from approved work—not a blank invoice',
    subtitle:
      'Late timesheets and disconnected billing slow cash flow. Tie invoices to approved hours and project budgets so finance sends accurate bills without reconstructing the month from memory.',
    featuresEyebrow: 'In practice',
    featuresTitle: 'What billing looks like with connected data',
    featuresIntro:
      'When approved time and budgets feed invoices directly, finance spends less time correcting lines and more time getting bills out the door.',
    pains: [
      'Invoices go out late because timesheet approvals drag',
      'PMs and finance use different versions of project budgets',
      'WIP is hard to explain when data lives in multiple places',
    ],
    features: [
      {
        title: 'Invoices built from approved time',
        description:
          'Approved Smart Timesheets flow into billing lines. You are not re-keying hours that were already captured and reviewed.',
      },
      {
        title: 'Budget context on every bill',
        description:
          'See fee burn and remaining budget while invoicing. PMs and finance work from the same project numbers—not parallel spreadsheets.',
      },
      {
        title: 'Fewer back-and-forth corrections',
        description:
          'When time, rates, and phases align in one system, clients receive cleaner invoices and your team spends less time on credit memos and rework.',
      },
      {
        title: 'Cash flow your principals can read',
        description:
          'Billing status connects to Analytics and Executive Overview, so leadership sees what is invoiced, outstanding, and at risk—not just what accounting remembered to mention.',
      },
    ],
    workflow: {
      eyebrow: 'Where it fits',
      title: 'Where approved work becomes revenue',
      body:
        'Billing is the last step in the time chain. Hours that cleared approval land here as invoice lines—using the same project budgets PMs and finance already track, not a separate set of numbers.',
      flow: ['Smart Timesheets', 'Approval Workflows', 'Billing & Invoice', 'Analytics'],
    },
    relatedIds: ['timesheets', 'activity', 'platform'],
    faqs: [
      {
        question: 'Does billing replace our accounting system?',
        answer:
          'Avyro handles project billing and invoicing inside your operating workflow. Many firms still sync to their general ledger through Platform integrations—without rebuilding invoices by hand.',
      },
      {
        question: 'Can we bill by phase, task, or fee structure?',
        answer:
          'Yes. Invoices reflect how your projects are structured—phases, roles, and fee types—so bills match the contract your client expects.',
      },
    ],
  },
  assets: {
    id: 'assets',
    category: 'Business Operations',
    headline: 'Know what the firm owns—and whether it is being used',
    subtitle:
      'Software assets, licenses, equipment, and shared resources are easy to lose track of across offices. Register Revit seats, SaaS subscriptions, and firm-owned tools once—assign them to teams or projects, and see utilization before you renew or buy more.',
    featuresEyebrow: 'In practice',
    featuresTitle: 'What asset tracking covers day to day',
    featuresIntro:
      'One register for software assets and firm equipment—who holds each license, where shared devices sit, and whether seats are actually in use on active work.',
    pains: [
      'Software seats and SaaS subscriptions live in one list, equipment in another',
      'Nobody knows which project has the license or shared device',
      'Software renewals and purchases happen without seat or usage context',
    ],
    features: [
      {
        title: 'Software assets tracked by seat and renewal',
        description:
          'Register design software, SaaS tools, plugins, and license keys in the same system as firm equipment. See who holds each seat, when renewals are due, and what is assigned to active projects.',
      },
      {
        title: 'A single register for firm assets',
        description:
          'Track software licenses, laptops, shared devices, and other resources in one place. Assign ownership by office, team, or project instead of maintaining separate IT and ops spreadsheets.',
      },
      {
        title: 'Utilization you can act on',
        description:
          'See which software seats are in use, which are idle, and what is tied to delivery work. That makes renewal, reclamation, and purchase decisions straightforward.',
      },
      {
        title: 'Tied to the projects that use them',
        description:
          'Link software assets and equipment to projects so PMs and operations know what is allocated where—not just what finance or IT purchased last quarter.',
      },
    ],
    workflow: {
      eyebrow: 'Where it fits',
      title: 'Alongside delivery, not separate from it',
      body:
        'Asset Management supports how the firm runs projects—software seats, licenses, equipment, and shared resources stay visible while teams staff engagements and operations track what is actually in use.',
      flow: ['Resource Allocation', 'Asset Management', 'Analytics', 'Billing & Invoice'],
    },
    relatedIds: ['resource', 'platform', 'billing'],
    faqs: [
      {
        question: 'Does this cover software assets as well as hardware?',
        answer:
          'Yes. Firms track software assets—design tool seats, SaaS subscriptions, plugins, and license keys—alongside laptops, shared devices, and other equipment. Renewals, assignments, and utilization stay in one register.',
      },
      {
        question: 'Who typically maintains the asset register?',
        answer:
          'Operations and IT often own the list, but PMs and office leads update assignments as projects change.',
      },
    ],
  },
  proposals: {
    id: 'proposals',
    category: 'Business Operations',
    headline: 'Proposals that start from the opportunity—not a blank document',
    subtitle:
      'Fee proposals take too long when every pursuit begins from scratch. Pull client and scope context from CRM, apply your templates, send the proposal by email, and get it signed through DocuSign—client signature and your countersignature in one workflow.',
    featuresEyebrow: 'In practice',
    featuresTitle: 'What proposal prep looks like with CRM context',
    featuresIntro:
      'Opportunity data carries forward, fee structures stay consistent, and your team moves from draft to client signature without leaving the proposal workflow.',
    pains: [
      'Proposal writers hunt for client details in email and old decks',
      'Fee structures get rebuilt for every pursuit',
      'Signatures happen outside the system—chasing PDFs and DocuSign links by email',
    ],
    features: [
      {
        title: 'Templates that match how you price work',
        description:
          'Start from proposal structures your firm already uses—phases, roles, multipliers—instead of rebuilding the same skeleton every time.',
      },
      {
        title: 'CRM data carries forward',
        description:
          'Client name, contacts, and opportunity context pre-fill the proposal. Writers focus on scope and fees—not administrative copy.',
      },
      {
        title: 'Email and DocuSign in one workflow',
        description:
          'Send the proposal to your client by email, route it through DocuSign for their signature, then countersign yourself—all without exporting PDFs or leaving Proposal Management.',
      },
      {
        title: 'Cleaner handoff when you win',
        description:
          'Accepted proposals connect to project setup so delivery starts with the fee structure and scope BD actually sold.',
      },
    ],
    workflow: {
      eyebrow: 'Where it fits',
      title: 'Between winning work and starting delivery',
      body:
        'Proposals sit in the handoff from BD to PM. Send the fee proposal by email, collect the client signature through DocuSign, countersign in the same workflow, and hand delivery the scope and fee structure your team actually sold.',
      flow: ['AI-Powered CRM', 'Proposal Management', 'Resource Allocation', 'Billing & Invoice'],
    },
    relatedIds: ['crm', 'resource', 'billing'],
    faqs: [
      {
        question: 'Can we keep our existing proposal format?',
        answer:
          'Avyro supports structured proposal workflows around how A&E firms price phases and roles. Your team still controls scope language and fee logic—the system removes the repetitive assembly.',
      },
      {
        question: 'Can we send proposals for signature without leaving Avyro?',
        answer:
          'Yes. Send the proposal to your client by email and route it through DocuSign from the same workflow—the client signs electronically, you countersign, and the executed proposal stays connected to the opportunity.',
      },
      {
        question: 'What happens after a proposal is accepted?',
        answer:
          'The opportunity moves into project setup with client and fee context intact, so PMs are not reconstructing the deal from a PDF.',
      },
    ],
  },
  resource: {
    id: 'resource',
    category: 'Project Execution',
    headline: 'Staffing and schedules your PMs can actually maintain',
    subtitle:
      'Resource planning falls apart when it lives in a spreadsheet someone updates after the fact. Assign people on Gantt timelines, see utilization by phase, and catch overload before it becomes a missed deadline.',
    featuresEyebrow: 'In practice',
    featuresTitle: 'What planning and staffing look like on Avyro',
    featuresIntro:
      'Gantt timelines and capacity views PMs can actually keep current—not a staffing file that is wrong by the time leadership asks for it.',
    pains: [
      'Nobody knows who is overbooked until the week is already broken',
      'Schedules and staffing live in different files',
      'Principal asks for capacity and PMs need a day to compile the answer',
    ],
    features: [
      {
        title: 'Gantt planning built for project delivery',
        description:
          'Map phases, milestones, and dependencies on a timeline PMs recognize—not a generic task board that ignores how design projects run.',
      },
      {
        title: 'Assignments tied to real capacity',
        description:
          'Put the right people on the right phases and see workload build across concurrent projects. Overbooking shows up early, not after someone burns out.',
      },
      {
        title: 'Utilization across offices and roles',
        description:
          'Operations and principals get a utilization picture they can trust for hiring, backlog decisions, and which pursuits to pursue.',
      },
      {
        title: 'Connected to time and billing',
        description:
          'When staffing and schedules live in the same platform as timesheets, planned effort and actual effort are easier to compare.',
      },
    ],
    workflow: {
      eyebrow: 'Where it fits',
      title: 'At the center of delivery planning',
      body:
        'Resource Allocation is how won work becomes a staffed plan. Schedules and assignments here are what PMs compare against submitted time—and what principals look at when capacity gets tight.',
      flow: ['Won work / CRM', 'Resource Allocation', 'Activity Tracker', 'Smart Timesheets'],
    },
    relatedIds: ['activity', 'timesheets', 'crm'],
    faqs: [
      {
        question: 'Is this a full HR or payroll system?',
        answer:
          'No. Resource Allocation is for project staffing and capacity—who is on which project, when, and at what utilization—not payroll processing.',
      },
      {
        question: 'Can we plan across multiple offices?',
        answer:
          'Yes. Firms with multiple studios use it to see capacity and assignments across offices before committing to new work.',
      },
    ],
  },
  activity: {
    id: 'activity',
    category: 'Project Execution',
    headline: 'A running log of what your team worked on today',
    subtitle:
      'Timesheets fail when people cannot remember Friday what they did on Tuesday. Activity Tracker captures work as it happens—so Smart Timesheets have something accurate to start from.',
    featuresEyebrow: 'In practice',
    featuresTitle: 'What activity capture looks like during the week',
    featuresIntro:
      'Work gets logged as it happens, so the timesheet starts from a record—not from memory at the end of the week.',
    pains: [
      'Staff reconstruct the week from calendar invites and memory',
      'PMs cannot see activity patterns until timesheets are submitted',
      'Billable work gets under-reported because small tasks are forgotten',
    ],
    features: [
      {
        title: 'Capture work during the day',
        description:
          'Log activity as you move between projects and tasks. The record is there when it is time to submit a timesheet—not when someone is trying to remember at 4pm on Friday.',
      },
      {
        title: 'Context PMs can review early',
        description:
          'See how effort is accumulating on a project before the formal timesheet lands. That helps catch misallocated time while the week is still fixable.',
      },
      {
        title: 'The upstream source for Smart Timesheets',
        description:
          'Activity Tracker feeds timesheet generation. You are not asking people to fill two systems—activity becomes the starting point for submission.',
      },
      {
        title: 'Fewer “I forgot to log that” gaps',
        description:
          'When capture is lightweight and continuous, firms recover billable hours that used to disappear in reconstruction mode.',
      },
    ],
    workflow: {
      eyebrow: 'Where it fits',
      title: 'Upstream of every timesheet',
      body:
        'Activity Tracker is the first capture point in the time chain. What gets logged during the week is what Smart Timesheets start from—so Friday submission is review, not reconstruction.',
      flow: ['Activity Tracker', 'Smart Timesheets', 'Approval Workflows', 'Billing & Invoice'],
    },
    relatedIds: ['timesheets', 'billing', 'resource'],
    faqs: [
      {
        question: 'Do employees log every click?',
        answer:
          'No. Activity Tracker is meant for meaningful work blocks on projects—not surveillance. Teams log the work that matters for billing and project reporting.',
      },
      {
        question: 'How does this connect to timesheets?',
        answer:
          'Logged activity flows into Smart Timesheets, which map work to projects using keyword mapping before staff review and submit.',
      },
    ],
  },
  timesheets: {
    id: 'timesheets',
    category: 'Project Execution',
    headline: 'Timesheets that route themselves to the right project',
    subtitle:
      'Manual project codes and Friday reminders are why timesheets stay late. Smart Timesheets use keyword mapping to match activity to projects—then move through approvals toward billing.',
    featuresEyebrow: 'In practice',
    featuresTitle: 'What timesheet submission looks like with keyword mapping',
    featuresIntro:
      'Activity maps to the right project, managers review instead of chase, and approved hours are ready for billing without a second pass.',
    pains: [
      'Employees pick the wrong project code and fix it later',
      'Finance waits on late submissions every month',
      'Managers chase timesheets instead of reviewing them',
    ],
    features: [
      {
        title: 'Keyword mapping—not guesswork',
        description:
          'Activities map to projects based on keywords your firm defines. Staff spend less time hunting for the right code and more time confirming what is already close.',
      },
      {
        title: 'Built from Activity Tracker',
        description:
          'The timesheet starts from work already logged—not a blank grid. That is the difference between reconstruction and review.',
      },
      {
        title: 'Approval paths that finance can trust',
        description:
          'Submitted timesheets route through Approval Workflows so managers sign off before hours hit billing. Clean chain, fewer surprises on the invoice.',
      },
      {
        title: 'More billable time actually captured',
        description:
          'When submission is faster and mapping is smarter, firms stop leaving hours on the table simply because the process was painful.',
      },
    ],
    workflow: {
      eyebrow: 'Where it fits',
      title: 'The bridge from delivery to finance',
      body:
        'Smart Timesheets connect field work to back-office billing. Keyword mapping puts hours on the right project; approvals sign them off before they become invoice lines.',
      flow: ['Activity Tracker', 'Smart Timesheets', 'Approval Workflows', 'Billing & Invoice'],
    },
    relatedIds: ['activity', 'billing', 'platform'],
    faqs: [
      {
        question: 'Is this AI-assisted or conversational time entry?',
        answer:
          'No. Smart Timesheets map activities to projects using keyword mapping—a rules-based approach your firm controls—not chat-style or AI-guessed entry.',
      },
      {
        question: 'Can we enforce deadlines and reminders?',
        answer:
          'Yes. Firms use approval queues and reporting to spot late submissions early instead of discovering gaps at billing close.',
      },
    ],
  },
}

export const PRODUCT_PAGE_LABELS: Record<ProductRouteId, string> = {
  crm: 'AI-Powered CRM',
  billing: 'Billing & Invoice',
  assets: 'Asset Management',
  proposals: 'Proposal Management',
  resource: 'Resource Allocation',
  activity: 'Activity Tracker',
  timesheets: 'Smart Timesheets',
  'auto-mapping': 'Auto-mapping',
  'gantt-chart': 'Gantt Chart',
  platform: 'Platform',
}

export function getProductPage(id: string | undefined): ProductPageContent | null {
  if (!id || id === 'platform' || !(id in PRODUCT_PAGES)) {
    return null
  }

  return PRODUCT_PAGES[id as ModuleProductId]
}

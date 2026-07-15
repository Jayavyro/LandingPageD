import { PRODUCT_ROUTES } from './productRoutes'
import { INDUSTRY_ROUTES, type IndustryRouteId } from './industryRoutes'

export interface IndustryPressure {
  title: string
  body: string
}

export interface IndustryCapability {
  title: string
  body: string
  modules: string[]
}

export interface IndustryOutcome {
  label: string
  description: string
}

export interface IndustryFaq {
  question: string
  answer: string
}

export interface IndustryModuleLink {
  label: string
  href: string
}

export interface IndustryPageContent {
  id: IndustryRouteId
  eyebrow: string
  headline: string
  subtitle: string
  heroImage: { src: string; alt: string }
  pullQuote: string
  contextTitle: string
  contextBody: string
  pressures: IndustryPressure[]
  capabilities: IndustryCapability[]
  moduleLinks: IndustryModuleLink[]
  outcomes: IndustryOutcome[]
  faqs: IndustryFaq[]
  relatedIds: IndustryRouteId[]
}

export const INDUSTRY_PAGE_LABELS: Record<IndustryRouteId, string> = {
  architecture: 'Architecture',
  engineering: 'Engineering',
  construction: 'Construction',
}

export const INDUSTRY_PAGES: Record<IndustryRouteId, IndustryPageContent> = {
  architecture: {
    id: 'architecture',
    eyebrow: 'For architecture firms',
    headline: 'Run the studio—not another spreadsheet between phases',
    subtitle:
      'Architecture firms juggle pursuits, design phases, fee proposals, and client sign-offs while every project has its own timeline. Avyro connects business development, resourcing, and billing so the studio stays aligned from first meeting to final invoice.',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
      alt: 'Modern architecture studio with glass building exterior',
    },
    pullQuote:
      'The best firms do not lose scope, fees, or client context when a pursuit becomes a project.',
    contextTitle: 'What architecture firms need from their operating system',
    contextBody:
      'Design work moves through SD, DD, and CD with different staffing needs at each phase. Meanwhile BD is chasing the next pursuit, principals want margin visibility, and finance needs clean time-to-billing. When those threads live in separate tools, PMs rebuild context and principals react late.',
    pressures: [
      {
        title: 'Pursuits start from scratch every time',
        body: 'Client history, contacts, and opportunity notes sit in email while proposal writers hunt for the same details again.',
      },
      {
        title: 'Phase staffing is hard to see early',
        body: 'DD needs more senior staff than SD, but capacity planning often happens in a spreadsheet updated after the fact.',
      },
      {
        title: 'Signed fees do not match project setup',
        body: 'When proposals live outside delivery systems, PMs reinterpret scope and fee structure instead of starting from what was sold.',
      },
    ],
    capabilities: [
      {
        title: 'Pursuits that carry into project setup',
        body: 'AI-Powered CRM holds client and opportunity context. Proposal Management turns that into fee proposals you can send by email and sign through DocuSign—then hand delivery the scope your team actually sold.',
        modules: ['AI-Powered CRM', 'Proposal Management'],
      },
      {
        title: 'Staffing across design phases',
        body: 'Resource Allocation shows who is on which phase, where overload is building, and what the next month looks like—so studio leads adjust before deadlines slip.',
        modules: ['Resource Allocation', 'Analytics'],
      },
      {
        title: 'Time and billing tied to the project',
        body: 'Activity Tracker and Smart Timesheets capture work against the right project and phase. Billing & Invoice turns approved hours into invoices without a separate reconciliation step.',
        modules: ['Activity Tracker', 'Smart Timesheets', 'Billing & Invoice'],
      },
    ],
    moduleLinks: [
      { label: 'AI-Powered CRM', href: PRODUCT_ROUTES.crm },
      { label: 'Proposal Management', href: PRODUCT_ROUTES.proposals },
      { label: 'Resource Allocation', href: PRODUCT_ROUTES.resource },
      { label: 'Smart Timesheets', href: PRODUCT_ROUTES.timesheets },
      { label: 'Billing & Invoice', href: PRODUCT_ROUTES.billing },
    ],
    outcomes: [
      {
        label: 'Cleaner pursuits-to-delivery handoff',
        description: 'Client context and signed fees move forward—not rebuilt from PDFs.',
      },
      {
        label: 'Phase-aware resourcing',
        description: 'Staffing reflects SD, DD, and CD demand instead of guesswork.',
      },
      {
        label: 'Margin visibility principals can use',
        description: 'Time, resourcing, and billing connect so leadership sees project health early.',
      },
    ],
    faqs: [
      {
        question: 'Is Avyro only for large architecture firms?',
        answer:
          'No. Growing studios and mid-sized firms use Avyro to connect pursuits, delivery, and billing without standing up a full ERP implementation.',
      },
      {
        question: 'Can we send proposals for client signature from Avyro?',
        answer:
          'Yes. Proposal Management supports email delivery and DocuSign signing in one workflow—client signature and your countersignature stay connected to the opportunity.',
      },
      {
        question: 'How does resourcing work across design phases?',
        answer:
          'Resource Allocation lets you plan staff by project and phase on Gantt timelines, so studio leads see capacity before crunch periods hit.',
      },
    ],
    relatedIds: ['engineering', 'construction'],
  },
  engineering: {
    id: 'engineering',
    eyebrow: 'For engineering firms',
    headline: 'Deliverables, schedules, and utilization—without the reconciliation gap',
    subtitle:
      'Engineering firms run complex project schedules, subconsultant coordination, and deliverable tracking while finance needs defensible time and billing. Avyro links resourcing, activity capture, and invoicing so PMs and principals work from the same numbers.',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=1400&q=80',
      alt: 'Engineering team reviewing structural plans at a project site',
    },
    pullQuote:
      'Engineering delivery breaks down when schedules, hours, and invoices tell three different stories.',
    contextTitle: 'What engineering firms need from their operating system',
    contextBody:
      'Projects span disciplines, subconsultants, and milestone deliverables. PMs need schedule clarity, operations needs utilization visibility, and finance needs hours that map to contract budgets. Disconnected systems mean Friday timesheet chaos and month-end surprises.',
    pressures: [
      {
        title: 'Schedules live apart from actual hours',
        body: 'Gantt plans get updated manually while submitted time tells a different story about where the team really spent the week.',
      },
      {
        title: 'Deliverable pressure hides overload',
        body: 'When milestone dates stack up, it is hard to see which project managers are carrying too much until deadlines are already at risk.',
      },
      {
        title: 'Billing lags behind delivery reality',
        body: 'Approved hours sit in one system while invoices get rebuilt from exports—stretching the gap between work done and revenue recognized.',
      },
    ],
    capabilities: [
      {
        title: 'Planning PMs can maintain',
        body: 'Resource Allocation puts people on Gantt timelines by project and phase. Assignments stay visible so staffing changes reflect what is actually planned—not a spreadsheet from last month.',
        modules: ['Resource Allocation'],
      },
      {
        title: 'Activity capture upstream of timesheets',
        body: 'Activity Tracker logs work during the week. Smart Timesheets apply keyword mapping so hours land on the right project—Friday submission becomes review, not reconstruction.',
        modules: ['Activity Tracker', 'Smart Timesheets'],
      },
      {
        title: 'Billing connected to approved time',
        body: 'Approval Workflows sign off hours before they become invoice lines. Billing & Invoice uses the same project budgets PMs track—one chain from delivery to revenue.',
        modules: ['Approval Workflows', 'Billing & Invoice'],
      },
    ],
    moduleLinks: [
      { label: 'Resource Allocation', href: PRODUCT_ROUTES.resource },
      { label: 'Activity Tracker', href: PRODUCT_ROUTES.activity },
      { label: 'Smart Timesheets', href: PRODUCT_ROUTES.timesheets },
      { label: 'Billing & Invoice', href: PRODUCT_ROUTES.billing },
      { label: 'Analytics', href: `${PRODUCT_ROUTES.platform}#analytics` },
    ],
    outcomes: [
      {
        label: 'Schedules tied to submitted time',
        description: 'Plans and hours reference the same projects and phases.',
      },
      {
        label: 'Utilization principals can act on',
        description: 'See billable ratios and capacity before crunch periods stack up.',
      },
      {
        label: 'Faster path from approval to invoice',
        description: 'Approved hours move into billing without a separate rebuild.',
      },
    ],
    faqs: [
      {
        question: 'Does Smart Timesheets use keyword mapping—not AI guessing?',
        answer:
          'Yes. Smart Timesheets route hours using keyword mapping rules your firm controls, so entries land on the correct project and phase.',
      },
      {
        question: 'Can we track subconsultant or multi-discipline work?',
        answer:
          'Projects support phased delivery and resourcing across teams, so PMs see who is assigned where as deliverables move forward.',
      },
      {
        question: 'How does Avyro connect to our accounting stack?',
        answer:
          'Platform Integrations support connections including Deltek Ajera, QuickBooks, and calendar tools—so project financials sync without duplicate entry.',
      },
    ],
    relatedIds: ['architecture', 'construction'],
  },
  construction: {
    id: 'construction',
    eyebrow: 'For construction firms',
    headline: 'Field activity and back-office billing on the same timeline',
    subtitle:
      'Construction firms need site activity, change awareness, and invoicing to stay aligned. Avyro connects field-captured time, approvals, and billing so project managers and finance are not reconciling two versions of the same job.',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80',
      alt: 'Construction site with crane and building framework',
    },
    pullQuote:
      'When the job site and the back office run on different data, margin erodes quietly.',
    contextTitle: 'What construction firms need from their operating system',
    contextBody:
      'Jobs move fast—crews, subs, materials, and change events shift weekly. Home office teams need submitted time, budget status, and billing readiness without waiting for end-of-month exports. A connected platform keeps delivery and finance on one timeline.',
    pressures: [
      {
        title: 'Field time arrives late and messy',
        body: 'Supervisors and PMs reconstruct hours from texts and notes instead of capturing activity as work happens.',
      },
      {
        title: 'Budget status is always slightly old',
        body: 'When costs and hours sit in separate systems, leadership learns about overruns after the fact—not while there is room to adjust.',
      },
      {
        title: 'Invoicing waits on manual cleanup',
        body: 'Approved work still gets re-keyed into billing, stretching the gap between work completed and cash collected.',
      },
    ],
    capabilities: [
      {
        title: 'Capture work where it happens',
        body: 'Activity Tracker gives field and office teams a consistent place to log work against the job. That activity feeds Smart Timesheets so submission is review—not rebuild.',
        modules: ['Activity Tracker', 'Smart Timesheets'],
      },
      {
        title: 'Approvals before billing',
        body: 'Approval Workflows route timesheets and billing requests to the right manager. Finance gets signed-off records—not email threads and missing signatures.',
        modules: ['Approval Workflows'],
      },
      {
        title: 'Invoices tied to the job budget',
        body: 'Billing & Invoice turns approved time and project charges into invoice lines using budgets PMs already track. Analytics shows margin and variance while the job is still active.',
        modules: ['Billing & Invoice', 'Analytics'],
      },
    ],
    moduleLinks: [
      { label: 'Activity Tracker', href: PRODUCT_ROUTES.activity },
      { label: 'Smart Timesheets', href: PRODUCT_ROUTES.timesheets },
      { label: 'Billing & Invoice', href: PRODUCT_ROUTES.billing },
      { label: 'Asset Management', href: PRODUCT_ROUTES.assets },
      { label: 'Analytics', href: `${PRODUCT_ROUTES.platform}#analytics` },
    ],
    outcomes: [
      {
        label: 'Field-to-office time chain',
        description: 'Activity captured during the week flows into timesheets and approvals.',
      },
      {
        label: 'Budget visibility while jobs are active',
        description: 'Hours and billing reference the same project—not month-end exports.',
      },
      {
        label: 'Equipment and assets on the job',
        description: 'Track shared tools, vehicles, and software seats assigned to active work.',
      },
    ],
    faqs: [
      {
        question: 'Can field teams log activity from mobile workflows?',
        answer:
          'Activity Tracker is built for teams logging work during the week—so hours are captured closer to when work happens, not reconstructed on Friday.',
      },
      {
        question: 'Does Avyro handle equipment and asset tracking on jobs?',
        answer:
          'Yes. Asset Management covers equipment, vehicles, and software assets assigned to projects—so operations knows what is on site or allocated to active jobs.',
      },
      {
        question: 'How do approvals work for timesheets and billing?',
        answer:
          'Approval Workflows route submissions to the right manager with a clear queue—pending, approved, and rejected items stay auditable in one place.',
      },
    ],
    relatedIds: ['architecture', 'engineering'],
  },
}

export function getIndustryPage(id: string | undefined): IndustryPageContent | null {
  if (!id || !(id in INDUSTRY_PAGES)) {
    return null
  }

  return INDUSTRY_PAGES[id as IndustryRouteId]
}

export function getIndustryRoute(id: IndustryRouteId): string {
  return INDUSTRY_ROUTES[id]
}

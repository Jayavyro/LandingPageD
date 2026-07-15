export interface ArchitecturalScore {

  label: string

  score: number

  maxScore: number

}



export interface MatrixRow {

  id: string

  title: string

  winner: 'avyro' | 'competitor' | 'tie'

  avyroLabel: string

  avyroDescription: string

  competitorLabel: string

  competitorDescription: string

}



export interface CompetitorComparison {

  id: string

  name: string

  category: string

  tagline: string

  competitorBestFor: string

  avyroBestFor: string

  scores: ArchitecturalScore[]

  executiveVerdict: string

  strengths: string[]

  frictions: string[]

  matrix: MatrixRow[]

}



const SCORE_CATEGORIES = [

  'UI/UX & System Adoption',

  'Financial Controls & Audit Readiness',

  'Time Tracking & Compliance',

  'Resource Forecasting & Capacity',

  'CRM / Pipeline Management',

  'Implementation Velocity',

] as const



export const COMPETITIVE_COMPARISONS: CompetitorComparison[] = [

  {

    id: 'deltek-ajera',

    name: 'Deltek Ajera',

    category: 'SMB A&E Project Management & Accounting ERP',

    tagline:

      'Compare Deltek Ajera’s accounting-led ERP with Avyro’s connected AEC platform across CRM, delivery, time, and billing.',

    competitorBestFor:

      'Small to mid-sized A&E firms that want Deltek-native project accounting, time entry, expense tracking, and billing in one system — especially teams already invested in the Deltek ecosystem.',

    avyroBestFor:

      'Growing A&E firms that want AI-Powered CRM, project planning, Activity Tracker and Smart Timesheets with keyword mapping, Billing & Invoice, Analytics, and Executive Overview in one connected platform.',

    scores: [

      { label: SCORE_CATEGORIES[0], score: 2.5, maxScore: 5 },

      { label: SCORE_CATEGORIES[1], score: 3.5, maxScore: 5 },

      { label: SCORE_CATEGORIES[2], score: 2.5, maxScore: 5 },

      { label: SCORE_CATEGORIES[3], score: 2.0, maxScore: 5 },

      { label: SCORE_CATEGORIES[4], score: 1.5, maxScore: 5 },

      { label: SCORE_CATEGORIES[5], score: 2.5, maxScore: 5 },

    ],

    executiveVerdict:

      'Choose Deltek Ajera when mature AEC project accounting inside Deltek is the priority. Choose Avyro when the firm needs business development, delivery planning, keyword-mapped timesheets, billing, and principal-level visibility without stitching together separate tools.',

    strengths: [

      'Purpose-built AEC project accounting, WIP, and invoicing',

      'Integrated time, expense, and billing in one Deltek system',

      'Faster rollout than Deltek Vantagepoint for smaller firms',

      'Established option for firms already standardized on Deltek',

    ],

    frictions: [

      'Dated UX slows adoption outside finance-heavy users',

      'Limited CRM and pipeline tooling for growth-focused firms',

      'Resource planning relies on manual staffing updates',

      'Executive reporting often needs exports and manual consolidation',

    ],

    matrix: [

      {

        id: 'time-tracking',

        title: 'Time Tracking & Compliance',

        winner: 'avyro',

        avyroLabel: 'Avyro',

        avyroDescription:

          'Activity Tracker logs work during the day. Smart Timesheets then map those activities to the right project using keyword mapping, route through Approval Workflows, and connect to Billing & Invoice.',

        competitorLabel: 'Deltek Ajera',

        competitorDescription:

          'Traditional time and expense entry works for finance teams, but staff still spend more time manually selecting projects and chasing late submissions.',

      },

      {

        id: 'project-accounting',

        title: 'Project Accounting & Billing',

        winner: 'tie',

        avyroLabel: 'Avyro',

        avyroDescription:

          'Billing & Invoice ties approved timesheets to project budgets, with profitability and variance visibility in Analytics.',

        competitorLabel: 'Deltek Ajera',

        competitorDescription:

          'Mature AEC accounting for budgeting, WIP, and invoicing — a proven choice for firms that prioritize Deltek financial workflows.',

      },

      {

        id: 'resource-forecasting',

        title: 'Resource Planning & Capacity',

        winner: 'avyro',

        avyroLabel: 'Avyro',

        avyroDescription:

          'Resource Allocation and Gantt-based project planning keep schedules, assignments, and utilization visible across people and projects.',

        competitorLabel: 'Deltek Ajera',

        competitorDescription:

          'Staffing and scheduling views exist, but capacity planning is harder to maintain without frequent manual updates.',

      },

      {

        id: 'crm-pipeline',

        title: 'CRM & Pipeline Management',

        winner: 'avyro',

        avyroLabel: 'Avyro',

        avyroDescription:

          'AI-Powered CRM and Proposal Management feed client and opportunity data into project setup, resourcing, and delivery without duplicate entry.',

        competitorLabel: 'Deltek Ajera',

        competitorDescription:

          'Focused on accounting and delivery operations rather than modern CRM, pipeline management, or proposal automation.',

      },

      {

        id: 'executive-insights',

        title: 'Executive Insights & Reporting',

        winner: 'avyro',

        avyroLabel: 'Avyro',

        avyroDescription:

          'Executive Overview and Analytics bring revenue, pipeline, backlog, project health, and alerts into one firm-wide view for principals.',

        competitorLabel: 'Deltek Ajera',

        competitorDescription:

          'Reporting is strong for finance users, but principals often need separate exports to see cross-office performance in one place.',

      },

    ],

  },

  {

    id: 'bqe-core',

    name: 'BQE Core',

    category: 'Mid-Market Project Accounting',

    tagline:

      'Compare BQE Core’s finance-first project accounting with Avyro’s end-to-end AEC operating workflows.',

    competitorBestFor:

      'Small to mid-size A&E firms that want a familiar accounting-led system for time, billing, and project profitability — even if CRM, resourcing, and delivery live in other tools.',

    avyroBestFor:

      'Firms that want to connect AI-Powered CRM, project planning, Resource Allocation, Activity Tracker, Smart Timesheets, Billing & Invoice, and Analytics in one platform instead of separate point tools.',

    scores: [

      { label: SCORE_CATEGORIES[0], score: 2.5, maxScore: 5 },

      { label: SCORE_CATEGORIES[1], score: 3.0, maxScore: 5 },

      { label: SCORE_CATEGORIES[2], score: 2.0, maxScore: 5 },

      { label: SCORE_CATEGORIES[3], score: 1.5, maxScore: 5 },

      { label: SCORE_CATEGORIES[4], score: 1.0, maxScore: 5 },

      { label: SCORE_CATEGORIES[5], score: 2.0, maxScore: 5 },

    ],

    executiveVerdict:

      'Choose BQE Core when the firm mainly needs project accounting and billing in a finance-led system. Choose Avyro when winning work, planning delivery, capturing billable time accurately, and giving leaders live visibility all need to happen in one place.',

    strengths: [

      'Solid project accounting and billing for services firms',

      'Familiar workflows for finance and back-office teams',

      'Straightforward option for smaller teams with simpler needs',

    ],

    frictions: [

      'Limited CRM and business development tooling',

      'Weak cross-module visibility between finance and delivery',

      'Resource planning stays basic compared with modern AEC platforms',

      'Reporting often needs customization to support leadership views',

    ],

    matrix: [

      {

        id: 'time-tracking',

        title: 'Time Tracking & Compliance',

        winner: 'avyro',

        avyroLabel: 'Avyro',

        avyroDescription:

          'Activity Tracker captures daily work, and Smart Timesheets use keyword mapping to route time to the correct project before Approval Workflows and billing.',

        competitorLabel: 'BQE Core',

        competitorDescription:

          'Time entry is available, but teams still rely on manual project selection and follow-up outside the accounting workflow.',

      },

      {

        id: 'project-profitability',

        title: 'Project Profitability Insights',

        winner: 'tie',

        avyroLabel: 'Avyro',

        avyroDescription:

          'Analytics shows margin, budget variance, and project health using data from timesheets, Resource Allocation, and Billing & Invoice.',

        competitorLabel: 'BQE Core',

        competitorDescription:

          'Project profitability reporting is a core strength for accounting-led firms comfortable working inside a finance-first system.',

      },

      {

        id: 'connected-workflow',

        title: 'Connected CRM-to-Delivery Workflow',

        winner: 'avyro',

        avyroLabel: 'Avyro',

        avyroDescription:

          'AI-Powered CRM, Proposal Management, project planning, Resource Allocation, Smart Timesheets, and Billing & Invoice share one connected workflow.',

        competitorLabel: 'BQE Core',

        competitorDescription:

          'Strongest when the firm centers on accounting and billing, with other teams often working in separate tools for CRM and delivery.',

      },

    ],

  },

  {

    id: 'unanet',

    name: 'Unanet A&E',

    category: 'Industry-Specific Project ERP',

    tagline:

      'Compare Unanet A&E’s all-in-one ERP suite with Avyro’s modern adoption, timesheet workflow, and executive visibility.',

    competitorBestFor:

      'Established mid-market A&E firms that want CRM, ERP accounting, resourcing, and reporting in one vendor suite — especially during a move off spreadsheet-heavy processes.',

    avyroBestFor:

      'Firms that want CRM-to-delivery connectivity with faster day-to-day adoption, Activity Tracker-to-Smart Timesheets keyword mapping, Gantt-based Resource Allocation, and Executive Overview for principals.',

    scores: [

      { label: SCORE_CATEGORIES[0], score: 2.5, maxScore: 5 },

      { label: SCORE_CATEGORIES[1], score: 4.0, maxScore: 5 },

      { label: SCORE_CATEGORIES[2], score: 2.0, maxScore: 5 },

      { label: SCORE_CATEGORIES[3], score: 2.5, maxScore: 5 },

      { label: SCORE_CATEGORIES[4], score: 3.0, maxScore: 5 },

      { label: SCORE_CATEGORIES[5], score: 1.5, maxScore: 5 },

    ],

    executiveVerdict:

      'Choose Unanet A&E when deep ERP accounting and CRM in one vendor suite is the main requirement. Choose Avyro when teams need a more intuitive daily experience, keyword-mapped timesheets, modern Gantt resourcing, and principal dashboards with less configuration overhead.',

    strengths: [

      'Deep A&E CRM and sales pipeline management',

      'Comprehensive ERP accounting and financial reporting',

      'Strong business development and client relationship tracking',

    ],

    frictions: [

      'Timesheet and resourcing workflows still feel grid-heavy and manual',

      'Implementation and change management can be slow for growing firms',

      'Less intuitive day-to-day experience for project teams outside finance',

    ],

    matrix: [

      {

        id: 'timesheet-automation',

        title: 'Timesheet Workflow',

        winner: 'avyro',

        avyroLabel: 'Avyro',

        avyroDescription:

          'Activity Tracker captures work throughout the day. Smart Timesheets map those activities to projects using keyword mapping, then move through Approval Workflows into Billing & Invoice.',

        competitorLabel: 'Unanet A&E',

        competitorDescription:

          'Weekly timesheet grids are functional, but employees still spend more time manually coding entries and waiting on approvals.',

      },

      {

        id: 'resource-gantt',

        title: 'Resource & Gantt Planning',

        winner: 'avyro',

        avyroLabel: 'Avyro',

        avyroDescription:

          'Resource Allocation and Gantt-based project planning keep schedules, assignments, and utilization visible in one planning workflow.',

        competitorLabel: 'Unanet A&E',

        competitorDescription:

          'Resource planning is available, but teams often maintain spreadsheet-style grids that need frequent manual updates.',

      },

      {

        id: 'financial-intelligence',

        title: 'Financial Intelligence',

        winner: 'tie',

        avyroLabel: 'Avyro',

        avyroDescription:

          'Billing & Invoice, project budgets, and Analytics connect approved time and delivery data to profitability and variance tracking.',

        competitorLabel: 'Unanet A&E',

        competitorDescription:

          'Mature ERP accounting and audit-ready reporting remain a core reason firms choose Unanet for mid-market A&E operations.',

      },

      {

        id: 'executive-dashboard',

        title: 'Executive Dashboard',

        winner: 'avyro',

        avyroLabel: 'Avyro',

        avyroDescription:

          'Executive Overview and Analytics surface revenue, pipeline, backlog, portfolio health, and alerts for principals in one connected view.',

        competitorLabel: 'Unanet A&E',

        competitorDescription:

          'Leadership reporting is strong within ERP and CRM modules, but cross-role visibility can require more setup and exports.',

      },

    ],

  },

  {

    id: 'mavenlink',

    name: 'Mavenlink',

    category: 'Professional Services Automation',

    tagline:

      'Compare Mavenlink’s PSA delivery strengths with Avyro’s AEC-native finance, timesheets, and firm-wide analytics.',

    competitorBestFor:

      'Professional services organizations that want polished project delivery, task management, and resource scheduling — even if AEC-specific finance and firm-wide analytics need additional tools.',

    avyroBestFor:

      'A&E firms that need native Billing & Invoice, keyword-mapped Smart Timesheets, Resource Allocation, Analytics, and Executive Overview built for architecture and engineering operations.',

    scores: [

      { label: SCORE_CATEGORIES[0], score: 3.5, maxScore: 5 },

      { label: SCORE_CATEGORIES[1], score: 2.5, maxScore: 5 },

      { label: SCORE_CATEGORIES[2], score: 3.0, maxScore: 5 },

      { label: SCORE_CATEGORIES[3], score: 3.5, maxScore: 5 },

      { label: SCORE_CATEGORIES[4], score: 3.0, maxScore: 5 },

      { label: SCORE_CATEGORIES[5], score: 3.0, maxScore: 5 },

    ],

    executiveVerdict:

      'Choose Mavenlink when delivery UX and PSA-style resource scheduling are the priority. Choose Avyro when the firm needs AEC-native billing, Activity Tracker-to-timesheet workflows, and principal-level firm analytics in one platform.',

    strengths: [

      'Clean project delivery and task management experience',

      'Strong resource scheduling for services organizations',

      'Broad integrations for teams building around a PSA core',

    ],

    frictions: [

      'Not purpose-built for A&E finance, WIP, and invoicing depth',

      'Limited executive and multi-office analytics for firm principals',

      'Often needs add-ons or external systems for full ERP coverage',

    ],

    matrix: [

      {

        id: 'resource-forecasting',

        title: 'Resource Planning & Capacity',

        winner: 'tie',

        avyroLabel: 'Avyro',

        avyroDescription:

          'Resource Allocation and Gantt planning are built for AEC roles, project phases, and office-level utilization — not generic services staffing alone.',

        competitorLabel: 'Mavenlink',

        competitorDescription:

          'Resource scheduling is a PSA strength, especially for services teams managing tasks and assignments at scale.',

      },

      {

        id: 'aec-native',

        title: 'AEC-Native Financial Management',

        winner: 'avyro',

        avyroLabel: 'Avyro',

        avyroDescription:

          'Billing & Invoice, approved Smart Timesheets, project budgets, and Analytics are designed around how architecture and engineering firms operate.',

        competitorLabel: 'Mavenlink',

        competitorDescription:

          'Financial depth usually depends on integrations or companion tools rather than native AEC billing and WIP workflows.',

      },

      {

        id: 'timesheet-workflow',

        title: 'Activity-to-Timesheet Workflow',

        winner: 'avyro',

        avyroLabel: 'Avyro',

        avyroDescription:

          'Activity Tracker feeds Smart Timesheets, which map work to projects through keyword mapping and Approval Workflows before Billing & Invoice.',

        competitorLabel: 'Mavenlink',

        competitorDescription:

          'Time tracking works for PSA teams, but it is not built around activity capture and keyword-based project routing for AEC billable work.',

      },

      {

        id: 'executive-insights',

        title: 'Executive Insights & Reporting',

        winner: 'avyro',

        avyroLabel: 'Avyro',

        avyroDescription:

          'Executive Overview and Analytics give principals revenue, client, pipeline, and portfolio visibility across the full firm.',

        competitorLabel: 'Mavenlink',

        competitorDescription:

          'Reporting is strongest at the project and services-delivery level, not as a full AEC firm operating dashboard.',

      },

    ],

  },

  {

    id: 'monograph',

    name: 'Monograph',

    category: 'A&E Firm Management Platform',

    tagline:

      'Compare Monograph’s modern firm-management workflows with Avyro’s connected ERP-style platform for CRM, delivery, time, and billing.',

    competitorBestFor:

      'US-based architecture and engineering firms with roughly 5–50 people that want a clean, intuitive intake-to-invoice platform — especially teams comfortable keeping general ledger and firm-wide books in QuickBooks Online.',

    avyroBestFor:

      'A&E firms that want native Billing & Invoice, Activity Tracker and Smart Timesheets with keyword mapping, AI-Powered CRM, Resource Allocation, Analytics, and Executive Overview in one platform — without relying on QuickBooks for core financial workflow.',

    scores: [

      { label: SCORE_CATEGORIES[0], score: 4.5, maxScore: 5 },

      { label: SCORE_CATEGORIES[1], score: 3.0, maxScore: 5 },

      { label: SCORE_CATEGORIES[2], score: 3.0, maxScore: 5 },

      { label: SCORE_CATEGORIES[3], score: 3.5, maxScore: 5 },

      { label: SCORE_CATEGORIES[4], score: 3.5, maxScore: 5 },

      { label: SCORE_CATEGORIES[5], score: 4.0, maxScore: 5 },

    ],

    executiveVerdict:

      'Choose Monograph when a growing A&E firm wants a polished, easy-to-adopt firm management experience from pipeline to invoice, with QuickBooks handling the books. Choose Avyro when the firm needs keyword-mapped timesheets, native billing, AI-Powered CRM, and principal-level Executive Overview in one connected operating platform.',

    strengths: [

      'Modern, intuitive UX purpose-built for architecture and engineering firms',

      'Connected intake-to-invoice: pipeline, proposals, budgets, staffing, time, and invoicing',

      'Strong project profitability tracking, budget monitoring, and workload visibility',

      'QuickBooks Online sync for firms that want project accounting without replacing their ledger',

    ],

    frictions: [

      'Not a full ERP — general ledger and firm-wide books still depend on QuickBooks Online',

      'Time entry relies on manual project selection or calendar sync, not activity-to-timesheet automation',

      'Per-user pricing can add up quickly as firms scale beyond ~30 employees',

      'Less depth for multi-office principals needing firm-wide ERP-grade financial controls',

    ],

    matrix: [

      {

        id: 'time-tracking',

        title: 'Time Tracking & Compliance',

        winner: 'avyro',

        avyroLabel: 'Avyro',

        avyroDescription:

          'Activity Tracker captures work during the day. Smart Timesheets map those activities to projects using keyword mapping, then route through Approval Workflows into Billing & Invoice.',

        competitorLabel: 'Monograph',

        competitorDescription:

          'Time logging and timesheet auditing are easy to adopt, but staff still select projects manually or rely on calendar-based sync rather than keyword-mapped activity routing.',

      },

      {

        id: 'project-profitability',

        title: 'Project Profitability & Billing',

        winner: 'tie',

        avyroLabel: 'Avyro',

        avyroDescription:

          'Billing & Invoice connects approved Smart Timesheets to project budgets, with margin and variance visibility in Analytics — without a separate accounting system for core workflow.',

        competitorLabel: 'Monograph',

        competitorDescription:

          'Strong project-level budgeting, invoicing, and payment tracking — with QuickBooks Online handling the general ledger and firm-wide books.',

      },

      {

        id: 'resource-planning',

        title: 'Resource Planning & Capacity',

        winner: 'tie',

        avyroLabel: 'Avyro',

        avyroDescription:

          'Resource Allocation and Gantt-based project planning keep schedules, assignments, and utilization visible across people and project phases.',

        competitorLabel: 'Monograph',

        competitorDescription:

          'Staffing management, workload distribution, and profit forecasting help firms see who is overbooked and protect margins on active projects.',

      },

      {

        id: 'crm-pipeline',

        title: 'CRM & Pipeline Management',

        winner: 'tie',

        avyroLabel: 'Avyro',

        avyroDescription:

          'AI-Powered CRM and Proposal Management connect opportunities directly into project setup, resourcing, and delivery without duplicate entry.',

        competitorLabel: 'Monograph',

        competitorDescription:

          'Pipeline management, proposal builder, and opportunity forecasting give BD teams a modern intake workflow built for A&E firms.',

      },

      {

        id: 'platform-depth',

        title: 'Platform Depth & Financial Controls',

        winner: 'avyro',

        avyroLabel: 'Avyro',

        avyroDescription:

          'Billing & Invoice, Approval Workflows, Analytics, and Executive Overview provide firm-wide operating and financial visibility in one native platform.',

        competitorLabel: 'Monograph',

        competitorDescription:

          'Monograph positions itself as firm management, not traditional ERP — project accounting syncs to QuickBooks rather than replacing full ledger controls in-platform.',

      },

      {

        id: 'executive-insights',

        title: 'Executive Insights & Reporting',

        winner: 'avyro',

        avyroLabel: 'Avyro',

        avyroDescription:

          'Executive Overview and Analytics give principals revenue, pipeline, backlog, portfolio health, and alerts across the full firm in one view.',

        competitorLabel: 'Monograph',

        competitorDescription:

          'Reporting is strong for project managers and firm owners at the project level, but firm-wide principal dashboards can require more exports and consolidation.',

      },

    ],

  },

]



export const DEFAULT_COMPETITOR_ID = COMPETITIVE_COMPARISONS[0].id


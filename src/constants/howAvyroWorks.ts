export interface HowAvyroWorksStep {
  id: string
  step: string
  title: string
  description: string
}

export const HOW_AVYRO_WORKS_BADGE = 'How Avyro works'

export const HOW_AVYRO_WORKS_HEADLINE =
  'One continuous flow, from pitch to final invoice.'

export const HOW_AVYRO_WORKS_SUBTITLE =
  'No re-keying data. No manual syncs. Every project phase connects automatically — the work plan is the spine the whole firm runs on, not an afterthought buried in finance.'

export const HOW_AVYRO_WORKS_STEPS: HowAvyroWorksStep[] = [
  {
    id: 'capture-crm',
    step: '01',
    title: 'Capture & CRM',
    description:
      'Extract lead data from RFPs, scope documents, and emails automatically with built-in AI capture.',
  },
  {
    id: 'ai-work-plan',
    step: '02',
    title: 'AI Work Plan',
    description:
      'Generate structured project plans, deliverables, and fee breakdowns in seconds using proven A&E templates.',
  },
  {
    id: 'resource-allocation',
    step: '03',
    title: 'Resource Allocation',
    description:
      'Match upcoming project phases with available staff based on skills, billable targets, and live availability.',
  },
  {
    id: 'real-time-execution',
    step: '04',
    title: 'Real-Time Execution',
    description:
      'Mobile and web time entries map directly to project phases, with instant alerts when tasks exceed budget.',
  },
  {
    id: 'automated-billing',
    step: '05',
    title: 'Automated Billing',
    description:
      'Convert approved work plans and hours straight into invoices, AIA progress billing, or T&M summaries.',
  },
]

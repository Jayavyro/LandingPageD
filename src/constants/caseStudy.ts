export interface CaseStudyTextBlock {
  label: string
  copy: string
}

export interface CaseStudyQuote {
  quote: string
  name: string
  role: string
  company: string
}

export interface CaseStudyMetric {
  id: string
  value: string
  title: string
  caption: string
}

export const CASE_STUDY_BADGE = 'Case study'

/** [primary line, accent line] */
export const CASE_STUDY_HEADLINE_LINES: [string, string] = [
  'How fivD runs on one connected record.',
  "Here's what changed.",
]

export const CASE_STUDY_SUBTITLE =
  "fivD Architecture replaced spreadsheets and disconnected tools with Avyro's CRM, projects, timesheets, and billing — all on one record."

export const CASE_STUDY_META = 'fivD Architecture · Flagship partner'

export const CASE_STUDY_PROBLEM: CaseStudyTextBlock = {
  label: 'The problem',
  copy:
    'Disconnected spreadsheets and point tools meant project leads found out about budget and capacity problems after the hours were already spent.',
}

export const CASE_STUDY_SOLUTION: CaseStudyTextBlock = {
  label: 'The solution',
  copy:
    "fivD moved CRM, project delivery, timesheets, and billing onto Avyro's single connected record — replacing several separate tools with one system every team works from.",
}

export const CASE_STUDY_QUOTE: CaseStudyQuote = {
  quote:
    "What impressed me most about Avyro is that it's built around the real challenges AEC firms face every day. It's practical, easy for teams to adopt, and has helped us work more efficiently.",
  name: 'Gaurav Chopra',
  role: 'Co-Founder',
  company: 'fivD',
}

export const CASE_STUDY_METRICS: CaseStudyMetric[] = [
  {
    id: 'revenue',
    value: '+$25K',
    title: 'Revenue per employee',
    caption: 'More billable output from the same headcount.',
  },
  {
    id: 'budget',
    value: '−34%',
    title: 'Budget overrun',
    caption: 'Projects tracked against live budgets, not month-old reports.',
  },
  {
    id: 'payment',
    value: '1.8×',
    title: 'Faster time to payment',
    caption: 'Invoices go out the day work is approved.',
  },
  {
    id: 'utilization',
    value: '15%+',
    title: 'Utilization gained',
    caption: 'One live capacity view catches gaps before they cost billable hours.',
  },
]

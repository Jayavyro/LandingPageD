export interface WhyAvyroV3Result {
  id: string
  title: string
  metric: string
  caption: string
}

export const WHY_AVYRO_V3_SUBTITLE =
  'The firm-level numbers behind the module outcomes above — measured after go-live, not projected.'

export const WHY_AVYRO_V3_NOTE =
  'These three metrics roll up what you saw in each tab: +$25K revenue per employee, −34% budget overrun, and 1.8× faster payment — from one connected record.'

export const WHY_AVYRO_V3_RESULTS: WhyAvyroV3Result[] = [
  {
    id: 'revenue',
    title: 'Revenue per employee',
    metric: '+$25K',
    caption: 'More billable output from the same headcount',
  },
  {
    id: 'budget',
    title: 'Budget overrun',
    metric: '−34%',
    caption: 'Projects tracked against live budgets, not month-old reports',
  },
  {
    id: 'payment',
    title: 'Time to payment',
    metric: '1.8×',
    caption: 'Faster — because invoices leave the day work is approved',
  },
]

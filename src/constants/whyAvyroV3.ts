export interface WhyAvyroV3Result {
  id: string
  title: string
  metric: string
  caption: string
}

export const WHY_AVYRO_V3_SUBTITLE = 'Proven Results from an AEC Firm'

export const WHY_AVYRO_V3_NOTE = 'Results measured after implementing Avyro.'

export const WHY_AVYRO_V3_RESULTS: WhyAvyroV3Result[] = [
  {
    id: 'revenue',
    title: 'Win more work',
    metric: '+$25K',
    caption: 'More revenue per employee',
  },
  {
    id: 'budget',
    title: 'Deliver projects profitably',
    metric: '34%',
    caption: 'Less budget overrun',
  },
  {
    id: 'payment',
    title: 'Get paid faster',
    metric: '1.8×',
    caption: 'Faster time-to-payment',
  },
]

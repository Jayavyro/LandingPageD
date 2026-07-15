export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  company: string
}

export const TESTIMONIALS_TITLE = 'What Our Customers Say'

export const TESTIMONIALS_SUBTITLE = 'Trusted by teams building better AEC firms.'

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'gaurav-chopra',
    quote:
      "What impressed me most about Avyro is that it's built around the real challenges AEC firms face every day. It's practical, easy for teams to adopt, and has helped us work more efficiently. I believe it can add real value to any growing AEC firm.",
    name: 'Gaurav Chopra',
    role: 'Co-Founder',
    company: 'FivD',
  },
  {
    id: 'shruti-thakur',
    quote:
      'The onboarding experience was seamless. Our team started using Avyro quickly, and it brought our projects and day-to-day operations into one place. It feels like software designed for how AEC firms actually work.',
    name: 'Shruti Thakur',
    role: 'HR Manager',
    company: 'FivD',
  },
  {
    id: 'amandeep-singh',
    quote:
      "What I appreciate most about Avyro is how naturally it fits into our existing workflows. We didn't need to change the way we worked—we simply became more organized, collaborative, and efficient.",
    name: 'Amandeep Singh',
    role: 'HR Talent',
    company: 'FivD',
  },
]

import purposeBuiltImage from '../ChatGPT Image Jul 11, 2026, 06_10_04 PM.png'
import workplanImage from '../e546ee55-72d4-4bba-9460-5e14b448245e.png'
import myTeamImage from '../ChatGPT Image Jul 11, 2026, 06_19_51 PM.png'

export type WhyAvyroAlignment = 'left' | 'right'
export type WhyAvyroLayout = 'split' | 'panorama'

export interface WhyAvyroTimelineItem {
  title: string
  description: string
  image: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
  alignment: WhyAvyroAlignment
  layout: WhyAvyroLayout
}

export const WHY_AVYRO_TIMELINE: WhyAvyroTimelineItem[] = [
  {
    title: 'Purpose Built for AEC',
    description:
      'Designed specifically for Architecture, Engineering, and Construction firms to manage projects, people, and performance — all in one connected platform with AEC-focused workflows, financial control, and real-time insights.',
    image: purposeBuiltImage,
    imageAlt:
      'Avyro project dashboard with AEC-focused workflows, financial control, resource optimization, and live project insights',
    imageWidth: 1371,
    imageHeight: 1147,
    alignment: 'left',
    layout: 'split',
  },
  {
    title: 'Visual Project Workplans',
    description:
      'Plan every stage, milestone, and task on an interactive Gantt timeline. Drag to reschedule, track progress from schematic design through permit processing, and spot delays before they impact delivery.',
    image: workplanImage,
    imageAlt:
      'Avyro project workplan Gantt chart showing stages, milestones, weekly timeline, and today marker',
    imageWidth: 1874,
    imageHeight: 839,
    alignment: 'right',
    layout: 'panorama',
  },
  {
    title: 'Optimize Your Workforce',
    description:
      'See utilization, spare capacity, and bench cost for every team member in real time. Allocate the right people to the right projects, balance workload across your firm, and maximize billable performance.',
    image: myTeamImage,
    imageAlt:
      'Avyro My Team dashboard with utilization metrics, project allocation, and capacity breakdown',
    imageWidth: 1776,
    imageHeight: 886,
    alignment: 'left',
    layout: 'panorama',
  },
]

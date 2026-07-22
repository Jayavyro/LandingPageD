import type { LucideIcon } from 'lucide-react'
import { Building2, FolderOpen, HardHat } from 'lucide-react'
import { INDUSTRY_ROUTES } from './industryRoutes'

export interface IndustryItem {
  id: string
  title: string
  tagline: string
  icon: LucideIcon
  imageSrc: string
  imageAlt: string
  href: string
}

export const INDUSTRY_HEADLINE = 'Built for Architecture, Engineering, and Construction.'

/** Single supporting line — wedge + routing CTA */
export const INDUSTRY_SUBTITLE =
  'Pick your discipline. Same platform — fees, staffing, and invoices that match how your firm actually runs.'

export const INDUSTRY_ITEMS: IndustryItem[] = [
  {
    id: 'architecture',
    title: 'Architecture',
    tagline:
      'SD, DD, and CD fees captured on every phase — invoices that follow the work plan, not a month-end rebuild.',
    icon: Building2,
    imageSrc:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Modern glass architecture building exterior',
    href: INDUSTRY_ROUTES.architecture,
  },
  {
    id: 'engineering',
    title: 'Engineering',
    tagline:
      'Staff concurrent jobs without overbooking — multi-discipline capacity and fee budgets that hold to closeout.',
    icon: FolderOpen,
    imageSrc:
      'https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Steel structural framework at an engineering construction site',
    href: INDUSTRY_ROUTES.engineering,
  },
  {
    id: 'construction',
    title: 'Construction',
    tagline:
      'Field to invoice — crews, equipment, and cash on one live record from the job site to collections.',
    icon: HardHat,
    imageSrc:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Construction crane at a building site',
    href: INDUSTRY_ROUTES.construction,
  },
]

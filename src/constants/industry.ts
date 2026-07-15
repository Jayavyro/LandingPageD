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

export const INDUSTRY_SUBTITLE =
  'Solutions tailored to the unique needs of AEC firms.'

export const INDUSTRY_ITEMS: IndustryItem[] = [
  {
    id: 'architecture',
    title: 'Architecture',
    tagline: 'Design with precision. Deliver with confidence.',
    icon: Building2,
    imageSrc:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Modern glass architecture building exterior',
    href: INDUSTRY_ROUTES.architecture,
  },
  {
    id: 'engineering',
    title: 'Engineering',
    tagline: 'Plan smarter. Execute better.',
    icon: FolderOpen,
    imageSrc:
      'https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Steel structural framework at an engineering construction site',
    href: INDUSTRY_ROUTES.engineering,
  },
  {
    id: 'construction',
    title: 'Construction',
    tagline: 'Build efficiently. Deliver on time.',
    icon: HardHat,
    imageSrc:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Construction crane at a building site',
    href: INDUSTRY_ROUTES.construction,
  },
]

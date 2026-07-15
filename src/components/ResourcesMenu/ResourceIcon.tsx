import {
  BookOpen,
  FileText,
  PlayCircle,
  Scale,
  ScrollText,
  Sparkles,
} from 'lucide-react'
import type { ResourceIconName } from '../../constants/resourcesMenu'

const ICONS = {
  blog: ScrollText,
  'case-studies': FileText,
  videos: PlayCircle,
  documentation: BookOpen,
  benefits: Sparkles,
  comparisons: Scale,
} satisfies Record<ResourceIconName, typeof BookOpen>

interface ResourceIconProps {
  name: ResourceIconName
}

function ResourceIcon({ name }: ResourceIconProps) {
  const Icon = ICONS[name]
  return <Icon aria-hidden="true" />
}

export default ResourceIcon

import { Building2, HardHat, Wrench } from 'lucide-react'
import type { IndustryMenuIconName } from '../../constants/industryMenu'

const ICONS = {
  architecture: Building2,
  engineering: Wrench,
  construction: HardHat,
} satisfies Record<IndustryMenuIconName, typeof Building2>

interface IndustryIconProps {
  name: IndustryMenuIconName
}

function IndustryIcon({ name }: IndustryIconProps) {
  const Icon = ICONS[name]
  return <Icon aria-hidden="true" />
}

export default IndustryIcon

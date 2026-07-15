import {
  Building2,
  FolderKanban,
  HardHat,
  LineChart,
  UserRound,
  Wallet,
  Wrench,
} from 'lucide-react'
import type { UseCaseIconName } from '../../constants/useCaseMenu'

const ICONS = {
  architecture: Building2,
  engineering: Wrench,
  construction: HardHat,
  principals: UserRound,
  operations: LineChart,
  'project-managers': FolderKanban,
  accountants: Wallet,
} satisfies Record<UseCaseIconName, typeof Building2>

interface UseCaseIconProps {
  name: UseCaseIconName
}

function UseCaseIcon({ name }: UseCaseIconProps) {
  const Icon = ICONS[name]
  return <Icon aria-hidden="true" />
}

export default UseCaseIcon

import type { UseCaseItem } from '../../constants/useCaseMenu'
import NavDropdownItem from '../NavbarMenu/NavDropdownItem'
import UseCaseIcon from './UseCaseIcon'

interface UseCaseMenuItemProps {
  item: UseCaseItem
}

function UseCaseMenuItem({ item }: UseCaseMenuItemProps) {
  return (
    <NavDropdownItem
      title={item.title}
      description={item.description}
      href={item.href}
      icon={<UseCaseIcon name={item.icon} />}
    />
  )
}

export default UseCaseMenuItem

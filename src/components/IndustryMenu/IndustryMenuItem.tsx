import type { IndustryMenuItem } from '../../constants/industryMenu'
import NavDropdownItem from '../NavbarMenu/NavDropdownItem'
import IndustryIcon from './IndustryIcon'

interface IndustryMenuItemProps {
  item: IndustryMenuItem
}

function IndustryMenuItemComponent({ item }: IndustryMenuItemProps) {
  return (
    <NavDropdownItem
      title={item.title}
      description={item.description}
      href={item.href}
      icon={<IndustryIcon name={item.icon} />}
    />
  )
}

export default IndustryMenuItemComponent

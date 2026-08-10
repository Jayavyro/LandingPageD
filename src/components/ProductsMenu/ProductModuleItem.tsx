import type { ProductModule } from '../../constants/navMenu'
import NavDropdownItem from '../NavbarMenu/NavDropdownItem'
import ModuleIcon from './ModuleIcon'

interface ProductModuleItemProps {
  module: ProductModule
  onClick?: () => void
}

function ProductModuleItem({ module, onClick }: ProductModuleItemProps) {
  return (
    <NavDropdownItem
      title={module.title}
      description={module.description}
      href={module.href ?? '#'}
      icon={<ModuleIcon name={module.icon} />}
      badge={module.badge}
      onClick={onClick}
    />
  )
}

export default ProductModuleItem
